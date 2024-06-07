Iterators in Python are objects that represent a stream of data. They implement the iterator protocol, which consists of two methods: `__iter__()` and `__next__()`. Iterators are used to iterate over elements in a collection (like lists or strings) or to generate a sequence of values on-the-fly.

## Iterator Protocol

The iterator protocol consists of two methods:

- `__iter__()`: Returns the iterator object itself.
- `__next__()`: Returns the next item in the iterator. If there are no more items, it raises the `StopIteration` exception.

### Example of an Iterator

```python
class MyIterator:
    def __iter__(self):
        self.num = 1
        return self

    def __next__(self):
        if self.num <= 5:
            result = self.num
            self.num += 1
            return result
        else:
            raise StopIteration

my_iter = MyIterator()
iterator = iter(my_iter)

for num in iterator:
    print(num)
# Output:
# 1
# 2
# 3
# 4
# 5
```

## Iterable

An iterable is an object that can be iterated over, meaning it can return an iterator. Iterables can be iterated over using a loop or by passing them to the `iter()` function.

### Example of an Iterable

```python
class MyIterable:
    def __init__(self):
        self.numbers = [1, 2, 3, 4, 5]

    def __iter__(self):
        return iter(self.numbers)

my_iterable = MyIterable()

for num in my_iterable:
    print(num)
# Output:
# 1
# 2
# 3
# 4
# 5
```

## Built-in Iterators

Python provides several built-in functions and objects that work with iterators.

### `iter()`

The `iter()` function returns an iterator object.

```python
my_list = [1, 2, 3, 4, 5]
iterator = iter(my_list)

print(next(iterator))  # Output: 1
print(next(iterator))  # Output: 2
```

### `zip()`

The `zip()` function returns an iterator that aggregates elements from two or more iterables.

```python
names = ['Alice', 'Bob', 'Charlie']
ages = [30, 25, 35]

for name, age in zip(names, ages):
    print(name, age)
# Output:
# Alice 30
# Bob 25
# Charlie 35
```

### `enumerate()`

The `enumerate()` function returns an iterator of tuples containing indices and values from an iterable.

```python
my_list = ['a', 'b', 'c']

for index, value in enumerate(my_list):
    print(index, value)
# Output:
# 0 a
# 1 b
# 2 c
```

### `map()`

The `map()` function returns an iterator that applies a function to every item of an iterable.

```python
numbers = [1, 2, 3, 4, 5]

def square(x):
    return x ** 2

squared_numbers = map(square, numbers)
print(list(squared_numbers))  # Output: [1, 4, 9, 16, 25]
```

### `filter()`

The `filter()` function returns an iterator that filters elements from an iterable based on a function.

```python
numbers = [1, 2, 3, 4, 5]

def is_even(x):
    return x % 2 == 0

even_numbers = filter(is_even, numbers)
print(list(even_numbers))  # Output: [2, 4]
```

### `range()`

The `range()` function returns an iterator that generates a sequence of numbers.

```python
for i in range(5):
    print(i)
# Output:
# 0
# 1
# 2
# 3
# 4
```

## Using Iterators in Python

Iterators are widely used in Python for lazy evaluation, efficient memory usage, and handling large data streams.

- **Lazy Evaluation**: Iterators produce values only when requested, which saves memory and improves performance.
- **Efficient Memory Usage**: Iterators process data one element at a time, making them suitable for handling large datasets.
- **Handling Infinite Streams**: Iterators can represent infinite sequences, allowing for efficient handling of streams that can't fit into memory.
