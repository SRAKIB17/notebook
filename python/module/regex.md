
## Importing the `re` Module

```python
import re
```

## Common Functions in the `re` Module

### `re.match()`

Attempts to match a pattern at the beginning of a string.

```python
pattern = r"Hello"
text = "Hello, World!"

match = re.match(pattern, text)
if match:
    print("Match found:", match.group())
else:
    print("No match")
```

### `re.search()`

Searches for a pattern anywhere in the string.

```python
pattern = r"World"
text = "Hello, World!"

match = re.search(pattern, text)
if match:
    print("Match found:", match.group())
else:
    print("No match")
```

### `re.findall()`

Finds all occurrences of a pattern in the string.

```python
pattern = r"\d+"
text = "There are 10 apples and 20 oranges."

matches = re.findall(pattern, text)
print("Matches found:", matches)
```

### `re.finditer()`

Finds all occurrences of a pattern and returns an iterator of match objects.

```python
pattern = r"\d+"
text = "There are 10 apples and 20 oranges."

matches = re.finditer(pattern, text)
for match in matches:
    print("Match found:", match.group())
```

### `re.sub()`

Substitutes occurrences of a pattern in a string with another string.

```python
pattern = r"apples"
text = "I like apples and apples are tasty."

new_text = re.sub(pattern, "oranges", text)
print("New text:", new_text)
```

### `re.split()`

Splits a string based on a pattern.

```python
pattern = r"\s+"
text = "Hello   World   Python"

tokens = re.split(pattern, text)
print("Tokens:", tokens)
```

## Common Regex Patterns

- `\d`: Matches any digit (equivalent to `[0-9]`).
- `\w`: Matches any alphanumeric character (equivalent to `[a-zA-Z0-9_]`).
- `\s`: Matches any whitespace character.
- `.`: Matches any character except a newline.
- `^`: Matches the start of a string.
- `$`: Matches the end of a string.

## Flags

You can pass flags to modify the behavior of regex functions.

```python
pattern = r"hello"
text = "Hello, World!"

match = re.search(pattern, text, flags=re.IGNORECASE)
if match:
    print("Match found:", match.group())
else:
    print("No match")
```

## Regex Groups

You can use parentheses to capture parts of a pattern into groups.

```python
pattern = r"(\w+), (\w+)"
text = "Doe, John"

match = re.match(pattern, text)
if match:
    print("First name:", match.group(1))
    print("Last name:", match.group(2))
```

## Anchors

- `^`: Matches the start of a string.
- `$`: Matches the end of a string.

```python
pattern = r"^Hello"
text = "Hello, World!"

match = re.search(pattern, text)
if match:
    print("Match found:", match.group())
else:
    print("No match")
```

## Using Raw Strings

Using raw strings (`r""`) is recommended when defining regex patterns to avoid issues with backslashes.

```python
pattern = r"\d+"
```
