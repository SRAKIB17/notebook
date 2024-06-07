
### 1. **`abs()`**

- Syntax: `abs(number)`
- Description: Returns the absolute value of a number.
- Example:

     ```python
     print(abs(-5))  # Output: 5
     ```

### 2. **`all()`**

- Syntax: `all(iterable)`
- Description: Returns True if all items in the iterable are true.
- Example:

     ```python
     print(all([True, True, False]))  # Output: False
     ```

### 3. **`any()`**

- Syntax: `any(iterable)`
- Description: Returns True if any item in the iterable is true.
- Example:

     ```python
     print(any([False, False, True]))  # Output: True
     ```

### 4. **`ascii()`**

- Syntax: `ascii(object)`
- Description: Returns a readable version of an object. Replaces non-ascii characters with escape characters.
- Example:

     ```python
     print(ascii('hello'))  # Output: "'hello'"
     ```

### 5. **`bin()`**

- Syntax: `bin(number)`
- Description: Returns the binary version of a number.
- Example:

     ```python
     print(bin(10))  # Output: '0b1010'
     ```

### 6. **`bool()`**

- Syntax: `bool(value)`
- Description: Returns the boolean value of the specified object.
- Example:

     ```python
     print(bool(0))  # Output: False
     ```

### 7. **`bytearray()`**

- Syntax: `bytearray([source[, encoding[, errors]]])`
- Description: Returns a bytearray object.
- Example:

     ```python
     print(bytearray([1, 2, 3]))  # Output: bytearray(b'\x01\x02\x03')
     ```

### 8. **`bytes()`**

- Syntax: `bytes([source[, encoding[, errors]]])`
- Description: Returns a bytes object.
- Example:

     ```python
     print(bytes([1, 2, 3]))  # Output: b'\x01\x02\x03'
     ```

### 9. **`callable()`**

- Syntax: `callable(object)`
- Description: Returns True if the specified object is callable, otherwise False.
- Example:

     ```python
     def func():
         return True
     print(callable(func))  # Output: True
     ```

### 10. **`chr()`**

- Syntax: `chr(unicode)`
- Description: Returns a character from the specified Unicode code.
- Example:

     ```python
     print(chr(65))  # Output: 'A'
     ```

### 11. **`classmethod()`**

- Syntax: `classmethod(function)`
- Description: Converts a method into a class method.
- Example:

     ```python
     class MyClass:
         @classmethod
         def my_method(cls):
             return cls.__name__
     print(MyClass.my_method())  # Output: 'MyClass'
     ```

### 12. **`compile()`**

- Syntax: `compile(source, filename, mode, flags=0, dont_inherit=False, optimize=-1)`
- Description: Returns the specified source as an object, ready to be executed.
- Example:

     ```python
     code = "print('hello, world')"
     exec(compile(code, filename="", mode="exec"))
     # Output: hello, world
     ```

### 13. **`complex()`**

- Syntax: `complex(real[, imag])`
- Description: Returns a complex number.
- Example:

     ```python
     print(complex(3, 4))  # Output: (3+4j)
     ```

### 14. **`delattr()`**

- Syntax: `delattr(object, name)`
- Description: Deletes the specified attribute (property or method) from the specified object.
- Example:

     ```python
     class MyClass:
         x = 5
     delattr(MyClass, 'x')
     ```

### 15. **`dict()`**

- Syntax: `dict(**kwargs)` or `dict(mapping, **kwargs)` or `dict(iterable, **kwargs)`
- Description: Returns a dictionary (Array).
- Example:

     ```python
     print(dict(a=1, b=2))  # Output: {'a': 1, 'b': 2}
     ```

### 16. **`dir()`**

- Syntax: `dir([object])`
- Description: Returns a list of the specified object's properties and methods.
- Example:

     ```python
     print(dir(list))  # Output: ['__add__', '__class__', '__contains__', ...]
     ```

### 17. **`divmod()`**

- Syntax: `divmod(a, b)`
- Description: Returns the quotient and the remainder when argument1 is divided by argument2.
- Example:

     ```python
     print(divmod(10, 3))  # Output: (3, 1)
     ```

### 18. **`enumerate()`**

