
---

# Python Conditions

## if Statement

The `if` statement is used to test a specific condition. If the condition is `True`, the block of code inside the `if` statement will be executed.

```python
x = 10
if x > 5:
    print("x is greater than 5")  # Output: x is greater than 5
```

## if-else Statement

The `if-else` statement allows you to execute one block of code if the condition is `True`, and another block if it is `False`.

```python
x = 3
if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")  # Output: x is not greater than 5
```

## if-elif-else Statement

The `if-elif-else` statement is used to test multiple conditions.

```python
x = 7
if x > 10:
    print("x is greater than 10")
elif x > 5:
    print("x is greater than 5 but less than or equal to 10")  # Output: x is greater than 5 but less than or equal to 10
else:
    print("x is 5 or less")
```

## Nested if Statements

You can nest `if` statements inside each other.

```python
x = 10
if x > 5:
    if x < 15:
        print("x is between 5 and 15")  # Output: x is between 5 and 15
```

## Ternary (Conditional) Operator

The ternary operator allows for a quick `if-else` statement in one line.

```python
x = 10
result = "Greater than 5" if x > 5 else "5 or less"
print(result)  # Output: Greater than 5
```

---

# Python Loops

## while Loop

The `while` loop is used to execute a block of code as long as the condition is `True`.

```python
i = 1
while i < 6:
    print(i)  # Output: 1 2 3 4 5
    i += 1
```

## for Loop

The `for` loop is used to iterate over a sequence (such as a list, tuple, dictionary, set, or string).

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)  # Output: apple banana cherry
```

## range() Function

The `range()` function generates a sequence of numbers, which can be used with `for` loops.

```python
for i in range(5):
    print(i)  # Output: 0 1 2 3 4

for i in range(2, 6):
    print(i)  # Output: 2 3 4 5

for i in range(2, 10, 2):
    print(i)  # Output: 2 4 6 8
```

## Nested Loops

You can nest loops inside each other.

```python
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for adjective in adj:
    for fruit in fruits:
        print(adjective, fruit)
# Output: 
# red apple
# red banana
# red cherry
# big apple
# big banana
# big cherry
# tasty apple
# tasty banana
# tasty cherry
```

## break Statement

The `break` statement is used to exit the loop before it has iterated through all items.

```python
for i in range(10):
    if i == 5:
        break
    print(i)  # Output: 0 1 2 3 4
```

## continue Statement

The `continue` statement is used to skip the current iteration and continue with the next.

```python
for i in range(10):
    if i == 5:
        continue
    print(i)  # Output: 0 1 2 3 4 6 7 8 9
```

## else Statement with Loops

The `else` statement can be used with loops. The `else` block will be executed when the loop is finished.

```python
for i in range(5):
    print(i)
else:
    print("Loop is done")  # Output: 0 1 2 3 4 Loop is done
```

---

# Python Functions

## Defining Functions

Functions are defined using the `def` keyword.

```python
def my_function():
    print("Hello from a function")

my_function()  # Output: Hello from a function
```

## Parameters

You can pass parameters to functions.

```python
def my_function(name):
    print("Hello, " + name)

my_function("Alice")  # Output: Hello, Alice
```

## Default Parameter Value

You can set default values for parameters.

```python
def my_function(name="John"):
    print("Hello, " + name)

my_function()        # Output: Hello, John
my_function("Alice") # Output: Hello, Alice
```

## Return Values

Functions can return values using the `return` statement.

```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)  # Output: 5
```

## Variable-Length Arguments

### *args

For arbitrary number of arguments, use `*args`.

```python
def my_function(*args):
    for arg in args:
        print(arg)

my_function(1, 2, 3)
# Output: 
# 1
# 2
# 3
```

### **kwargs

For arbitrary number of keyword arguments, use `**kwargs`.

```python
def my_function(**kwargs):
    for key, value in kwargs.items():
        print(key, value)

my_function(name="Alice", age=25)
# Output:
# name Alice
# age 25
```

## Function Annotations

You can add type hints to function parameters and return values.

```python
def greet(name: str) -> str:
    return "Hello, " + name

