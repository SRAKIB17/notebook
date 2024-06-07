
---

# Python Booleans

## Boolean Values

Boolean values represent one of two values: `True` or `False`.

```python
a = True
b = False
print(a)  # Output: True
print(b)  # Output: False
```

## Boolean Operations

### Logical Operators

- **and**: Returns `True` if both operands are `True`.
- **or**: Returns `True` if at least one operand is `True`.
- **not**: Returns `True` if the operand is `False`.

```python
a = True
b = False
print(a and b)  # Output: False
print(a or b)   # Output: True
print(not a)    # Output: False
```

### Comparison Operators

- **==**: Equals.
- **!=**: Not equals.
- **>**: Greater than.
- **<**: Less than.
- **>=**: Greater than or equal to.
- **<=**: Less than or equal to.

```python
x = 10
y = 20
print(x == y)  # Output: False
print(x != y)  # Output: True
print(x > y)   # Output: False
print(x < y)   # Output: True
print(x >= y)  # Output: False
print(x <= y)  # Output: True
```

### Type Conversion to Boolean

You can use the `bool()` function to convert a value to a boolean.

```python
print(bool(0))        # Output: False
print(bool(1))        # Output: True
print(bool(""))       # Output: False
print(bool("Hello"))  # Output: True
print(bool([]))       # Output: False
print(bool([1, 2, 3]))# Output: True
```

## Python Lists

### Defining Lists

A list is an ordered collection of items which can be of different types.

```python
my_list = [1, 2, 3, "Hello", 4.5]
print(my_list)  # Output: [1, 2, 3, 'Hello', 4.5]
```

### Accessing List Elements

You can access elements in a list using indexing and slicing.

```python
my_list = [1, 2, 3, "Hello", 4.5]
print(my_list[0])  # Output: 1
print(my_list[-1]) # Output: 4.5
print(my_list[1:3])# Output: [2, 3]
```

### List Methods

#### `list.append(x)`

Adds an item to the end of the list.

```python
my_list = [1, 2, 3]
my_list.append(4)
print(my_list)  # Output: [1, 2, 3, 4]
```

#### `list.extend(iterable)`

Extends the list by appending all items from the iterable.

```python
my_list = [1, 2, 3]
my_list.extend([4, 5])
print(my_list)  # Output: [1, 2, 3, 4, 5]
```

#### `list.insert(i, x)`

Inserts an item at a given position.

```python
my_list = [1, 2, 3]
my_list.insert(1, "a")
print(my_list)  # Output: [1, 'a', 2, 3]
```

#### `list.remove(x)`

Removes the first item from the list whose value is equal to x.

```python
my_list = [1, 2, 3, 2]
my_list.remove(2)
print(my_list)  # Output: [1, 3, 2]
```

#### `list.pop([i])`

Removes and returns the item at the given position in the list. If no index is specified, removes and returns the last item.

```python
my_list = [1, 2, 3]
print(my_list.pop())  # Output: 3
print(my_list)        # Output: [1, 2]
print(my_list.pop(0)) # Output: 1
print(my_list)        # Output: [2]
```

#### `list.clear()`

Removes all items from the list.

```python
my_list = [1, 2, 3]
my_list.clear()
print(my_list)  # Output: []
```

#### `list.index(x[, start[, end]])`

Returns the index of the first item whose value is equal to x. Raises a `ValueError` if there is no such item.

```python
my_list = [1, 2, 3, 2]
print(my_list.index(2))    # Output: 1
print(my_list.index(2, 2)) # Output: 3
```

#### `list.count(x)`

Returns the number of times x appears in the list.

```python
my_list = [1, 2, 3, 2]
print(my_list.count(2))  # Output: 2
```

#### `list.sort(key=None, reverse=False)`

Sorts the items of the list in place.

```python
my_list = [3, 1, 2]
my_list.sort()
print(my_list)  # Output: [1, 2, 3]
my_list.sort(reverse=True)
print(my_list)  # Output: [3, 2, 1]
```

#### `list.reverse()`

