
## Importing the `json` Module

```python
import json
```

## JSON Serialization (Encoding)

### Converting Python Objects to JSON

#### `json.dumps()`

Serialize Python object to a JSON formatted string.

```python
data = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

json_str = json.dumps(data)
print(json_str)  # Output: {"name": "John", "age": 30, "city": "New York"}
```

#### `json.dump()`

Serialize Python object to a JSON formatted file.

```python
with open("data.json", "w") as json_file:
    json.dump(data, json_file)
```

## JSON Deserialization (Decoding)

### Converting JSON to Python Objects

#### `json.loads()`

Deserialize a JSON formatted string to a Python object.

```python
json_str = '{"name": "John", "age": 30, "city": "New York"}'
data = json.loads(json_str)
print(data)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}
```

#### `json.load()`

Deserialize a JSON file to a Python object.

```python
with open("data.json", "r") as json_file:
    data = json.load(json_file)
    print(data)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}
```

## Pretty Printing JSON

#### `json.dumps()` with `indent` parameter

You can use the `indent` parameter to make the JSON string more readable by adding indentation.

```python
data = {"name": "John", "age": 30, "city": "New York"}
json_str = json.dumps(data, indent=4)
print(json_str)
```

## Handling Different Data Types

JSON supports several data types, including strings, numbers, objects (dictionaries), arrays (lists), booleans, and null values.

```python
data = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "is_student": False,
    "scores": [80, 85, 90],
    "address": {"street": "123 Main St", "city": "Anytown"}
}

json_str = json.dumps(data, indent=4)
print(json_str)
```

## Handling Custom Objects

By default, JSON cannot serialize custom objects. However, you can provide custom serialization by implementing the `JSONEncoder` class.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class PersonEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Person):
            return {"name": obj.name, "age": obj.age}
        return super().default(obj)

person = Person("Alice", 25)
person_json = json.dumps(person, cls=PersonEncoder)
print(person_json)  # Output: {"name": "Alice", "age": 25}
```

## Note

- JSON keys must be strings, and values must be one of the JSON data types.
- Python dictionaries are converted to JSON objects.
- Python lists are converted to JSON arrays.
