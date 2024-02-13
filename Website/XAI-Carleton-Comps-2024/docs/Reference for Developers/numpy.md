---
## Display h2 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Numpy (Examples of images and latex in docusaurus)

## Packages

Read through a subset of the parts of [this linked numpy tutorial](https://colab.research.google.com/corgiredirector?site=https%3A%2F%2Fnumpy.org%2Fdoc%2Fstable%2Fuser%2Fabsolute_beginners.html): start at the beginning (although you can ignore "how to install" as it's already installed on colab) and end with "**Basic array operations**". Then, work through the exercises below to get a little hands on practice, referring back to the tutorial to get more information.

## Creating Arrays

Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be


$\frac{1}{3}$

```python
import numpy as np

a = np.array([1, 2, 3, 4, 5, 6])
a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

print(a[0]) #[1 2 3 4]

np.zeros(2) #array([0., 0.])
np.ones(2)  #array([1., 1.])
```

A **vector** is an array with a single dimension (there’s no difference between row and column vectors), while a **matrix** refers to an array with two dimensions. For **3-D** or higher dimensional arrays, the term **tensor** is also commonly used.

In NumPy, dimensions are called **axes**.

Or even an empty array! The function `empty` creates an array whose initial content is random and depends on the state of the memory. The reason to use `empty` over `zeros` (or something similar) is speed - just make sure to fill every element afterwards!

```python
>>> ## Create an empty array with 2 elements
>>> np.empty(2) 
array([3.14, 42.  ])  ## may vary
```

You can create an array with a range of elements:

```python
>>> np.arange(4)
array([0, 1, 2, 3])
```

And even an array that contains a range of evenly spaced intervals. To do this, you will specify the **first number**, **last number**, and the **step size**.

```python
>>> np.arange(2, 9, 2)
array([2, 4, 6, 8])
```

You can also use `np.linspace()` to create an array with values that are spaced linearly in a specified interval:

```python
>>> np.linspace(0, 10, num=5)
array([ 0. ,  2.5,  5. ,  7.5, 10. ])
```

**Specifying your data type**

While the default data type is floating point (`np.float64`), you can explicitly specify which data type you want using the `dtype` keyword.

```python
>>> x = np.ones(2, dtype=np.int64)
>>> x
array([1, 1])
```

```python
## First, we'll create an array of random integers to work with

import numpy as np

np.random.seed(7) ## This guarantees the code will generate the same set of random numbers whenever executed

random_integers = np.random.randint(1,high=2020, size=(20, 5))

random_integers
```


## Sorting

```python
>>> np.sort(arr)
array([1, 2, 3, 4, 5, 6, 7, 8])
```

In addition to sort, which returns a sorted copy of an array, you can use:
- [`argsort`](https://numpy.org/doc/stable/reference/generated/numpy.argsort.html#numpy.argsort "numpy.argsort"), which is an indirect sort along a specified axis,
- [`lexsort`](https://numpy.org/doc/stable/reference/generated/numpy.lexsort.html#numpy.lexsort "numpy.lexsort"), which is an indirect stable sort on multiple keys,
- [`searchsorted`](https://numpy.org/doc/stable/reference/generated/numpy.searchsorted.html#numpy.searchsorted "numpy.searchsorted"), which will find elements in a sorted array, and
- [`partition`](https://numpy.org/doc/stable/reference/generated/numpy.partition.html#numpy.partition "numpy.partition"), which is a partial sort.
## Concatenating

If you start with these arrays:

```python
>>> a = np.array([1, 2, 3, 4])
>>> b = np.array([5, 6, 7, 8])
```

You can concatenate them with `np.concatenate()`.
```python
>>> np.concatenate((a, b))
array([1, 2, 3, 4, 5, 6, 7, 8])
```
Or, if you start with these arrays:

```python 
>>> x = np.array([[1, 2], [3, 4]])
>>> y = np.array([[5, 6]])
```

You can concatenate them with:

```python
>>> np.concatenate((x, y), axis=0)
array([[1, 2],
       [3, 4],
       [5, 6]])
```
## Removing
In order to remove elements from an array, it’s simple to use indexing to select the elements that you want to keep.


## Meta-data

To find the number of dimensions of the array, run:

```python
>>> array_example.ndim
3
```

To find the total number of elements in the array, run:

```python
>>> array_example.size
24
```

And to find the shape of your array, run: 
```python
>>> array_example.shape
(3, 2, 4)
```

^951a03

^677c92
## Reshaping

Using `arr.reshape()` will give a new shape to an array without changing the data. Just remember that when you use the reshape method, the array you want to produce needs to have the same number of elements as the original array. If you start with an array with 12 elements, you’ll need to make sure that your new array also has a total of 12 elements.

If you start with this array:

```python
>>> a = np.arange(6)
>>> print(a)
[0 1 2 3 4 5]
```

You can use `reshape()` to reshape your array. For example, you can reshape this array to an array with three rows and two columns:

```python
>>> b = a.reshape(3, 2)
>>> print(b)
[[0 1]
 [2 3]
 [4 5]]
```

With `np.reshape`, you can specify a few optional parameters:

```python
>>> np.reshape(a, newshape=(1, 6), order='C')
array([[0, 1, 2, 3, 4, 5]])
```

`newshape` is the new shape you want. You can specify an integer or a tuple of integers. If you specify an integer, the result will be an array of that length. The shape should be compatible with the original shape.

`order:` `C` means to read/write the elements using C-like index order, `F` means to read/write the elements using Fortran-like index order, `A` means to read/write the elements in Fortran-like index order if a is Fortran contiguous in memory, C-like order otherwise. (This is an optional parameter and doesn’t need to be specified.)
 
 Essentially, C and Fortran orders have to do with how indices correspond to the order the array is stored in memory. In Fortran, when moving through the elements of a two-dimensional array as it is stored in memory, the **first** index is the most rapidly varying index. As the first index moves to the next row as it changes, the matrix is stored one column at a time. This is why Fortran is thought of as a **Column-major language**. In C on the other hand, the **last** index changes the most rapidly. The matrix is stored by rows, making it a **Row-major language**. What you do for C or Fortran depends on whether it’s more important to preserve the indexing convention or not reorder the data.
## Convert a 1D array into a 2D

Using `np.newaxis` will increase the dimensions of your array by one dimension

For example, if you start with this array:

```python
>>> a = np.array([1, 2, 3, 4, 5, 6])
>>> a.shape
(6,)
```

You can use `np.newaxis` to add a new axis:

``` python
>>> a2 = a[np.newaxis, :]
>>> a2.shape
(1, 6)
```

You can explicitly convert a 1D array with either a row vector or a column vector using `np.newaxis`. For example, you can convert a 1D array to a row vector by inserting an axis along the first dimension:

```python
>>> row_vector = a[np.newaxis, :]
>>> row_vector.shape
(1, 6)
```

Or, for a column vector, you can insert an axis along the second dimension:

```python
>>> col_vector = a[:, np.newaxis]
>>> col_vector.shape
(6, 1)
```

You can also expand an array by inserting a new axis at a specified position with `np.expand_dims`.

For example, if you start with this array:

```python
>>> a = np.array([1, 2, 3, 4, 5, 6])
>>> a.shape
(6,)
```

You can use `np.expand_dims` to add an axis at index position 1 with:

```python
>>> b = np.expand_dims(a, axis=1)
>>> b.shape
(6, 1)
```

You can add an axis at index position 0 with:

```python
>>> c = np.expand_dims(a, axis=0)
>>> c.shape
(1, 6)
```

Find more information about [newaxis here](https://numpy.org/doc/stable/reference/arrays.indexing.html#arrays-indexing) and `expand_dims` at [`expand_dims`](https://numpy.org/doc/stable/reference/generated/numpy.expand_dims.html#numpy.expand_dims "numpy.expand_dims").

## Indexing and slicing

```python
>>> data = np.array([1, 2, 3])
>>> data[1]
2
>>> data[0:2]
array([1, 2])
>>> data[1:]
array([2, 3])
>>> data[-2:]
array([2, 3])
```

If you want to select values from your array that fulfill certain conditions, it’s straightforward with NumPy.

For example, if you start with this array:

```python
>>> a = np.array([[1 , 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

You can easily print all of the values in the array that are less than 5.

```python
>>> print(a[a < 5])
[1 2 3 4]
```

You can also select, for example, numbers that are equal to or greater than 5, and use that condition to index an array.

```python
>>> five_up = (a >= 5)
>>> print(a[five_up])
[ 5  6  7  8  9 10 11 12]
```

You can select elements that are divisible by 2:

```python
>>> print(a[a%2==0])
[ 2  4  6  8 10 12]
```

Or you can select elements that satisfy two conditions using the `&` and `|` operators:

```python
>>> print(a[(a > 2) & (a < 11)])
[ 3  4  5  6  7  8  9 10]
```

You can also make use of the logical operators **&** and **|** in order to return Boolean values that specify whether or not the values in an array fulfill a certain condition. This can be useful with arrays that contain names or other categorical values.

```python
>>> print((a > 5) | (a == 5))
[[False False False False]
 [ True  True  True  True]
 [ True  True  True True]]
```

You can also use `np.nonzero()` to select elements or indices from an array.

Starting with this array:

```python
>>> a = np.array([
		[1, 2, 3, 4], 
		[5, 6, 7, 8], 
		[9, 10, 11, 12]
	])
```

You can use `np.nonzero()` to print the indices of elements that are, for example, less than 5:

```python
>>> b = np.nonzero(a < 5)
>>> print(b)
(array([0, 0, 0, 0]), array([0, 1, 2, 3]))
```

In this example, a tuple of arrays was returned: one for each dimension. The first array represents the row indices where these values are found, and the second array represents the column indices where the values are found.

If you want to generate a list of coordinates where the elements exist, you can zip the arrays, iterate over the list of coordinates, and print them. For example:

```python
>>> list_of_coordinates= list(zip(b[0], b[1]))
>>> for coord in list_of_coordinates:
...     print(coord)
(0, 0)
(0, 1)
(0, 2)
(0, 3)
```

You can also use `np.nonzero()` to print the elements in an array that are less than 5 with:

```python
>>> print(a[b])
[1 2 3 4]
```

If the element you’re looking for doesn’t exist in the array, then the returned array of indices will be empty. For example:

```python
>>> not_there = np.nonzero(a == 42)
>>> print(not_there)
(array([], dtype=int64), array([], dtype=int64))
```

## create an array from existing data

Let’s say you have this array:

```python
>>> a = np.array([1,  2,  3,  4,  5,  6,  7,  8,  9, 10])
```

You can create a new array from a section of your array any time by specifying where you want to slice your array.

```python
>>> arr1 = a[3:8]
>>> arr1
array([4, 5, 6, 7, 8])
```

You can also stack two existing arrays, both vertically and horizontally. Let’s say you have two arrays, `a1` and `a2`:

```python
>>> a1 = np.array([[1, 1],
...                [2, 2]])

>>> a2 = np.array([[3, 3],
...                [4, 4]])
```

You can stack them vertically with `vstack`:

```python
>>> np.vstack((a1, a2))
array([[1, 1],
       [2, 2],
       [3, 3],
       [4, 4]])
```

Or stack them horizontally with `hstack`:

```python
>>> np.hstack((a1, a2))
array([[1, 1, 3, 3],
       [2, 2, 4, 4]])
```

You can split an array into several smaller arrays using `hsplit`. You can specify either the number of equally shaped arrays to return or the columns _after_ which the division should occur.

Let’s say you have this array:

```python
>>> x = np.arange(1, 25).reshape(2, 12)
>>> x
array([
	[ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12],
	[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
])
```

If you wanted to split this array into three equally shaped arrays, you would run:

```python
>>> np.hsplit(x, 3)
[array([
	[ 1,  2,  3,  4],
	[13, 14, 15, 16]]), 
array([
	[ 5,  6,  7,  8],
    [17, 18, 19, 20]]), 
array([
	[ 9, 10, 11, 12],
	[21, 22, 23, 24]])]
```

If you wanted to split your array after the third and fourth column, you’d run:

```python
>>> np.hsplit(x, (3, 4))
[array([
	[ 1,  2,  3],
	[13, 14, 15]]), 
array([[4],[16]]), 
array([
	[ 5,  6,  7,  8,  9, 10, 11, 12],
    [17, 18, 19, 20, 21, 22, 23, 24]])]
```

[Learn more about stacking and splitting arrays here](https://numpy.org/doc/stable/user/quickstart.html#quickstart-stacking-arrays)
You can use the `view` method to create a new array object that looks at the same data as the original array (a _shallow copy_).

Views are an important NumPy concept! NumPy functions, as well as operations like indexing and slicing, will return views whenever possible. This saves memory and is faster (no copy of the data has to be made). However it’s important to be aware of this - modifying data in a view also modifies the original array!

Let’s say you create this array:

```python
>>> a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

Now we create an array `b1` by slicing `a` and modify the first element of `b1`. This will modify the corresponding element in `a` as well!

```python
>>> b1 = a[0, :]
>>> b1
array([1, 2, 3, 4])
>>> b1[0] = 99
>>> b1
array([99,  2,  3,  4])
>>> a
array([[99,  2,  3,  4],
       [ 5,  6,  7,  8],
       [ 9, 10, 11, 12]])
```

Using the `copy` method will make a complete copy of the array and its data (a _deep copy_). To use this on your array, you could run:

```python
>>> b2 = a.copy()
```

[Learn more about copies and views here](https://numpy.org/doc/stable/user/quickstart.html#quickstart-copies-and-views).

## Basic array operations

You can add the arrays together with the plus sign.

```python
>>> data = np.array([1, 2])
>>> ones = np.ones(2, dtype=int)
>>> data + ones
array([2, 3])
```

![../_images/np_data_plus_ones.png](https://numpy.org/doc/stable/_images/np_data_plus_ones.png)

You can, of course, do more than just addition!

```python
>>> data - ones
array([0, 1])
>>> data * data
array([1, 4])
>>> data / data
array([1., 1.])
```

![../_images/np_sub_mult_divide.png](https://numpy.org/doc/stable/_images/np_sub_mult_divide.png)

Basic operations are simple with NumPy. If you want to find the sum of the elements in an array, you’d use `sum()`. This works for 1D arrays, 2D arrays, and arrays in higher dimensions.

```python
>>> a = np.array([1, 2, 3, 4])
>>> a.sum()
10
```

To add the rows or the columns in a 2D array, you would specify the axis.

If you start with this array:

```python
>>> b = np.array([[1, 1], [2, 2]])
```

You can sum over the axis of rows with:

```python
>>> b.sum(axis=0)
array([3, 3])
```

You can sum over the axis of columns with:

```python
>>> b.sum(axis=1)
array([2, 4])
```

[Learn more about basic operations here](https://numpy.org/doc/stable/user/quickstart.html#quickstart-basic-operations).

```python
np.average(random_integers[:, 0])
```

Write code in the cell below to calculate the maximum value in `random_integers` array that is less than 1000.
```python
np.max(random_integers[random_integers<1000])
```

You can exponentiate in python using `**`. E.g., `3**2` is $3^2 = 9$.
```python
assert(vector1**2 == np.array([x**2 for x in vector1]))
```

```python
np.sqrt(vector1), [np.sqrt(x) for x in vector1], "each value/cell is square rooted"
```

## PS1

`np.linalg.norm(...)`
`np.array_split(source, num_folds)`
`np.concatenate([fold for i, fold in enumerate(X_train_folds) if i != fold_num])`

```python
mask = (y_test_pred == y_test).astype(float)

def catagory_accuracy(i):
  indexes = np.where(y_test == i)[0]
  correct_guesses = np.sum(mask[indexes])
  return (round(correct_guesses/len(indexes), 2), classes[i])

accuracy = [catagory_accuracy(i) for i in range(10)]
max_ratio, max_name = max(accuracy)
min_ratio, min_name = min(accuracy)
```

```python
def compute_distances_one_loop(self, X):
	"""
	Compute the distance between each test point in X and each
	training point
	in self.X_train using a single loop over the test data.
	Input / Output: Same as compute_distances_two_loops
	"""
	num_test = X.shape[0]
	num_train = self.X_train.shape[0]
	dists = np.zeros((num_test, num_train))
	for i in range(num_test):
		#######################################################################
		## TODO:                                                   
		## Compute the l2 distance between the ith test point and 
		#all training #
		## points, and store the result in dists[i, :].            
		## Do not use np.linalg.norm().                            
		## HINT: Start from your two loops version and modify it   
		## Print out shapes to better understand what's going on.  #######################################################################
		## *****START OF YOUR CODE (DO NOT DELETE/MODIFY 
		#THIS LINE)*****
		dists[i] = np.sqrt(
		  np.sum(
			(X[i] - self.X_train)**2, 
			axis=1
		  )
		)
		## *****END OF YOUR CODE (DO NOT DELETE/MODIFY 
		#THIS LINE)*****
	return dists

def compute_distances_no_loops(self, X):
	"""
	Compute the distance between each test point in X and each 
	training point in self.X_train using no explicit loops.
	Input / Output: Same as compute_distances_two_loops
	"""
	dists = np.sqrt(np.sum(X**2, axis=1, keepdims=True) 
					-2*np.matmul(X,self.X_train.T) 
					+ np.sum(self.X_train**2, axis=1, 
					+ keepdims=True).T)
	return dists

def predict_labels(self, dists, k=1):
        """
        Given a matrix of distances between test points and training
        points, predict a label for each test point.

        Inputs:
        - dists: A numpy array of shape (num_test, num_train) where
        dists[i, j]
          gives the distance betwen the ith test point and the jth
          training point.

        Returns:
        - y: A numpy array of shape (num_test,) containing 
        predicted labels for the test data, where y[i] is the
        predicted label for the test point X[i].
        """
        num_test = dists.shape[0]
        y_pred = np.zeros(num_test)
        for i in range(num_test):
            ## A list of length k storing the labels of the k 
            ## nearest neighbors to
            ## the ith test point.
            closest_y = []
            #######################################################################
## TODO:                                                                
## Use the distance matrix to find the k nearest neighbors of the ith   
## testing point, and use self.y_train to find the labels of these      
## neighbors. Store these labels in closest_y.                          
## Hint: Look up the function numpy.argsort in the numpy documentation. #######################################################################
            ## *****START OF YOUR CODE (DO NOT DELETE/MODIFY 
            #THIS LINE)*****
            nearest_neighbors = np.argsort(dists[i])[:k]
            closest_y = self.y_train[nearest_neighbors]
            ## *****END OF YOUR CODE (DO NOT DELETE/MODIFY THIS 
            #LINE)*****
            ######################################################################
            ## TODO:                                                   
            ## Now that you have found the labels of the k 
            ## nearest neighbors, you need to find the most common
            ## label in the list closest_y of labels.
            ## Store this label in y_pred[i]. Break ties by 
            ## choosing the smaller     #
            ## label.                                                 #######################################################################
            values, indexes = np.unique(closest_y, return_counts=True)
            y_pred[i] = values[np.argmax(indexes)]
            ## *****END OF YOUR CODE (DO NOT DELETE/MODIFY 
            #THIS LINE)*****
        return y_pred
```


```