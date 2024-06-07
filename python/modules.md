
## Creating a Module

To create a module, you just need to write Python code in a `.py` file. This code can contain functions, variables, classes, etc.

**Example: `my_module.py`**

```python
# my_module.py

def greet(name):
    return f"Hello, {name}!"

def add(x, y):
    return x + y

person = {
    "name": "Alice",
    "age": 30
}

class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return f"{self.name} says Woof!"
```

## Using a Module

You can use the `import` statement to import a module and access its contents.

```python
import my_module

print(my_module.greet("Alice"))  # Output: Hello, Alice!
print(my_module.add(3, 5))       # Output: 8
print(my_module.person)          # Output: {'name': 'Alice', 'age': 30}

dog = my_module.Dog("Buddy")
print(dog.bark())                # Output: Buddy says Woof!
```

## Renaming a Module

You can import a module with a different name using the `as` keyword.

```python
import my_module as mm

print(mm.greet("Bob"))  # Output: Hello, Bob!
```

## Importing Specific Items

You can import specific functions, variables, or classes from a module.

```python
from my_module import greet, Dog

print(greet("Charlie"))  # Output: Hello, Charlie!

dog = Dog("Max")
print(dog.bark())        # Output: Max says Woof!
```

## Importing Everything

You can import everything from a module using the `*` wildcard, but it's generally not recommended as it can lead to namespace pollution.

```python
from my_module import *

print(greet("Emma"))      # Output: Hello, Emma!
print(add(2, 3))          # Output: 5
print(person)             # Output: {'name': 'Alice', 'age': 30}
```

## Using `__name__` and `__main__`

The `__name__` variable contains the name of the current module. When a module is imported, Python sets `__name__` to the module name. If the module is run directly (as a script), `__name__` is set to `"__main__"`. This allows you to have code in a module that runs only when the module is executed as a script, not when it's imported.

**Example:**

```python
# my_module.py

def greet(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    print("This will only run if the module is executed as a script.")
```

## Module Search Path

When you import a module, Python searches for it in a list of directories known as the module search path. You can view the search path using the `sys.path` list.

```python
import sys
print(sys.path)
```

## Standard Library Modules

Python comes with a standard library that contains many useful modules for various tasks, such as `os`, `sys`, `math`, `random`, etc.

```python
import os
print(os.getcwd())  # Output: Current working directory
```

## Third-Party Modules

You can install third-party modules using tools like `pip` and then import them into your code.

```bash
pip install requests
```

```python
import requests
response = requests.get("https://www.example.com")
print(response.status_code)  # Output: 200
```
