
---

# Python Strings and String Functions

## 1. Strings in Python

### Defining Strings

Strings in Python can be created using single quotes, double quotes, or triple quotes for multi-line strings.

```python
single_quote_string = 'Hello, World!'
double_quote_string = "Hello, World!"
triple_quote_string = """Hello,
World!"""
```

### Accessing Characters

You can access individual characters in a string using indexing. Python uses zero-based indexing.

```python
my_string = "Hello"
print(my_string[0])  # Output: H
print(my_string[4])  # Output: o
```

### Slicing Strings

You can slice strings to get substrings.

```python
my_string = "Hello, World!"
print(my_string[0:5])  # Output: Hello
print(my_string[:5])   # Output: Hello
print(my_string[7:])   # Output: World!
print(my_string[-6:])  # Output: World!
```

## 2. String Functions

### Length of a String

Use `len()` to get the length of a string.

```python
my_string = "Hello, World!"
print(len(my_string))  # Output: 13
```

### String Methods

#### `str.upper()`

Converts all characters in the string to uppercase.

```python
my_string = "Hello, World!"
print(my_string.upper())  # Output: HELLO, WORLD!
```

#### `str.lower()`

Converts all characters in the string to lowercase.

```python
my_string = "Hello, World!"
print(my_string.lower())  # Output: hello, world!
```

#### `str.capitalize()`

Capitalizes the first character of the string.

```python
my_string = "hello, world!"
print(my_string.capitalize())  # Output: Hello, world!
```

#### `str.title()`

Capitalizes the first character of each word in the string.

```python
my_string = "hello, world!"
print(my_string.title())  # Output: Hello, World!
```

#### `str.strip()`

Removes leading and trailing whitespace from the string.

```python
my_string = "   Hello, World!   "
print(my_string.strip())  # Output: Hello, World!
```

#### `str.lstrip()`

Removes leading whitespace from the string.

```python
my_string = "   Hello, World!   "
print(my_string.lstrip())  # Output: Hello, World!   
```

#### `str.rstrip()`

Removes trailing whitespace from the string.

```python
my_string = "   Hello, World!   "
print(my_string.rstrip())  # Output:    Hello, World!
```

#### `str.replace(old, new)`

Replaces all occurrences of a substring with another substring.

```python
my_string = "Hello, World!"
print(my_string.replace("World", "Python"))  # Output: Hello, Python!
```

#### `str.split(separator)`

Splits the string into a list of substrings based on a separator.

```python
my_string = "Hello, World!"
print(my_string.split(", "))  # Output: ['Hello', 'World!']
```

#### `str.join(iterable)`

Joins elements of an iterable (e.g., list) into a single string, separated by the string.

```python
my_list = ['Hello', 'World']
print(", ".join(my_list))  # Output: Hello, World
```

#### `str.find(substring)`

Returns the lowest index in the string where substring is found. Returns -1 if not found.

```python
my_string = "Hello, World!"
print(my_string.find("World"))  # Output: 7
print(my_string.find("Python"))  # Output: -1
```

#### `str.rfind(substring)`

Returns the highest index in the string where substring is found. Returns -1 if not found.

```python
my_string = "Hello, World! World!"
print(my_string.rfind("World"))  # Output: 14
```

#### `str.startswith(prefix)`

Checks if the string starts with the specified prefix.

```python
my_string = "Hello, World!"
print(my_string.startswith("Hello"))  # Output: True
print(my_string.startswith("World"))  # Output: False
```

#### `str.endswith(suffix)`

Checks if the string ends with the specified suffix.

```python
my_string = "Hello, World!"
print(my_string.endswith("World!"))  # Output: True
print(my_string.endswith("Hello"))  # Output: False
```

#### `str.isalpha()`

Checks if all characters in the string are alphabetic.

```python
my_string = "Hello"
print(my_string.isalpha())  # Output: True
my_string = "Hello123"
print(my_string.isalpha())  # Output: False
```

#### `str.isdigit()`

Checks if all characters in the string are digits.

```python
my_string = "12345"
print(my_string.isdigit())  # Output: True
my_string = "12345abc"
print(my_string.isdigit())  # Output: False
```

#### `str.isalnum()`

Checks if all characters in the string are alphanumeric (letters and numbers).

```python
my_string = "Hello123"
print(my_string.isalnum())  # Output: True
my_string = "Hello 123"
print(my_string.isalnum())  # Output: False
```

#### `str.islower()`

Checks if all characters in the string are lowercase.

```python
my_string = "hello"
print(my_string.islower())  # Output: True
my_string = "Hello"
print(my_string.islower())  # Output: False
```

#### `str.isupper()`

Checks if all characters in the string are uppercase.

```python
my_string = "HELLO"
print(my_string.isupper())  # Output: True
my_string = "Hello"
print(my_string.isupper())  # Output: False
```

## 3. String Formatting

### f-Strings (formatted string literals)

f-Strings are a way to embed expressions inside string literals, using curly braces `{}`.

```python
name = "John"
age = 30
print(f"Hello, my name is {name} and I am {age} years old.")  # Output: Hello, my name is John and I am 30 years old.
```

### `str.format()`

The `format()` method allows you to format selected parts of a string.

```python
name = "John"
age = 30
print("Hello, my name is {} and I am {} years old.".format(name, age))  # Output: Hello, my name is John and I am 30 years old.
```

### Percent `%` Formatting

Older method of formatting strings using the `%` operator.

```python
name = "John"
age = 30
print("Hello, my name is %s and I am %d years old." % (name, age))  # Output: Hello, my name is John and I am 30 years old.
```

---
