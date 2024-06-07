
# Abstraction in Python

## Introduction

Abstraction is one of the four fundamental principles of Object-Oriented Programming (OOP), along with encapsulation, inheritance, and polymorphism. It allows you to hide the complex implementation details and show only the essential features of an object.

In Python, abstraction is typically achieved through abstract classes and interfaces.

## Abstract Classes

An abstract class is a class that cannot be instantiated and often includes one or more abstract methods. Abstract methods are methods that are declared but contain no implementation. Abstract classes are used as blueprints for other classes.

### Using the `abc` Module

Python's `abc` (Abstract Base Classes) module provides the necessary tools to define abstract classes.

### Example of an Abstract Class

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

# Trying to instantiate an abstract class will raise an error
# animal = Animal()  # TypeError: Can't instantiate abstract class Animal with abstract method make_sound

dog = Dog()
print(dog.make_sound())  # Output: Woof!

cat = Cat()
print(cat.make_sound())  # Output: Meow!
```

### Key Points

- **Abstract Method**: A method declared with the `@abstractmethod` decorator that must be overridden in derived classes.
- **Abstract Class**: A class that contains one or more abstract methods and cannot be instantiated.

## Interfaces

While Python does not have explicit interface support as in some other languages like Java, abstract classes can be used to achieve similar functionality.

### Example of an Interface-like Abstract Class

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

    def perimeter(self):
        return 2 * 3.14 * self.radius

rectangle = Rectangle(3, 4)
print("Rectangle area:", rectangle.area())         # Output: Rectangle area: 12
print("Rectangle perimeter:", rectangle.perimeter())  # Output: Rectangle perimeter: 14

circle = Circle(5)
print("Circle area:", circle.area())               # Output: Circle area: 78.5
print("Circle perimeter:", circle.perimeter())     # Output: Circle perimeter: 31.400000000000002
```

### Key Points

- An abstract class can define methods that act as an interface by requiring derived classes to implement those methods.
- This approach ensures that derived classes adhere to a particular contract, ensuring consistent method signatures across different classes.

## Benefits of Abstraction

1. **Simplifies Code**: By hiding complex details, it makes the code easier to manage and understand.
2. **Enhances Reusability**: Abstract classes and interfaces can be reused across different projects, providing a standard structure.
3. **Improves Maintainability**: Changes to the implementation can be made independently of the class definitions, improving maintainability.
4. **Encourages Loose Coupling**: Reduces dependencies between components, making the system more modular.

## Real-World Example

### Payment System

```python
from abc import ABC, abstractmethod

class Payment(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class CreditCardPayment(Payment):
    def pay(self, amount):
        print(f"Paying {amount} using Credit Card")

class PayPalPayment(Payment):
    def pay(self, amount):
        print(f"Paying {amount} using PayPal")

class BitcoinPayment(Payment):
    def pay(self, amount):
        print(f"Paying {amount} using Bitcoin")

# Function to process payment
def process_payment(payment_method, amount):
    payment_method.pay(amount)

# Usage
credit_card = CreditCardPayment()
paypal = PayPalPayment()
bitcoin = BitcoinPayment()

process_payment(credit_card, 100)  # Output: Paying 100 using Credit Card
process_payment(paypal, 200)       # Output: Paying 200 using PayPal
process_payment(bitcoin, 300)      # Output: Paying 300 using Bitcoin
```

### Key Points

- The `Payment` class defines an abstract interface for different payment methods.
- Each derived class (`CreditCardPayment`, `PayPalPayment`, `BitcoinPayment`) implements the `pay` method.
- The `process_payment` function can process any type of payment method without knowing its implementation details.
