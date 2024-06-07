
### 1. **`and`**

- Description: Logical AND operator.
- Example:

     ```python
     if x > 0 and y > 0:
         print("Both x and y are positive")
     ```

### 2. **`as`**

- Description: Used to create an alias while importing a module or to assign a different name to a variable.
- Example:

     ```python
     import math as m
     print(m.sqrt(16))  # Output: 4.0
     ```

### 3. **`assert`**

- Description: Used for debugging purposes to check if a condition is True.
- Example:

     ```python
     x = 5
     assert x > 0, "x should be positive"
     ```

### 4. **`async`**

- Description: Declares a function as a coroutine.
- Example:

     ```python
     async def my_function():
         await some_async_operation()
     ```

### 5. **`await`**

- Description: Used in an asynchronous function to pause execution until an awaitable is ready.
- Example:

     ```python
     async def my_function():
         result = await async_operation()
     ```

### 6. **`break`**

- Description: Terminates the loop statement and transfers execution to the statement immediately following the loop.
- Example:

     ```python
     for char in "Python":
         if char == 'h':
             break
         print(char)
     ```

### 7. **`class`**

- Description: Used to define a new class.
- Example:

     ```python
     class MyClass:
         def __init__(self, x):
             self.x = x
     ```

### 8. **`continue`**

- Description: Causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating.
- Example:

     ```python
     for char in "Python":
         if char == 'h':
             continue
         print(char)
     ```

### 9. **`def`**

- Description: Used to define a new function.
- Example:

     ```python
     def my_function(x):
         return x * 2
     ```

### 10. **`del`**

- Description: Deletes a reference to an object.
- Example:

     ```python
     my_list = [1, 2, 3]
     del my_list[1]
     ```

### 11. **`elif`**

- Description: Used in conditional statements; same as `else if`.
- Example:

     ```python
     x = 10
     if x > 10:
         print("Greater than 10")
     elif x == 10:
         print("Equal to 10")
     else:
         print("Less than 10")
     ```

### 12. **`else`**

- Description: Executes if the condition in the if statement is False.
- Example:

     ```python
     x = 5
     if x > 10:
         print("Greater than 10")
     else:
         print("Less than or equal to 10")
     ```

### 13. **`except`**

- Description: Catches exceptions in a try-except block.
- Example:

     ```python
     try:
         x = 1 / 0
     except ZeroDivisionError:
         print("Division by zero")
     ```

### 14. **`finally`**

- Description: Executes code regardless of whether an exception occurred or not.
- Example:

     ```python
     try:
         x = 1 / 0
     except ZeroDivisionError:
         print("Division by zero")
     finally:
         print("Cleanup code")
     ```

### 15. **`for`**

- Description: Used to iterate over a sequence (list, tuple, string, etc.).
- Example:

     ```python
     for char in "Python":
         print(char)
     ```

### 16. **`from`**

- Description: Used to import specific attributes or functions from a module.
- Example:

     ```python
     from math import sqrt
     print(sqrt(16))  # Output: 4.0
     ```

### 17. **`global`**

- Description: Declares a global variable inside a function.
- Example:

     ```python
     def my_function():
         global x
         x = 10
     ```

### 18. **`if`**

- Description: Executes code if a specified condition is True.
- Example:

     ```python
     x = 5
     if x > 0:
         print("Positive")
     ```

### 19. **`import`**

- Description: Used to import modules or objects from modules into the current namespace.
- Example:

     ```python
     import math
     print(math.sqrt(16))  # Output: 4.0
     ```

### 20. **`in`**

- Description: Checks if a value exists in a sequence.
- Example:

     ```python
     if 'a' in ['a', 'b', 'c']:
         print("Found")
     ```

### 21. **`is`**

- Description: Checks if two variables refer to the same object.
- Example:

     ```python
     x = [1, 2, 3]
     y = x
     print(x is y)  # Output: True
     ```

### 22. **`lambda`**

- Description: Creates an anonymous function.
- Example:

     ```python
     square = lambda x: x**2
     print(square(5))  # Output: 25
     ```

### 24. **`not`**

- Description: Logical NOT operator.
- Example:

     ```python
     if not condition:
         print("Condition is False")
     ```

### 25. **`or`**

- Description: Logical OR operator.
- Example:

     ```python
     if x > 0 or y > 0:
         print("At least one of x or y is positive")
     ```

### 26. **`pass`**

- Description: Placeholder indicating no operation (it acts as a null operation).
- Example:

     ```python
     if x < 0:
         pass  # Do nothing
     ```

### 27. **`raise`**

- Description: Raises an exception manually.
- Example:

     ```python
     if x < 0:
         raise ValueError("x should be positive")
     ```

### 28. **`return`**

- Description: Exits a function and returns a value.
- Example:

     ```python
     def add(x, y):
         return x + y
     ```

### 29. **`try`**

