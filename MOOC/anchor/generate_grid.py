#make file
# Generate a grid of numbers from 0 to 100 in a 10x2000 grid
# The grid will be saved to a file called grid_text.txt
#create file




# Open the file for writing
with open('grid_text.txt', 'w') as save_file:
    # Generate grid
    for i in range(0, 10):
        # Generate the row string with numbers from 0 to 1999 and ending with 100
        numbers = [('\'' + str(i) + '.' + str(j) + '\'') for j in range(0, 2000)] + ['100']
        row_string = f"{i}: [{', '.join(map(str, numbers))}],\n"
        
        # Print the row string for verification
        print(row_string.strip())
        
        # Write the row string to the file
        save_file.write(row_string)