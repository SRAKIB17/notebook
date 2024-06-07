
## Importing the `datetime` Module

```python
from datetime import datetime, date, time, timedelta
```

## Creating Date and Time Objects

### `date` Object

```python
today = date.today()
print(today)  # Output: YYYY-MM-DD
```

### `time` Object

```python
current_time = time(hour=10, minute=30, second=15)
print(current_time)  # Output: HH:MM:SS
```

### `datetime` Object

```python
current_datetime = datetime(year=2022, month=6, day=7, hour=10, minute=30, second=15)
print(current_datetime)  # Output: YYYY-MM-DD HH:MM:SS
```

## Formatting Dates and Times

### `strftime()` Method

```python
formatted_date = today.strftime("%Y-%m-%d")
print(formatted_date)  # Output: YYYY-MM-DD

formatted_time = current_time.strftime("%H:%M:%S")
print(formatted_time)  # Output: HH:MM:SS

formatted_datetime = current_datetime.strftime("%Y-%m-%d %H:%M:%S")
print(formatted_datetime)  # Output: YYYY-MM-DD HH:MM:SS
```

## Parsing Strings to Dates

### `strptime()` Function

```python
date_str = "2022-06-07"
parsed_date = datetime.strptime(date_str, "%Y-%m-%d")
print(parsed_date)  # Output: 2022-06-07 00:00:00
```

## Arithmetic with Dates

### Adding and Subtracting Time Intervals

```python
tomorrow = today + timedelta(days=1)
print(tomorrow)  # Output: YYYY-MM-DD (tomorrow's date)

next_week = today + timedelta(weeks=1)
print(next_week)  # Output: YYYY-MM-DD (date one week from now)
```

### Calculating Time Difference

```python
date1 = datetime(year=2022, month=6, day=7)
date2 = datetime(year=2022, month=6, day=1)

difference = date1 - date2
print(difference.days)  # Output: Number of days between date1 and date2
```

## Date Formatting Directives

- `%Y`: Year with century as a decimal number.
- `%m`: Month as a zero-padded decimal number.
- `%d`: Day of the month as a zero-padded decimal number.
- `%H`: Hour (24-hour clock) as a zero-padded decimal number.
- `%M`: Minute as a zero-padded decimal number.
- `%S`: Second as a zero-padded decimal number.

## Working with `datetime` Objects

### `datetime` Properties and Methods

```python
print(today.year)          # Output: Year
print(today.month)         # Output: Month
print(today.day)           # Output: Day
print(current_time.hour)   # Output: Hour
print(current_time.minute) # Output: Minute
print(current_time.second) # Output: Second
```

## Timezone Support

Python's `datetime` module doesn't provide built-in timezone support. For timezone-aware operations, you can use the `pytz` module or the `zoneinfo` module (available in Python 3.9+).

## Working with `pytz` Module (Optional)

```python
import pytz

utc_now = datetime.now(pytz.utc)
print(utc_now)  # Output: Current UTC time

# Convert to a different timezone
eastern = pytz.timezone('US/Eastern')
eastern_time = utc_now.astimezone(eastern)
print(eastern_time)  # Output: Current time in US/Eastern timezone
```