- Syntax: `enumerate(iterable, start=0)`
- Description: Takes a collection (e.g. a tuple) and returns it as an enumerate object.
- Example:

     ```python
     for i, fruit in enumerate(['apple', 'banana', 'cherry']):
         print(i, fruit)
     # Output:
     # 0 apple
     # 1 banana
     # 2 cherry
     ```

### 19. **`eval()`**

- Syntax: `eval(expression, globals=None, locals=None)`
- Description: Evaluates and executes an expression.
- Example:

     ```python
     x = 10
     print(eval('x + 5'))  # Output: 15
     ```

### 20. **`exec()`**

- Syntax: `exec(object[, globals[, locals]])`
- Description: Executes the specified code (or object).
- Example:

     ```python
     exec('print("hello, world")')  # Output: hello, world
     ```

And here are more built-in functions with examples:

### 21. **`filter()`**

- Syntax: `filter(function, iterable)`
- Description: Use a filter function to exclude items in an iterable object.
- Example:

     ```python
     def is_even(n):
         return n % 2 == 0
     print(list(filter(is_even, [1, 2, 3, 4, 5])))  # Output: [2, 4]
     ```

### 22. **`float()`**

- Syntax: `float([x])`
- Description: Returns a floating-point number.
- Example:

     ```python
     print(float("3.14"))  # Output: 3.14
     ```

### 23. **`format()`**

- Syntax: `format(value[, format_spec])`
- Description: Formats a specified value.
- Example:

     ```python
     print(format(0.5, "%"))  # Output: '50.000000%'
     ```

### 24. **`frozenset()`**

- Syntax: `frozenset([iterable])`
- Description: Returns a frozenset object.
- Example:

     ```python
     print(frozenset([1, 2, 3]))  # Output: frozenset({1, 2, 3})
     ```

### 25. **`getattr()`**

- Syntax: `getattr(object, name[, default])`
- Description: Returns the value of the specified attribute (property or method).
- Example:

     ```python
     class MyClass:
         x = 5
     print(getattr(MyClass, 'x'))  # Output: 5
     ```

### 26. **`globals()`**

- Syntax: `globals()`
- Description: Returns the current global symbol table as a dictionary.
- Example:

     ```python
     print(globals())  # Output: {'__name__': '__main__', '__doc__': None, ...}
     ```

### 27. **`hasattr()`**

- Syntax: `hasattr(object, name)`
- Description: Returns True if the specified object has the specified attribute (property/method).
- Example:

     ```python
     class MyClass:
         x = 5
     print(hasattr(MyClass, 'x'))  # Output: True
     ```

### 28. **`hash()`**

- Syntax: `hash(object)`
- Description: Returns the hash value of a specified object.
- Example:

     ```python
     print(hash("hello"))  # Output: 8734488506955240589
     ```

### 29. **`help()`**

- Syntax: `help([object])`
- Description: Executes the built-in help system.
- Example:

     ```python
     help(list)
     ```

### 30. **`hex()`**

- Syntax: `hex(number)`
- Description: Converts a number into a hexadecimal value.
- Example:

     ```python
     print(hex(255))  # Output: '0xff'
     ```

### 31. **`id()`**

- Syntax: `id(object)`
- Description: Returns the id of an object.
- Example:

     ```python
     x = 10
     print(id(x))  # Output: some unique identifier
     ```

### 32. **`input()`**

- Syntax: `input(prompt)`
- Description: Allows user input.
- Example:

     ```python
     name = input("Enter your name: ")
     ```

### 33. **`int()`**

- Syntax: `int(x)` or `int(x, base)`
- Description: Returns an integer number.
- Example:

     ```python
     print(int("10"))  # Output: 10
     ```

### 34. **`isinstance()`**

- Syntax: `isinstance(object, classinfo)`
- Description: Returns True if a specified object is an instance of a specified object.
- Example:

     ```python
     print(isinstance(5, int))  # Output: True
     ```

### 35. **`issubclass()`**

- Syntax: `issubclass(class, classinfo)`
- Description: Returns True if a specified class is a subclass of a specified object.
- Example:

     ```python
     class A:
         pass
     class B(A):
         pass
     print(issubclass(B, A))  # Output: True
     ```

### 36. **`iter()`**

