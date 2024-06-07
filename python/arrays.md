
---

# Python Arrays

## Introduction

Python does not have built-in support for arrays, but you can use the `array` module to work with arrays. Arrays in Python are collections of items of the same type. However, for more versatile and powerful array handling, especially for numerical data, the `numpy` library is often used.

### Using the `array` Module

The `array` module provides a way to store a sequence of elements of the same type efficiently.

```python
import array

# Creating an array of integers
arr = array.array('i', [1, 2, 3, 4, 5])
print(arr)  # Output: array('i', [1, 2, 3, 4, 5])
```

### Using the `numpy` Library

The `numpy` library is commonly used for handling arrays and provides extensive functionality for numerical computations.

```python
import numpy as np

# Creating a numpy array
arr = np.array([1, 2, 3, 4, 5])
print(arr)  # Output: [1 2 3 4 5]
```

---

## Array Methods (array module)

### Creating an Array

To create an array, you need to specify the type code and initial elements.

```python
import array

arr = array.array('i', [1, 2, 3, 4, 5])
```

### Common Type Codes

- `'b'`: signed integer (1 byte)
- `'B'`: unsigned integer (1 byte)
- `'i'`: signed integer (2 bytes)
- `'I'`: unsigned integer (2 bytes)
- `'f'`: floating point (4 bytes)
- `'d'`: double floating point (8 bytes)

### Accessing Elements

You can access elements by their index.

```python
print(arr[0])  # Output: 1
print(arr[2])  # Output: 3
```

### Adding Elements

#### `array.append(x)`

Adds an element to the end of the array.

```python
arr.append(6)
print(arr)  # Output: array('i', [1, 2, 3, 4, 5, 6])
```

#### `array.extend(iterable)`

Adds elements from an iterable to the end of the array.

```python
arr.extend([7, 8])
print(arr)  # Output: array('i', [1, 2, 3, 4, 5, 6, 7, 8])
```

### Inserting Elements

#### `array.insert(i, x)`

Inserts an element at a specified position.

```python
arr.insert(0, 0)
print(arr)  # Output: array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8])
```

### Removing Elements

#### `array.remove(x)`

Removes the first occurrence of the specified element.

```python
arr.remove(3)
print(arr)  # Output: array('i', [0, 1, 2, 4, 5, 6, 7, 8])
```

#### `array.pop([i])`

Removes and returns the element at the specified position. If no index is specified, it removes and returns the last element.

```python
last_element = arr.pop()
print(last_element)  # Output: 8
print(arr)           # Output: array('i', [0, 1, 2, 4, 5, 6, 7])
```

### Other Methods

#### `array.index(x)`

Returns the index of the first occurrence of the specified element.

```python
index = arr.index(5)
print(index)  # Output: 4
```

#### `array.reverse()`

Reverses the order of elements in the array.

```python
arr.reverse()
print(arr)  # Output: array('i', [7, 6, 5, 4, 2, 1, 0])
```

#### `array.count(x)`

Returns the number of occurrences of the specified element.

```python
count = arr.count(4)
print(count)  # Output: 1
```

#### `array.buffer_info()`

Returns a tuple containing the memory address and the length of the array.

```python
buffer_info = arr.buffer_info()
print(buffer_info)  # Output: (address, length)
```

#### `array.byteswap()`

Swaps the byte order of the elements.

```python
arr.byteswap()
print(arr)  # Byte order of elements will be swapped
```

### Converting Array to List

#### `array.tolist()`

Converts the array to a list.

```python
arr_list = arr.tolist()
print(arr_list)  # Output: [7, 6, 5, 4, 2, 1, 0]
```

### Iterating through an Array

```python
for element in arr:
    print(element)
# Output:
# 7
# 6
# 5
# 4
# 2
# 1
# 0
```

---

## Numpy Array Methods (numpy)

### Creating Arrays

You can create arrays using various methods in numpy.

```python
import numpy as np

# Creating an array from a list
arr = np.array([1, 2, 3, 4, 5])

# Creating an array of zeros
zeros = np.zeros(5)

# Creating an array of ones
ones = np.ones(5)

# Creating an array with a range of values
range_array = np.arange(0, 10, 2)

# Creating a 2D array
two_d_array = np.array([[1, 2, 3], [4, 5, 6]])
```

### Accessing and Modifying Elements

You can access and modify elements using indexing and slicing.

```python
print(arr[0])  # Output: 1
print(arr[1:4])  # Output: [2 3 4]

arr[2] = 10
print(arr)  # Output: [ 1  2 10  4  5]
```

### Array Operations

Numpy allows for element-wise operations on arrays.

```python
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# Addition
print(arr1 + arr2)  # Output: [5 7 9]

# Multiplication
print(arr1 * arr2)  # Output: [ 4 10 18]

# Dot Product
print(np.dot(arr1, arr2))  # Output: 32
```

### Aggregation Functions

#### `numpy.sum()`

Returns the sum of all elements in the array.

```python
print(np.sum(arr))  # Output: 22
```

#### `numpy.mean()`

Returns the mean of all elements in the array.

```python
print(np.mean(arr))  # Output: 4.4
```

#### `numpy.min()`

Returns the minimum value in the array.

```python
print(np.min(arr))  # Output: 1
```

#### `numpy.max()`

Returns the maximum value in the array.

```python
print(np.max(arr))  # Output: 10
```

### Reshaping Arrays

#### `numpy.reshape()`

Reshapes the array without changing its data.

```python
arr = np.array([1, 2, 3, 4, 5, 6])
reshaped_arr = arr.reshape((2, 3))
print(reshaped_arr)
# Output:
# [[1 2 3]
#  [4 5 6]]
```

### Concatenating Arrays

#### `numpy.concatenate()`

Concatenates two or more arrays.

```python
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
concatenated_arr = np.concatenate((arr1, arr2))
print(concatenated_arr)  # Output: [1 2 3 4 5 6]
```

### Sorting Arrays

#### `numpy.sort()`

Returns a sorted copy of the array.

```python
unsorted_arr = np.array([3, 1, 2])
sorted_arr = np.sort(unsorted_arr)
print(sorted_arr)  # Output: [1 2 3]
```

### Broadcasting

Numpy arrays support broadcasting, which allows for arithmetic operations between arrays of different shapes.

```python
arr = np.array([1, 2, 3])
scalar = 2
result = arr * scalar
print(result)  # Output: [2 4 6]
```

### Array Copying

#### `numpy.copy()`

Creates a copy of the array.

```python
original = np.array([1, 2, 3])
copied = np.copy(original)
print(copied)  # Output: [1 2 3]
```

---

This document provides detailed documentation on arrays in Python, using both the `array` module and the `numpy` library, complete with methods and examples.
