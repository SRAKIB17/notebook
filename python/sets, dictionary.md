
---

# Python Sets

## Defining Sets

A set is an unordered collection of unique items.

```python
my_set = {1, 2, 3, "Hello"}
print(my_set)  # Output: {1, 2, 3, 'Hello'}
```

### Creating an Empty Set

You can create an empty set using the `set()` function.

```python
empty_set = set()
print(empty_set)  # Output: set()
```

## Set Methods

### Adding Elements

#### `set.add(x)`

Adds an item to the set.

```python
my_set = {1, 2, 3}
my_set.add(4)
print(my_set)  # Output: {1, 2, 3, 4}
```

#### `set.update(iterable)`

Updates the set, adding items from the given iterable.

```python
my_set = {1, 2, 3}
my_set.update([4, 5])
print(my_set)  # Output: {1, 2, 3, 4, 5}
```

### Removing Elements

#### `set.remove(x)`

Removes the specified element from the set. Raises a `KeyError` if the element is not found.

```python
my_set = {1, 2, 3}
my_set.remove(2)
print(my_set)  # Output: {1, 3}
```

#### `set.discard(x)`

Removes the specified element from the set if it is present.

```python
my_set = {1, 2, 3}
my_set.discard(2)
print(my_set)  # Output: {1, 3}
my_set.discard(4)  # No error raised
```

#### `set.pop()`

Removes and returns an arbitrary element from the set. Raises a `KeyError` if the set is empty.

```python
my_set = {1, 2, 3}
item = my_set.pop()
print(item)    # Output: 1 (or any other element)
print(my_set)  # Output: {2, 3} (remaining elements)
```

#### `set.clear()`

Removes all items from the set.

```python
my_set = {1, 2, 3}
my_set.clear()
print(my_set)  # Output: set()
```

### Set Operations

#### Union

##### `set.union(*others)`

Returns a new set with elements from the set and all others.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
result = set1.union(set2)
print(result)  # Output: {1, 2, 3, 4, 5}
```

##### `set | other`

Equivalent to `set.union(other)`.

```python
result = set1 | set2
print(result)  # Output: {1, 2, 3, 4, 5}
```

#### Intersection

##### `set.intersection(*others)`

Returns a new set with elements common to the set and all others.

```python
result = set1.intersection(set2)
print(result)  # Output: {3}
```

##### `set & other`

Equivalent to `set.intersection(other)`.

```python
result = set1 & set2
print(result)  # Output: {3}
```

#### Difference

##### `set.difference(*others)`

Returns a new set with elements in the set that are not in the others.

```python
result = set1.difference(set2)
print(result)  # Output: {1, 2}
```

##### `set - other`

Equivalent to `set.difference(other)`.

```python
result = set1 - set2
print(result)  # Output: {1, 2}
```

#### Symmetric Difference

##### `set.symmetric_difference(other)`

Returns a new set with elements in either the set or other but not both.

```python
result = set1.symmetric_difference(set2)
print(result)  # Output: {1, 2, 4, 5}
```

##### `set ^ other`

Equivalent to `set.symmetric_difference(other)`.

```python
result = set1 ^ set2
print(result)  # Output: {1, 2, 4, 5}
```

### Set Membership

#### `x in set`

Checks if an element is in the set.

```python
print(1 in set1)  # Output: True
print(4 in set1)  # Output: False
```

#### `x not in set`

Checks if an element is not in the set.

```python
print(4 not in set1)  # Output: True
```

### Set Comprehensions

A concise way to create sets.

```python
squares = {x**2 for x in range(10)}
print(squares)  # Output: {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}
```

---

# Python Dictionaries

## Defining Dictionaries

A dictionary is an unordered collection of key-value pairs.

```python
my_dict = {"name": "Alice", "age": 25, "city": "New York"}
print(my_dict)  # Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### Creating an Empty Dictionary

You can create an empty dictionary using the `{}` syntax or the `dict()` function.

```python
empty_dict = {}
empty_dict2 = dict()
print(empty_dict)  # Output: {}
print(empty_dict2) # Output: {}
```

## Accessing Dictionary Elements

#### `dict[key]`

Returns the value for the specified key. Raises a `KeyError` if the key is not found.

```python
print(my_dict["name"])  # Output: Alice
```

#### `dict.get(key[, default])`

Returns the value for the specified key if the key is in the dictionary. If not, returns `default` (or `None` if `default` is not provided).

```python
print(my_dict.get("age"))       # Output: 25
print(my_dict.get("address"))   # Output: None
print(my_dict.get("address", "Unknown"))  # Output: Unknown
```

## Dictionary Methods

### Adding and Updating Elements

#### `dict[key] = value`

Sets the value for the specified key.

```python
my_dict["email"] = "alice@example.com"
print(my_dict)  # Output: {'name': 'Alice', 'age': 25, 'city': 'New York', 'email': 'alice@example.com'}
```

#### `dict.update([other])`

Updates the dictionary with elements from another dictionary object or from an iterable of key-value pairs.

```python
my_dict.update({"age": 26, "city": "San Francisco"})
print(my_dict)  # Output: {'name': 'Alice', 'age': 26, 'city': 'San Francisco', 'email': 'alice@example.com'}
```

### Removing Elements

#### `dict.pop(key[, default])`

Removes the specified key and returns the corresponding value. If the key is not found, `default` is returned if provided, otherwise a `KeyError` is raised.

```python
age = my_dict.pop("age")
print(age)       # Output: 26
print(my_dict)   # Output: {'name': 'Alice', 'city': 'San Francisco', 'email': 'alice@example.com'}
```

#### `dict.popitem()`

Removes and returns an arbitrary (key, value) pair from the dictionary. Raises a `KeyError` if the dictionary is empty.

```python
item = my_dict.popitem()
print(item)      # Output: ('email', 'alice@example.com')
print(my_dict)   # Output: {'name': 'Alice', 'city': 'San Francisco'}
```

#### `dict.clear()`

Removes all items from the dictionary.

```python
my_dict.clear()
print(my_dict)  # Output: {}
```

### Dictionary Views

#### `dict.keys()`

Returns a view object that displays a list of all the keys in the dictionary.

```python
keys = my_dict.keys()
print(keys)  # Output: dict_keys(['name', 'age', 'city'])
```

#### `dict.values()`

Returns a view object that displays a list of all the values in the dictionary.

```python
values = my_dict.values()
print(values)  # Output: dict_values(['Alice', 25, 'New York'])
```

#### `dict.items()`

Returns a view object that displays a list of a dictionary's key-value tuple pairs.

```python
items = my_dict.items()
print(items)  # Output: dict_items([('name', 'Alice'), ('age', 25), ('city', 'New York')])
```

### Dictionary Comprehensions

A concise way to create dictionaries.

```python
squares = {x: x**2 for x in range(5)}
print(squares)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

### Membership

#### `key in dict`

Checks if a key is in the dictionary.

```python
print("name in my_dict")  # Output: True
print("address" in my_dict)  # Output: False
```

#### `key not in

 dict`
Checks if a key is not in the dictionary.

```python
print("address" not in my_dict)  # Output: True
```

### Copying

#### `dict.copy()`

Returns a shallow copy of the dictionary.

```python
new_dict = my_dict.copy()
print(new_dict)  # Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}
```

#### `dict(dict)`

Creates a new dictionary from the provided dictionary.

```python
new_dict = dict(my_dict)
print(new_dict)  # Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}
```

---