- Syntax: `iter(object[, sentinel])`
- Description: Returns an iterator object.
- Example:

     ```python
     my_iter = iter([1, 2, 3])
     ```

### 37. **`len()`**

- Syntax: `len(s)`
- Description: Returns the length of an object.
- Example:

     ```python
     print(len([1, 2, 3]))  # Output: 3
     ```

### 38. **`list()`**

- Syntax: `list(iterable)`
- Description: Returns a list.
- Example:

     ```python
     print(list((1, 2, 3)))  # Output: [1, 2, 3]
     ```

### 39. **`locals()`**

- Syntax: `locals()`
- Description: Returns an updated dictionary of the current local symbol table.
- Example:

     ```python
     print(locals())
     ```

### 40. **`map()`**

- Syntax: `map(function, iterable, ...)`
- Description: Returns the specified iterator with the specified function applied to each item.
- Example:

     ```python
     def square(x):
         return x ** 2
     print(list(map(square, [1, 2, 3])))  # Output: [1, 4, 9]
     ```

### 41. **`max()`**

- Syntax: `max(iterable, *[, key, default])` or `max(arg1, arg2, *args[, key])`
- Description: Returns the largest item in an iterable.
- Example:

     ```python
     print(max([1, 5, 3]))  # Output: 5
     ```

### 42. **`memoryview()`**

- Syntax: `memoryview(obj)`
- Description: Returns a memory view object.
- Example:

     ```python
     print(memoryview(b"hello"))  # Output: <memory at 0x7f108a2d4f40>
     ```

### 43. **`min()`**

- Syntax: `min(iterable, *[, key, default])` or `min(arg1, arg2, *args[, key])`
- Description: Returns the smallest item in an iterable.
- Example:

     ```python
     print(min([1, 5, 3]))  # Output: 1
     ```

### 44. **`next()`**

- Syntax: `next(iterator[, default])`
- Description: Returns the next item in an iterator.
- Example:

     ```python
     my_iter = iter([1, 2, 3])
     print(next(my_iter))  # Output: 1
     ```

### 45. **`object()`**

- Syntax: `object()`
- Description: Returns a new object.
- Example:

     ```python
     print(object())  # Output: <object object at 0x7f108a2d4f40>
     ```

### 46. **`oct()`**

- Syntax: `oct(number)`
- Description: Converts a number into an octal.
- Example

     ```python
     print(oct())  
     ```

### 47. **`open()`**

- Syntax: `open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)`
- Description: Opens a file and returns a corresponding file object.
- Example:

     ```python
     with open('example.txt', 'r') as file:
         print(file.read())
     ```

### 48. **`ord()`**

- Syntax: `ord(c)`
- Description: Returns the Unicode code point for the given character.
- Example:

     ```python
     print(ord('A'))  # Output: 65
     ```

### 49. **`pow()`**

- Syntax: `pow(x, y[, z])`
- Description: Returns x to the power of y; if z is present, returns x to the power of y, modulo z.
- Example:

     ```python
     print(pow(2, 3))  # Output: 8
     ```

### 50. **`print()`**

- Syntax: `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)`
- Description: Prints the given objects to the standard output.
- Example:

     ```python
     print("Hello, World!")  # Output: Hello, World!
     ```

### 51. **`property()`**

- Syntax: `property(fget=None, fset=None, fdel=None, doc=None)`
- Description: Returns a property attribute.
- Example:

     ```python
     class MyClass:
         def __init__(self):
             self._x = None
         def get_x(self):
             return self._x
         def set_x(self, value):
             self._x = value
         x = property(get_x, set_x)
     
     obj = MyClass()
     obj.x = 5
     print(obj.x)  # Output: 5
     ```

### 52. **`range()`**

- Syntax: `range(stop)` or `range(start, stop[, step])`
- Description: Returns a sequence of numbers starting from 0 by default.
- Example:

     ```python
     print(list(range(5)))  # Output: [0, 1, 2, 3, 4]
     ```

### 53. **`repr()`**

- Syntax: `repr(object)`
- Description: Returns a string representation of the object.
- Example:

     ```python
     print(repr('hello'))  # Output: 'hello'
     ```

### 54. **`reversed()`**