- Description: Starts a block of code that will be tested for errors.
- Example:

     ```python
     try:
         result = x / y
     except ZeroDivisionError:
         print("Division by zero")
     ```

### 30. **`while`**

- Description: Executes a block of code as long as the specified condition is true.
- Example:

     ```python
     while x < 10:
         print(x)
         x += 1
     ```

### 31. **`with`**

- Description: Simplifies exception handling and resource management using the context manager protocol.
- Example:

     ```python
     with open('file.txt', 'r') as f:
         print(f.read())
     ```

### 32. **`yield`**

- Description: Pauses the function's execution and returns a value to the caller. Used in generator functions.
- Example:

     ```python
     def my_generator():
         yield 1
         yield 2
         yield 3
     ```

### 33. **`async`**

- Description: Declares a function as a coroutine.
- Example:

     ```python
     async def my_function():
         await some_async_operation()
     ```

### 34. **`await`**

- Description: Used in an asynchronous function to pause execution until an awaitable is ready.
- Example:

     ```python
     async def my_function():
         result = await async_operation()
     ```

### 35. **`async def`**

- Description: Declares a coroutine function.
- Example:

     ```python
     async def my_async_function():
         await some_async_operation()
     ```

### 36. **`async for`**

- Description: Asynchronous version of `for` loop.
- Example:

     ```python
     async for item in async_generator():
         print(item)
     ```

### 37. **`async with`**

- Description: Asynchronous version of `with` statement.
- Example:

     ```python
     async with some_async_context():
         # Do something asynchronously
     ```

### 38. **`nonlocal`**

- Description: Declares a variable as non-local, allowing modification of a variable from an outer scope in a nested function.
- Example:

     ```python
     def outer_function():
         x = 10
         def inner_function():
             nonlocal x
             x += 1
         inner_function()
         print(x)  # Output: 11
     ```

### 39. **`yield from`**

- Description: Delegates the generation of values to another generator.
- Example:

     ```python
     def my_generator():
         yield from range(3)
     ```

### 40. **`assert`**

- Description: Used for debugging purposes to check if a condition is true. If it's false, an AssertionError is raised.
- Example:

     ```python
     assert x > 0, "x should be positive"
     ```

### 41. **`async for`**

- Description: Asynchronous version of the `for` loop used with asynchronous iterators.
- Example:

     ```python
     async for item in async_iterator:
         print(item)
     ```

### 42. **`async with`**

- Description: Asynchronous version of the `with` statement, used for managing resources in an asynchronous context.
- Example:

     ```python
     async with async_resource() as res:
         await res.do_something()
     ```

### 43. **`break`**

- Description: Terminates the loop it is in.
- Example:

     ```python
     for i in range(10):
         if i == 5:
             break
         print(i)
     ```

### 44. **`continue`**

- Description: Skips the rest of the loop's body and continues with the next iteration.
- Example:

     ```python
     for i in range(10):
         if i % 2 == 0:
             continue
         print(i)
     ```

### 45. **`global`**

- Description: Declares that a variable is in the global scope, allowing it to be assigned inside a function.
- Example:

     ```python
     global_var = 10
     def my_function():
         global global_var
         global_var += 1
     ```

### 46. **`lambda`**

- Description: Creates an anonymous function.
- Example:

     ```python
     add = lambda x, y: x + y
     print(add(2, 3))  # Output: 5
     ```

### 47. **`nonlocal`**

- Description: Indicates that a variable is not in the local scope, allowing it to be assigned inside a nested function.
- Example:

     ```python
     def outer():
         x = 10
         def inner():
             nonlocal x
             x += 1
         inner()
         print(x)  # Output: 11
     ```

### 48. **`or`**

- Description: Logical OR operator.
- Example:

     ```python
     if x == 0 or y == 0:
         print("At least one variable is zero")
     ```

### 49. **`pass`**

- Description: A null operation; does nothing when executed.
- Example:

     ```python
     if condition:
         pass
     ```

### 50. **`raise`**

- Description: Raises an exception.
- Example:

     ```python
     if error_condition:
         raise ValueError("Invalid value")
     ```

### 51. **`return`**

- Description: Exits a function and returns a value.
- Example:

     ```python
     def add(x, y):
         return x + y
     ```

### 52. **`while`**

- Description: Executes a block of code repeatedly as long as a condition is true.
- Example:

     ```python
     while condition:
         # Do something
     ```

### 53. **`with`**

- Description: Used for resource management, allowing cleanup actions to be performed automatically.
- Example:

     ```python
     with open("file.txt", "r") as f:
         print(f.read())
     ```

### 54. **`yield`**

- Description: Pauses a generator function and returns a value to the caller.
- Example:

     ```python
     def my_generator():
         yield 1
         yield 2
         yield 3
     ```

### 55. **`yield from`**

- Description: Delegates the iteration control to another generator.
- Example:

     ```python
     def my_generator():
         yield from range(3)
     ```
