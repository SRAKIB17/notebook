
---

# Python Classes and Objects

## Introduction

Python is an object-oriented programming language. Almost everything in Python is an object, with its properties and methods.

### Defining a Class

A class is defined using the `class` keyword.

```python
class MyClass:
    x = 5

# Creating an object
p1 = MyClass()
print(p1.x)  # Output: 5
```

### The `__init__` Method

The `__init__` method is a special method called a constructor. It is automatically called when a new instance of the class is created. It is used to initialize the object's attributes.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("John", 36)
print(p1.name)  # Output: John
print(p1.age)   # Output: 36
```

### Object Methods

Objects can also have methods, which are functions defined inside the class.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name}")

p1 = Person("John", 36)
p1.greet()  # Output: Hello, my name is John
```

### The `self` Parameter

The `self` parameter is a reference to the current instance of the class. It is used to access variables and methods associated with the current object.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name}")

p1 = Person("John", 36)
p1.greet()  # Output: Hello, my name is John
```

### Modifying Object Properties

You can modify properties of an object after it is created.

```python
p1.age = 40
print(p1.age)  # Output: 40
```

### Deleting Object Properties

You can delete properties of an object using the `del` keyword.

```python
del p1.age
```

### Deleting Objects

You can delete objects using the `del` keyword.

```python
del p1
```

---

## Class Attributes vs. Instance Attributes

Class attributes are shared by all instances of the class, while instance attributes are specific to each instance.

```python
class Dog:
    species = "Canis familiaris"  # Class attribute

    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age    # Instance attribute

dog1 = Dog("Buddy", 9)
dog2 = Dog("Molly", 3)

print(dog1.species)  # Output: Canis familiaris
print(dog2.species)  # Output: Canis familiaris

dog1.species = "Canis lupus"
print(dog1.species)  # Output: Canis lupus
print(dog2.species)  # Output: Canis familiaris
```

---

## Inheritance

Inheritance allows a class to inherit attributes and methods from another class. The class being inherited from is called the base class, and the class that inherits is called the derived class.

### Single Inheritance

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

dog = Dog("Buddy")
cat = Cat("Misty")

print(dog.speak())  # Output: Woof!
print(cat.speak())  # Output: Meow!
```

### Multiple Inheritance

```python
class Animal:
    def __init__(self, name):
        self.name = name

class Pet:
    def __init__(self, owner):
        self.owner = owner

class Dog(Animal, Pet):
    def __init__(self, name, owner):
        Animal.__init__(self, name)
        Pet.__init__(self, owner)

    def speak(self):
        return "Woof!"

dog = Dog("Buddy", "Alice")
print(dog.name)   # Output: Buddy
print(dog.owner)  # Output: Alice
print(dog.speak())  # Output: Woof!
```

---

## Encapsulation

Encapsulation is the concept of wrapping data and methods that operate on data within a single unit (class) and restricting access to some of the object's components.

### Private Attributes

Attributes can be made private by prefixing their names with double underscores (`__`).

```python
class Car:
    def __init__(self, model, year):
        self.__model = model  # Private attribute
        self.year = year

    def get_model(self):
        return self.__model

car = Car("Toyota", 2020)
print(car.year)          # Output: 2020
print(car.get_model())   # Output: Toyota
# print(car.__model)     # AttributeError: 'Car' object has no attribute '__model'
```

---

## Polymorphism

Polymorphism allows you to define methods in the child class with the same name as defined in their parent class.

### Method Overriding

```python
class Bird:
    def speak(self):
        return "Tweet!"

class Parrot(Bird):
    def speak(self):
        return "Squawk!"

bird = Bird()
parrot = Parrot()

print(bird.speak())    # Output: Tweet!
print(parrot.speak())  # Output: Squawk!
```

### Polymorphism with Functions and Methods

```python
class Bird:
    def speak(self):
        return "Tweet!"

class Parrot(Bird):
    def speak(self):
        return "Squawk!"

def make_sound(animal):
    print(animal.speak())

bird = Bird()
parrot = Parrot()

make_sound(bird)    # Output: Tweet!
make_sound(parrot)  # Output: Squawk!
```

---

## Special (Magic/Dunder) Methods

Special methods are predefined methods in Python that start and end with double underscores (`__`).

### Common Special Methods

#### `__str__()`

Defines the string representation of the object.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name}, {self.age}"

p1 = Person("Alice", 30)
print(p1)  # Output: Alice, 30
```

#### `__len__()`

Defines the behavior of the `len()` function.

```python
class MyList:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return len(self.items)

my_list = MyList([1, 2, 3])
print(len(my_list))  # Output: 3
```

#### `__add__()`

Defines the behavior of the `+` operator.

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(4, 5)
v3 = v1 + v2
print(v3)  # Output: (6, 8)
```

#### `__eq__()`

Defines the behavior of the `==` operator.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __eq__(self, other):
        return self.name == other.name and self.age == other.age

p1 = Person("Alice", 30)
p2 = Person("Alice", 30)
print(p1 == p2)  # Output: True
```

### Other Special Methods

- `__init__()`: Constructor
- `__del__()`: Destructor
- `__repr__()`: Defines the official string representation of an object
- `__call__()`: Allows an instance to be called as a function
- `__getitem__()`: Defines the behavior of accessing elements using the `[]` operator
- `__setitem__()`: Defines the behavior of setting elements using the `[]` operator

---