- Syntax: `reversed(seq)`
- Description: Returns a reverse iterator.
- Example:

     ```python
     print(list(reversed([1, 2, 3])))  # Output: [3, 2, 1]
     ```

### 55. **`round()`**

- Syntax: `round(number[, ndigits])`
- Description: Returns a floating-point number rounded to the specified number of decimals.
- Example:

     ```python
     print(round(3.14159, 2))  # Output: 3.14
     ```

### 56. **`set()`**

- Syntax: `set([iterable])`
- Description: Returns a new set object.
- Example:

     ```python
     print(set([1, 2, 3, 3]))  # Output: {1, 2, 3}
     ```

### 57. **`setattr()`**

- Syntax: `setattr(object, name, value)`
- Description: Sets the value of the attribute of the object.
- Example:

     ```python
     class MyClass:
         pass
     obj = MyClass()
     setattr(obj, 'x', 5)
     print(obj.x)  # Output: 5
     ```

### 58. **`slice()`**

- Syntax: `slice(stop)` or `slice(start, stop[, step])`
- Description: Returns a slice object.
- Example:

     ```python
     s = slice(1, 5, 2)
     print([1, 2, 3, 4, 5][s])  # Output: [2, 4]
     ```

### 59. **`sorted()`**

- Syntax: `sorted(iterable, *, key=None, reverse=False)`
- Description: Returns a new sorted list from the elements of the given iterable.
- Example:

     ```python
     print(sorted([3, 1, 2]))  # Output: [1, 2, 3]
     ```

### 60. **`staticmethod()`**

- Syntax: `staticmethod(function)`
- Description: Converts a method into a static method.
- Example:

     ```python
     class MyClass:
         @staticmethod
         def my_method():
             return 'static method'
     
     print(MyClass.my_method())  # Output: static method
     ```

### 61. **`str()`**

- Syntax: `str(object='')`
- Description: Returns a string version of the object.
- Example:

     ```python
     print(str(123))  # Output: '123'
     ```

### 62. **`sum()`**

- Syntax: `sum(iterable[, start])`
- Description: Returns the sum of all elements in the iterable.
- Example:

     ```python
     print(sum([1, 2, 3, 4]))  # Output: 10
     ```

### 63. **`super()`**

- Syntax: `super([type[, object-or-type]])`
- Description: Returns a proxy object that delegates method calls to a parent or sibling class.
- Example:

     ```python
     class Parent:
         def greet(self):
             return "Hello"
     class Child(Parent):
         def greet(self):
             return super().greet() + ", World!"
     
     obj = Child()
     print(obj.greet())  # Output: Hello, World!
     ```

### 64. **`tuple()`**

- Syntax: `tuple([iterable])`
- Description: Returns a tuple object.
- Example:

     ```python
     print(tuple([1, 2, 3]))  # Output: (1, 2, 3)
     ```

### 65. **`type()`**

- Syntax: `type(object)` or `type(name, bases, dict)`
- Description: Returns the type of the object or creates a new type object.
- Example:

     ```python
     print(type(123))  # Output: <class 'int'>
     ```

### 66. **`vars()`**

- Syntax: `vars([object])`
- Description: Returns the `__dict__` attribute of the object.
- Example:

     ```python
     class MyClass:
         def __init__(self):
             self.x = 5
     obj = MyClass()
     print(vars(obj))  # Output: {'x': 5}
     ```

### 67. **`zip()`**

- Syntax: `zip(*iterables)`
- Description: Returns an iterator of tuples, where the i-th tuple contains the i-th element from each of the argument sequences or iterables.
- Example:

     ```python
     a = [1, 2, 3]
     b = ['a', 'b', 'c']
     print(list(zip(a, b)))  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]
     ```

### 68. **`__import__()`**

- Syntax: `__import__(name, globals=None, locals=None, fromlist=(), level=0)`
- Description: Dynamically imports the module.
- Example:

     ```python
     math = __import__('math')
     print(math.sqrt(25))  # Output: 5.0
     ```

### 69. **`classmethod()`**

- Syntax: `classmethod(func)`
- Description: Converts a method into a class method.
- Example:

     ```python
     class MyClass:
         @classmethod
         def my_method(cls):
             return cls.__name__
     print(MyClass.my_method())  # Output: MyClass
     ```

### 70. **`compile()`**