Reverses the elements of the list in place.

```python
my_list = [1, 2, 3]
my_list.reverse()
print(my_list)  # Output: [3, 2, 1]
```

#### `list.copy()`

Returns a shallow copy of the list.

```python
my_list = [1, 2, 3]
new_list = my_list.copy()
print(new_list)  # Output: [1, 2, 3]
```

### List Comprehensions

A concise way to create lists.

```python
squares = [x**2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### Membership

You can check if an item is present in the list using the `in` operator.

```python
my_list = [1, 2, 3]
print(2 in my_list)   # Output: True
print(4 in my_list)   # Output: False
```

### Concatenation

You can concatenate lists using the `+` operator.

```python
list1 = [1, 2, 3]
list2 = [4, 5]
result = list1 + list2
print(result)  # Output: [1, 2, 3, 4, 5]
```

### Repetition

You can repeat lists using the `*` operator.

```python
my_list = [1, 2, 3]
result = my_list * 3
print(result)  # Output: [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

## Python Tuples

### Defining Tuples

A tuple is an ordered collection of items which can be of different types. Tuples are immutable.

```python
my_tuple = (1, 2, 3, "Hello", 4.5)
print(my_tuple)  # Output: (1, 2, 3, 'Hello', 4.5)
```

### Accessing Tuple Elements

You can access elements in a tuple using indexing and slicing.

```python
my_tuple = (1, 2, 3, "Hello", 4.5)
print(my_tuple[0])  # Output: 1
print(my_tuple[-1]) # Output: 4.5
print(my_tuple[1:3])# Output: (2, 3)
```

### Tuple Methods

#### `tuple.count(x)`

Returns the number of times x appears in the tuple.

```python
my_tuple = (1, 2, 3, 2)
print(my_tuple.count(2))  # Output: 2
```

#### `tuple.index(x[, start[, end]])`

Returns the index of the first item whose value is equal to x. Raises a `ValueError` if there is no such item.

```python
my_tuple = (1, 2, 3, 2)
print(my_tuple.index(2))    # Output: 1
print(my_tuple.index(2, 2)) # Output: 3
```

### Tuple Packing and Unpacking

#### Packing a Tuple

You can pack values into a tuple.

```python
my_tuple = 1, 2, 3, "Hello"
print(my_tuple)  # Output: (1, 2, 3, 'Hello')
```

#### Unpacking a Tuple

You can unpack values from a tuple into variables.

```python
a, b, c, d = my_tuple
print(a)  # Output: 1
print(b)  # Output: 2
print(c)  # Output: 3
print(d)  # Output: Hello
```

### Nesting

You

 can nest lists and tuples inside each other.

```python
nested_list = [1, 2, [3, 4]]
nested_tuple = (1, 2, (3, 4))
print(nested_list)  # Output: [1, 2, [3, 4]]
print(nested_tuple) # Output: (1, 2, (3, 4))
```

### Tuple Immutability

Tuples are immutable, meaning you cannot change their values after creation.

```python
my_tuple = (1, 2, 3)
# my_tuple[0] = 4  # This will raise a TypeError
```

### Converting Between Lists and Tuples

You can convert a list to a tuple and vice versa.

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)  # Output: (1, 2, 3)

new_list = list(my_tuple)
print(new_list)  # Output: [1, 2, 3]
```

### Tuple Functions

#### `len(tuple)`

Returns the number of items in the tuple.

```python
my_tuple = (1, 2, 3)
print(len(my_tuple))  # Output: 3
```

#### `max(tuple)`

Returns the largest item in the tuple.

```python
my_tuple = (1, 2, 3)
print(max(my_tuple))  # Output: 3
```

#### `min(tuple)`

Returns the smallest item in the tuple.

```python
my_tuple = (1, 2, 3)
print(min(my_tuple))  # Output: 1
```

#### `sum(tuple)`

Returns the sum of all items in the tuple.

```python
my_tuple = (1, 2, 3)
print(sum(my_tuple))  # Output: 6
```

---
