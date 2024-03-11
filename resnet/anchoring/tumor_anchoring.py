import torch
import torchvision.transforms as transforms
from anchor import anchor_image
import copy
from skimage.segmentation import quickshift
import skimage.io

model = torch.load("../../../mri_model_4class.pth", map_location="cpu")
model.eval()

if torch.cuda.is_available():
    print("listen good i dont need nobody")
    model.to('cuda')

tensorfy_image = transforms.ToTensor()

def transform_image(path):
    return skimage.io.imread(path)

def transform_images(paths):
    images = []
    for path in paths:
        image = transform_image(path)
        images.append(image)
    return images

class_names = ["glioma", "meningioma", "healthy", "pituitary"]

def tensorfy_images(images):
    tensors = []
    for image in images:
        tensor = tensorfy_image(image)
        if torch.cuda.is_available():
            tensor = tensor.to('cuda')
        tensors.append(tensor)
    return tensors

def predict(images):
    tensors = tensorfy_images(images)
    stacked_tensors = torch.stack(tensors)
    pred = model(stacked_tensors)
    probabilities = torch.nn.functional.softmax(pred, dim=1)
    return probabilities.cpu().detach().numpy()

def draw_anchor(segments, explanation, image):
    image_anchor = copy.deepcopy(image)
    image_anchor[:] = 0
    for x in explanation:
        image_anchor[segments == x[0]] = image[segments == x[0]]
    return image_anchor

#image is a skimage
def explain(image, images_location):
    explainer = anchor_image.AnchorImage(images_location, transform_img_fn=transform_images)
    segments, explanation = explainer.explain_instance(image, predict, threshold=0.6)
    return draw_anchor(segments, explanation, image)


images_location = "../../../tumor_images"
image_name = "healthy-no_tumor-97.jpg"
image = transform_image(images_location + "/" + image_name)

image_anchor = explain(image, images_location)

skimage.io.imshow(image_anchor)
skimage.io.show()