- Syntax: `compile(source, filename, mode, flags=0, dont_inherit=False, optimize=-1)`
- Description: Compiles the source into a code or AST object.
- Example:

     ```python
     code = "print('Hello, World!')"
     compiled_code = compile(code, filename='', mode='exec')
     exec(compiled_code)  # Output: Hello, World!
     ```

### 71. **`dir()`**

- Syntax: `dir([object])`
- Description: Returns a list of valid attributes for the specified object, or the current local scope if no object is provided.
- Example:

     ```python
     print(dir())  # Output: list of attributes in the current scope
     ```

### 72. **`divmod()`**

- Syntax: `divmod(a, b)`
- Description: Returns a tuple containing the quotient and remainder of the division of a by b.
- Example:

     ```python
     print(divmod(10, 3))  # Output: (3, 1)
     ```

### 73. **`enumerate()`**

- Syntax: `enumerate(iterable, start=0)`
- Description: Returns an enumerate object, which yields pairs containing a count (from start, which defaults to 0) and the values obtained from iterating over the given iterable.
- Example:

     ```python
     fruits = ['apple', 'banana', 'cherry']
     for index, fruit in enumerate(fruits):
         print(index, fruit)
     # Output:
     # 0 apple
     # 1 banana
     # 2 cherry
     ```

### 74. **`eval()`**

- Syntax: `eval(expression, globals=None, locals=None)`
- Description: Evaluates the specified expression, a Python expression as a string, and returns the result.
- Example:

     ```python
     x = 10
     print(eval('x + 5'))  # Output: 15
     ```

### 75. **`exec()`**

- Syntax: `exec(object[, globals[, locals]])`
- Description: Executes the specified Python code or object.
- Example:

     ```python
     exec('print("Hello, World!")')  # Output: Hello, World!
     ```

### 76. **`filter()`**

- Syntax: `filter(function, iterable)`
- Description: Constructs an iterator from those elements of the iterable for which the function returns true.
- Example:

     ```python
     def is_even(n):
         return n % 2 == 0
     print(list(filter(is_even, [1, 2, 3, 4, 5])))  # Output: [2, 4]
     ```

### 77. **`format()`**

- Syntax: `format(value, format_spec)`
- Description: Formats a specified value according to the format_spec.
- Example:

     ```python
     print(format(0.5, "%"))  # Output: '50.000000%'
     ```

### 78. **`getattr()`**

- Syntax: `getattr(object, name[, default])`
- Description: Returns the value of the named attribute of an object.
- Example:

     ```python
     class MyClass:
         x = 5
     print(getattr(MyClass, 'x'))  # Output: 5
     ```

### 79. **`globals()`**

- Syntax: `globals()`
- Description: Returns a dictionary representing the current global symbol table.
- Example:

     ```python
     print(globals())  # Output: Global symbol table dictionary
     ```

### 80. **`hasattr()`**

- Syntax: `hasattr(object, name)`
- Description: Returns True if the object has the named attribute.
- Example:

     ```python
     class MyClass:
         x = 5
     print(hasattr(MyClass, 'x'))  # Output: True
     ```

### 81. **`hash()`**

- Syntax: `hash(object)`
- Description: Returns the hash value of the object.
- Example:

     ```python
     print(hash("hello"))  # Output: Hash value
     ```

### 82. **`help()`**

- Syntax: `help([object])`
- Description: Invokes the built-in help system.
- Example:

     ```python
     help(list)
     ```

### 83. **`hex()`**

- Syntax: `hex(number)`
- Description: Converts an integer to a hexadecimal string.
- Example:

     ```python
     print(hex(255))  # Output: '0xff'
     ```

### 84. **`callable()`**

- Syntax: `callable(object)`
- Description: Returns True if the object appears callable, otherwise False.
- Example:

     ```python
     def my_function():
         pass
     print(callable(my_function))  # Output: True
     ```

### 85. **`chr()`**

- Syntax: `chr(i)`
- Description: Returns the string representing a character whose Unicode code point is the integer i.
- Example:

     ```python
     print(chr(65))  # Output: 'A'
     ```

### 86. **`bytes()`**

