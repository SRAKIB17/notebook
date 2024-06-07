## Opening and Closing Files

### Opening a File

```python
# Open a file for reading
file = open("example.txt", "r")  # "r" mode for reading (default)

# Open a file for writing
file = open("example.txt", "w")  # "w" mode for writing

# Open a file for appending
file = open("example.txt", "a")  # "a" mode for appending
```

### Closing a File

```python
file.close()
```

Alternatively, you can use a context manager (`with` statement) to automatically close the file when done:

```python
with open("example.txt", "r") as file:
    # File operations here
```

## Reading from Files

### Reading Entire File

```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```

### Reading Lines

```python
with open("example.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())  # Strip newline character
```

### Reading Line by Line

```python
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # Strip newline character
```

## Writing to Files

### Writing Text to a File

```python
with open("example.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is a new line.\n")
```

## Appending to Files

### Appending Text to a File

```python
with open("example.txt", "a") as file:
    file.write("This line is appended.\n")
```

## File Modes

- `"r"`: Read mode (default). Opens a file for reading.
- `"w"`: Write mode. Opens a file for writing. Creates a new file if it doesn't exist. Truncates the file if it exists.
- `"a"`: Append mode. Opens a file for appending data. Creates a new file if it doesn't exist.
- `"b"`: Binary mode. Opens a file in binary mode.
- `"t"`: Text mode (default). Opens a file in text mode.

## File Methods and Properties

- `read(size)`: Reads `size` bytes from the file.
- `readline()`: Reads a single line from the file.
- `readlines()`: Reads all lines from the file and returns a list.
- `write(string)`: Writes the string to the file.
- `writelines(lines)`: Writes a list of lines to the file.
- `close()`: Closes the file.
- `seek(offset)`: Moves the file pointer to the specified byte offset.
- `tell()`: Returns the current file pointer position.
- `flush()`: Flushes the internal buffer.

## Checking File Existence

```python
import os

if os.path.exists("example.txt"):
    print("File exists")
else:
    print("File does not exist")
```

## Deleting Files

```python
import os

os.remove("example.txt")
```

## File Handling Best Practices

- Always close files after opening them to release system resources.
- Use context managers (`with` statement) whenever possible to ensure files are closed automatically.
- Handle exceptions when working with files to prevent crashes.

File handling is an essential part of many Python applications. Understanding how to work with files effectively is crucial for reading and writing data to files, which is a common task in programming.