print(greet("Alice"))  # Output: Hello, Alice
```

---

# Python Lambda Expressions

## Defining Lambda Functions

Lambda functions are small anonymous functions defined using the `lambda` keyword.

```python
add = lambda a, b: a + b
print(add(2, 3))  # Output: 5
```

## Using Lambda with map()

The `map()` function applies a function to all items in an input list.

```python
nums = [1, 2, 3, 4, 5]
squared = map(lambda x: x**2, nums)
print(list(squared))  # Output: [1, 4, 9, 16, 25]
```

## Using Lambda with filter()

The `filter()` function constructs an iterator from elements of an iterable for which a function returns `True`.

```python
nums = [1, 2, 3, 4, 5]
even = filter(lambda x: x % 2 == 0, nums)
print(list(even))  # Output: [2, 4]
```

## Using Lambda with reduce()

The `reduce()` function is used to apply a function to an iterable and reduce it to a single cumulative value. It is available in the `functools` module.

```python
from functools import reduce

nums = [1, 2, 3, 4, 5]
sum_all = reduce(lambda a, b: a + b, nums)
print(sum_all)  # Output: 15
```

## Sorting with Lambda

You can use lambda functions to specify a key for sorting.

```python
points = [(2, 3), (1, 2), (4, 1)]
points.sort(key=lambda point: point[1])
print(points)  # Output: [(4, 1), (1, 2), (2, 3)]
```

---

# Scope

### **Python has four levels of scope:**

1. **Local Scope**: Variables defined inside a function or method have local scope.
2. **Enclosing (Nonlocal) Scope**: Variables defined in the enclosing function or method of a nested function have enclosing scope.
3. **Global Scope**: Variables defined at the top level of a module or explicitly declared as global have global scope.
4. **Built-in Scope**: Names preassigned in the built-in namespace module.

Here's a detailed explanation of each scope level with examples:

## Local Scope

Variables defined within a function are in the local scope. They cannot be accessed from outside the function.

```python
def my_function():
    x = 10  # Local variable
    print(x)

my_function()  # Output: 10
# print(x)     # NameError: name 'x' is not defined
```

## Enclosing (Nonlocal) Scope

Variables defined in the enclosing function of a nested function can be accessed by the nested function.

```python
def outer_function():
    x = 10  # Enclosing variable

    def inner_function():
        print(x)  # Accessing enclosing variable

    inner_function()

outer_function()  # Output: 10
```

## Global Scope

Variables defined at the top level of a module or explicitly declared as global have global scope. They can be accessed from any function or method within the module.

```python
x = 10  # Global variable

def my_function():
    print(x)  # Accessing global variable

my_function()  # Output: 10
```

### Modifying Global Variables

Global variables can be modified within a function using the `global` keyword.

```python
x = 10  # Global variable

def my_function():
    global x
    x = 20  # Modifying global variable

my_function()
print(x)  # Output: 20
```

## Built-in Scope

Names preassigned in the built-in namespace module are available in the built-in scope.

```python
print(abs(-10))  # Output: 10
print(max(5, 9, 3))  # Output: 9
```

### Modifying Built-in Names

Built-in names can be overridden by variables with the same name in global scope.

```python
max = 100
print(max)  # Output: 100

def my_function():
    max = 200
    print(max)  # Output: 200

my_function()
print(max)  # Output: 100
```

### Note

- It's generally recommended to avoid modifying built-in names to prevent confusion.

## LEGB Rule

Python follows the LEGB rule to resolve names in its scope:

- **L**: Local scope
- **E**: Enclosing (Nonlocal) scope
- **G**: Global scope
- **B**: Built-in scope

Python searches for a variable in these scopes in the order L -> E -> G -> B, and stops at the first occurrence.

```python
x = 100  # Global scope

def outer_function():
    x = 200  # Enclosing scope

    def inner_function():
        x = 300  # Local scope
        print(x)

    inner_function()
    print(x)

outer_function()
print(x)
```

### Output

```
300
200
100
```

### Note

- If a variable is not found in the local, enclosing, or global scope, Python will raise a `NameError`.

---