- Syntax: `bytes([source[, encoding[, errors]]])`
- Description: Returns a new "bytes" object, which is an immutable sequence of integers in the range 0 <= x < 256.
- Example:

     ```python
     print(bytes([65, 66, 67]))  # Output: b'ABC'
     ```

### 87. **`bytearray()`**

- Syntax: `bytearray([source[, encoding[, errors]]])`
- Description: Returns a new array of bytes.
- Example:

     ```python
     print(bytearray([65, 66, 67]))  # Output: bytearray(b'ABC')
     ```

### 88. **`classmethod()`**

- Syntax: `classmethod(func)`
- Description: Returns a class method for the given function.
- Example:

     ```python
     class MyClass:
         @classmethod
         def my_method(cls):
             return cls.__name__
     print(MyClass.my_method())  # Output: MyClass
     ```

### 89. **`compile()`**

- Syntax: `compile(source, filename, mode, flags=0, dont_inherit=False, optimize=-1)`
- Description: Compiles the source into a code or AST object.
- Example:

     ```python
     code = "print('Hello, World!')"
     compiled_code = compile(code, filename='', mode='exec')
     exec(compiled_code)  # Output: Hello, World!
     ```

### 90. **`complex()`**

- Syntax: `complex(real[, imag])`
- Description: Returns a complex number with the value real + imag * 1j or converts a string or number to a complex number.
- Example:

     ```python
     print(complex(2, 3))  # Output: (2+3j)
     ```

### 91. **`delattr()`**

- Syntax: `delattr(object, name)`
- Description: Deletes the named attribute from the given object.
- Example:

     ```python
     class MyClass:
         x = 5
     delattr(MyClass, 'x')
     print(hasattr(MyClass, 'x'))  # Output: False
     ```

### 92. **`dir()`**

- Syntax: `dir([object])`
- Description: Returns a list of valid attributes for the specified object, or the current local scope if no object is provided.
- Example:

     ```python
     print(dir())  # Output: list of attributes in the current scope
     ```

### 93. **`divmod()`**

- Syntax: `divmod(a, b)`
- Description: Returns a tuple containing the quotient and remainder of the division of a by b.
- Example:

     ```python
     print(divmod(10, 3))  # Output: (3, 1)
     ```

### 94. **`enumerate()`**

- Syntax: `enumerate(iterable, start=0)`
- Description: Returns an enumerate object, which yields pairs containing a count and the values obtained from iterating over the given iterable.
- Example:

     ```python
     fruits = ['apple', 'banana', 'cherry']
     for index, fruit in enumerate(fruits):
         print(index, fruit)
     ```

### 95. **`eval()`**

- Syntax: `eval(expression, globals=None, locals=None)`
- Description: Evaluates the specified expression, a Python expression as a string, and returns the result.
- Example:

     ```python
     x = 10
     print(eval('x + 5'))  # Output: 15
     ```

### 96. **`exec()`**

- Syntax: `exec(object[, globals[, locals]])`
- Description: Executes the specified Python code or object.
- Example:

     ```python
     exec('print("Hello, World!")')  # Output: Hello, World!
     ```

### 97. **`filter()`**

- Syntax: `filter(function, iterable)`
- Description: Constructs an iterator from those elements of the iterable for which the function returns true.
- Example:

     ```python
     def is_even(n):
         return n % 2 == 0
     print(list(filter(is_even, [1, 2, 3, 4, 5])))  # Output: [2, 4]
     ```

### 98. **`format()`**

- Syntax: `format(value, format_spec)`
- Description: Formats a specified value according to the format_spec.
- Example:

     ```python
     print(format(0.5, "%"))  # Output: '50.000000%'
     ```

### 99. **`getattr()`**

- Syntax: `getattr(object, name[, default])`
- Description: Returns the value of the named attribute of an object.
- Example:

     ```python
     class MyClass:
         x = 5
     print(getattr(MyClass, 'x'))  # Output: 5
     ```

### 100. **`globals()`**

- Syntax: `globals()`
- Description: Returns a dictionary representing the current global symbol table.
- Example:

     ```python
     print(globals())  # Output: Global symbol table dictionary
     ```

### 101. **`hasattr()`**

- Syntax: `hasattr(object, name)`
- Description: Returns True if the object has the named attribute.
- Example:

     ```python
     class MyClass:
         x = 5
     print(hasattr(MyClass, 'x'))  # Output: True
     ```

