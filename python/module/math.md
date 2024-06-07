
## Importing the `math` Module

```python
import math
```

## Common Mathematical Functions

### Trigonometric Functions

```python
print(math.sin(math.pi/2))   # Output: 1.0
print(math.cos(math.pi))     # Output: -1.0
print(math.tan(math.pi/4))   # Output: 1.0
```

### Exponential and Logarithmic Functions

```python
print(math.exp(2))           # Output: e^2 ≈ 7.389
print(math.log(10))          # Output: Natural logarithm of 10
print(math.log10(100))       # Output: Base-10 logarithm of 100
```

### Power and Square Root

```python
print(math.pow(2, 3))        # Output: 2^3 = 8.0
print(math.sqrt(25))         # Output: Square root of 25 = 5.0
```

### Rounding and Ceiling/Floor

```python
print(math.ceil(4.3))        # Output: 5
print(math.floor(4.7))       # Output: 4
print(round(4.5))            # Output: 4 (rounding to the nearest integer)
```

### Constants

```python
print(math.pi)               # Output: π (pi)
print(math.e)                # Output: e (Euler's number)
```

### Degrees and Radians Conversion

```python
print(math.degrees(math.pi))      # Output: 180.0 (radians to degrees)
print(math.radians(180))          # Output: π (degrees to radians)
```

### Hyperbolic Functions

```python
print(math.sinh(0))          # Output: 0.0 (hyperbolic sine)
print(math.cosh(0))          # Output: 1.0 (hyperbolic cosine)
print(math.tanh(0))          # Output: 0.0 (hyperbolic tangent)
```

### Miscellaneous Functions

```python
print(math.factorial(5))     # Output: 120 (factorial of 5)
print(math.gcd(12, 18))      # Output: 6 (greatest common divisor)
```

## Constants

The `math` module also provides some useful mathematical constants:

- `math.pi`: The mathematical constant π.
- `math.e`: The mathematical constant e (Euler's number).
- `math.inf`: Positive infinity.
- `math.nan`: Not a Number.

```python
print(math.pi)               # Output: π (pi)
print(math.e)                # Output: e (Euler's number)
```

## Using `math` with NumPy

The `math` module is useful for basic mathematical operations, but for more complex mathematical operations and arrays, you may want to use the `numpy` library.

```python
import numpy as np

# Calculate the sine of an array of angles
angles = np.array([0, math.pi/2, math.pi])
sines = np.sin(angles)
print(sines)  # Output: [0.         1.         1.2246468e-16]
```

## Note

- Some functions in the `math` module work with floats only, and not with integers.
- For more advanced mathematical operations and working with arrays, consider using the `numpy` library.
