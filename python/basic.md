### Basic Python

---

# Python Basics: Syntax, Comments, Variables, Data Types, and Casting

## 1. Syntax

### Basic Structure

Python syntax emphasizes readability. Here's a simple example of Python code:

```python
# This is a comment
print("Hello, World!")  # This prints a string to the console
```

### Indentation

Python uses indentation to define blocks of code.

```python
if 5 > 2:
    print("Five is greater than two!")  # Indentation is important
```

## 2. Comments

### Single-line Comments

Use the `#` symbol for single-line comments.

```python
# This is a single-line comment
x = 5  # This is an inline comment
```

### Multi-line Comments

Use triple quotes (`'''` or `"""`) for multi-line comments.

```python
"""
This is a multi-line comment.
It spans multiple lines.
"""
y = 10
```

## 3. Variables

### Defining Variables

Variables in Python are created when you assign a value to them.

```python
x = 5
y = "Hello"
```

### Variable Naming

Variable names can contain letters, numbers, and underscores, but cannot start with a number.

```python
my_variable = 10
_variable = 20
variable1 = 30
```

## 4. Data Types

### Common Data Types

- **Integer (`int`)**: Whole numbers.
- **Float (`float`)**: Decimal numbers.
- **String (`str`)**: Text.
- **Boolean (`bool`)**: `True` or `False`.

### Examples

```python
x = 10          # int
y = 10.5        # float
z = "Hello"     # str
a = True        # bool
```

### Checking Data Types

Use the `type()` function to check the type of a variable.

```python
print(type(x))  # Output: <class 'int'>
print(type(y))  # Output: <class 'float'>
print(type(z))  # Output: <class 'str'>
print(type(a))  # Output: <class 'bool'>
```

## 5. Casting

### Implicit Casting

Python automatically converts one data type to another when appropriate.

```python
x = 10      # int
y = 2.5     # float
z = x + y   # z will be a float because of implicit casting
print(z)    # Output: 12.5
print(type(z))  # Output: <class 'float'>
```

### Explicit Casting

You can explicitly convert data types using the following functions:

- `int()`
- `float()`
- `str()`
- `bool()`

#### Examples

```python
x = 10      # int
y = 2.5     # float
z = str(x)  # z will be a string "10"
w = int(y)  # w will be an integer 2

print(z)    # Output: "10"
print(type(z))  # Output: <class 'str'>
print(w)    # Output: 2
print(type(w))  # Output: <class 'int'>
```

### Casting with Variables

```python
x = "123"      # str
y = int(x)     # y will be an integer 123
z = float(x)   # z will be a float 123.0

print(y)    # Output: 123
print(type(y))  # Output: <class 'int'>
print(z)    # Output: 123.0
print(type(z))  # Output: <class 'float'>
```

---