### 102. **`hash()`**

- Syntax: `hash(object)`
- Description: Returns the hash value of the object.
- Example:

     ```python
     print(hash("hello"))  # Output: Hash value
     ```

### 103. **`help()`**

- Syntax: `help([object])`
- Description: Invokes the built-in help system.
- Example:

     ```python
     help(list)
     ```

### 104. **`hex()`**

- Syntax: `hex(number)`
- Description: Converts an integer to a hexadecimal string.
- Example:

     ```python
     print(hex(255))  # Output: '0xff'
     ```

### 105. **`id()`**

- Syntax: `id(object)`
- Description: Returns the identity of an object.
- Example:

     ```python
     x = 10
     print(id(x))  # Output: Unique identifier for x
     ```

### 106. **`input()`**

- Syntax: `input(prompt)`
- Description: Allows user input.
- Example:

     ```python
     name = input("Enter your name: ")
     print("Hello, " + name)
     ```

### 107. **`int()`**

- Syntax: `int(x)` or `int(x, base)`
- Description: Returns an integer object constructed from a number or string.
- Example:

     ```python
     print(int("10"))  # Output: 10
     ```

### 108. **`isinstance()`**

- Syntax: `isinstance(object, classinfo)`
- Description: Returns True if the object is an instance of the specified class.
- Example:

     ```python
     print(isinstance(5, int))  # Output: True
     ```

### 109. **`issubclass()`**

- Syntax: `issubclass(class, classinfo)`
- Description: Returns True if class is a subclass of classinfo.
- Example:

     ```python
     class A:
         pass
     class B(A):
         pass
     print(issubclass(B, A))  # Output: True
     ```

### 110. **`iter()`**

- Syntax: `iter(object[, sentinel])`
- Description: Returns an iterator object.
- Example:

     ```python
     my_iter = iter([1, 2, 3])
     ```

### 111. **`len()`**

- Syntax: `len(s)`
- Description: Returns the length of an object.
- Example:

     ```python
     print(len([1, 2, 3]))  # Output: 3
     ```

### 112. **`list()`**

- Syntax: `list([iterable])`
- Description: Returns a list from the given iterable.
- Example:

     ```python
     print(list((1, 2, 3)))  # Output: [1, 2, 3]
     ```

### 113. **`locals()`**

- Syntax: `locals()`
- Description: Returns a dictionary of the current local symbol table.
- Example:

     ```python
     print(locals())
     ```

### 114. **`map()`**

- Syntax: `map(function, iterable, ...)`
- Description: Applies the function to all items in the input iterable.
- Example:

     ```python
     def square(x):
         return x ** 2
     print(list(map(square, [1, 2, 3])))  # Output: [1, 4, 9]
     ```

### 115. **`max()`**

- Syntax: `max(iterable, *[, key, default])` or `max(arg1, arg2, *args[, key])`
- Description: Returns the largest item in an iterable or among the arguments.
- Example:

     ```python
     print(max([1, 5, 3]))  # Output: 5
     ```

### 116. **`memoryview()`**

- Syntax: `memoryview(obj)`
- Description: Returns a memory view object of the given object.
- Example:

     ```python
     print(memoryview(b"hello"))  # Output: <memory at 0x7f108a2d4f40>
     ```

### 117. **`min()`**

- Syntax: `min(iterable, *[, key, default])` or `min(arg1, arg2, *args[, key])`
- Description: Returns the smallest item in an iterable or among the arguments.
- Example:

     ```python
     print(min([1, 5, 3]))  # Output: 1
     ```

### 118. **`next()`**

- Syntax: `next(iterator[, default])`
- Description: Returns the next item from the iterator.
- Example:

     ```python
     my_iter = iter([1, 2, 3])
     print(next(my_iter))  # Output: 1
     ```

### 119. **`object()`**

- Syntax: `object()`
- Description: Returns a new featureless object.
- Example:

     ```python
     print(object())  # Output: <object object at 0x7f108a2d4f40>
     ```

### 120. **`oct()`**

- Syntax: `oct(number)`
- Description: Converts an integer to an octal string.
- Example:

     ```python
     print(oct(255))  # Output: '0o377'
     ```
