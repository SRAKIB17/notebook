
---

## Random Module

The `random` module provides functions for generating random numbers, sequences, and selecting random elements.

### Importing the Module

```python
import random
```

### Generating Random Numbers

#### `random.random() -> float`

- **Description:** Returns a random floating point number in the range [0.0, 1.0).
- **Example:**

  ```python
  random_number = random.random()
  ```

#### `random.randint(a, b) -> int`

- **Description:** Returns a random integer N such that `a <= N <= b`.
- **Parameters:**
  - `a`: Lower bound (inclusive).
  - `b`: Upper bound (inclusive).
- **Example:**

  ```python
  random_integer = random.randint(1, 100)
  ```

#### `random.randrange(start, stop[, step]) -> int`

- **Description:** Returns a randomly selected element from the specified range.
- **Parameters:**
  - `start` (optional): Start of the range (inclusive). Default is 0.
  - `stop`: End of the range (exclusive).
  - `step` (optional): Step value. Default is 1.
- **Example:**

  ```python
  random_element = random.randrange(0, 100, 5)
  ```

### Generating Random Choices

#### `random.choice(seq) -> object`

- **Description:** Returns a randomly selected element from the non-empty sequence.
- **Parameters:**
  - `seq`: Sequence of elements.
- **Example:**

  ```python
  random_item = random.choice(['apple', 'banana', 'cherry'])
  ```

#### `random.choices(population, weights=None, cum_weights=None, k=1) -> list`

- **Description:** Returns a list with a random selection from the specified population.
- **Parameters:**
  - `population`: Sequence to choose from.
  - `weights` (optional): Relative weights for the elements.
  - `cum_weights` (optional): Cumulative weights for the elements.
  - `k`: Number of elements to choose.
- **Example:**

  ```python
  random_items = random.choices(['apple', 'banana', 'cherry'], weights=[1, 2, 1], k=2)
  ```

### Shuffling Sequences

#### `random.shuffle(x) -> None`

- **Description:** Shuffles the sequence in place.
- **Parameters:**
  - `x`: Sequence to shuffle.
- **Example:**

  ```python
  my_list = [1, 2, 3, 4, 5]
  random.shuffle(my_list)
  ```

### Setting Seed

#### `random.seed(a=None, version=2) -> None`

- **Description:** Initializes the random number generator.
- **Parameters:**
  - `a` (optional): Seed value.
  - `version` (optional): The algorithm version to use.
- **Example:**

  ```python
  random.seed(42)
  ```

### Miscellaneous

#### `random.sample(population, k) -> list`

- **Description:** Returns a new list containing unique elements from the population.
- **Parameters:**
  - `population`: Sequence to choose from.
  - `k`: Number of unique elements to choose.
- **Example:**

  ```python
  random_sample = random.sample(range(1, 100), 10)
  ```

#### `random.uniform(a, b) -> float`

- **Description:** Returns a random floating point number in the range `[a, b]`.
- **Parameters:**
  - `a`: Lower bound.
  - `b`: Upper bound.
- **Example:**

  ```python
  random_float = random.uniform(1.0, 10.0)
  ```

#### `random.getstate() -> tuple`

- **Description:** Returns the current internal state of the random number generator.
- **Example:**

  ```python
  state = random.getstate()
  ```

#### `random.setstate(state) -> None`

- **Description:** Restores the internal state of the random number generator from a tuple.
- **Parameters:**
  - `state`: State to restore.
- **Example:**

  ```python
  random.setstate(state)
  ```

### Example

```python
import random

# Generate a random number between 0 and 1
random_number = random.random()

# Generate a random integer between 1 and 100
random_integer = random.randint(1, 100)

# Generate a random choice from a list
random_item = random.choice(['apple', 'banana', 'cherry'])

# Shuffle a list
my_list = [1, 2, 3, 4, 5]
random.shuffle(my_list)
```

Refer to the [official documentation](https://docs.python.org/3/library/random.html).
