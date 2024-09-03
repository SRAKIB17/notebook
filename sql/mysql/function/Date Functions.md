
### 1. `ADDDATE()`

**Description:** Adds a specified number of days to a date.

**Syntax:**

```sql
ADDDATE(date, INTERVAL value unit)
```

**Example:**

```sql
SELECT ADDDATE('2023-01-01', INTERVAL 10 DAY) AS Result;
```

**Output:**

```
Result
--------
2023-01-11
```

### 2. `ADDTIME()`

**Description:** Adds a specified time interval to a time/datetime.

**Syntax:**

```sql
ADDTIME(time, time_interval)
```

**Example:**

```sql
SELECT ADDTIME('10:00:00', '02:30:00') AS Result;
```

**Output:**

```
Result
--------
12:30:00
```

### 3. `CURDATE()`

**Description:** Returns the current date.

**Syntax:**

```sql
CURDATE()
```

**Example:**

```sql
SELECT CURDATE() AS Result;
```

**Output:**

```
Result
--------
2024-06-02
```

### 4. `CURRENT_DATE()`

**Description:** Returns the current date (alias for `CURDATE()`).

**Syntax:**

```sql
CURRENT_DATE()
```

**Example:**

```sql
SELECT CURRENT_DATE() AS Result;
```

**Output:**

```
Result
--------
2024-06-02
```

### 5. `CURTIME()`

**Description:** Returns the current time.

**Syntax:**

```sql
CURTIME()
```

**Example:**

```sql
SELECT CURTIME() AS Result;
```

**Output:**

```
Result
--------
12:34:56
```

### 6. `CURRENT_TIME()`

**Description:** Returns the current time (alias for `CURTIME()`).

**Syntax:**

```sql
CURRENT_TIME()
```

**Example:**

```sql
SELECT CURRENT_TIME() AS Result;
```

**Output:**

```
Result
--------
12:34:56
```

### 7. `CURRENT_TIMESTAMP()`

**Description:** Returns the current date and time.

**Syntax:**

```sql
CURRENT_TIMESTAMP()
```

**Example:**

```sql
SELECT CURRENT_TIMESTAMP() AS Result;
```

**Output:**

```
Result
--------
2024-06-02 12:34:56
```

### 8. `DATE()`

**Description:** Extracts the date part of a date or datetime expression.

**Syntax:**

```sql
DATE(expression)
```

**Example:**

```sql
SELECT DATE('2024-06-02 12:34:56') AS Result;
```

**Output:**

```
Result
--------
2024-06-02
```

### 9. `DATEDIFF()`

**Description:** Returns the number of days between two dates.

**Syntax:**

```sql
DATEDIFF(date1, date2)
```

**Example:**

```sql
SELECT DATEDIFF('2024-06-10', '2024-06-02') AS Result;
```

**Output:**

```
Result
--------
8
```

### 10. `DATE_ADD()`

**Description:** Adds a specified time interval to a date.

**Syntax:**

```sql
DATE_ADD(date, INTERVAL value unit)
```

**Example:**

```sql
SELECT DATE_ADD('2024-06-02', INTERVAL 1 MONTH) AS Result;
```

**Output:**

```
Result
--------
2024-07-02
```

### 11. `DATE_FORMAT()`

**Description:** Formats a date according to a specified format.

**Syntax:**

```sql
DATE_FORMAT(date, format)
```

**Example:**

```sql
SELECT DATE_FORMAT('2024-06-02', '%W, %M %d, %Y') AS Result;
```

**Output:**

```
Result
--------
Sunday, June 02, 2024
```

### 12. `DATE_SUB()`

**Description:** Subtracts a specified time interval from a date.

**Syntax:**

```sql
DATE_SUB(date, INTERVAL value unit)
```

**Example:**

```sql
SELECT DATE_SUB('2024-06-02', INTERVAL 1 MONTH) AS Result;
```

**Output:**

```
Result
--------
2024-05-02
```

### 13. `DAY()`

**Description:** Returns the day of the month for a given date.

**Syntax:**

```sql
DAY(date)
```

**Example:**

```sql
SELECT DAY('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
2
```

### 14. `DAYNAME()`

**Description:** Returns the name of the weekday for a given date.

**Syntax:**

```sql
DAYNAME(date)
```

**Example:**

```sql
SELECT DAYNAME('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
Sunday
```

### 15. `DAYOFMONTH()`

**Description:** Returns the day of the month for a given date.

**Syntax:**

```sql
DAYOFMONTH(date)
```

**Example:**

```sql
SELECT DAYOFMONTH('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
2
```

### 16. `DAYOFWEEK()`

**Description:** Returns the weekday index for a given date (1=Sunday, 2=Monday, ..., 7=Saturday).

**Syntax:**

```sql
DAYOFWEEK(date)
```

**Example:**

```sql
SELECT DAYOFWEEK('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
1
```

### 17. `DAYOFYEAR()`

**Description:** Returns the day of the year for a given date (1 to 366).

**Syntax:**

```sql
DAYOFYEAR(date)
```

**Example:**

```sql
SELECT DAYOFYEAR('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
154
```

### 18. `EXTRACT()`

**Description:** Extracts part of a date.

**Syntax:**

```sql
EXTRACT(unit FROM date)
```

**Example:**

```sql
SELECT EXTRACT(YEAR FROM '2024-06-02') AS Result;
```

**Output:**

```
Result
--------
2024
```

### 19. `FROM_DAYS()`

**Description:** Converts a day number to a date.

**Syntax:**

```sql
FROM_DAYS(day_number)
```

**Example:**

```sql
SELECT FROM_DAYS(738000) AS Result;
```

**Output:**

```
Result
--------
2024-06-01
```

### 20. `HOUR()`

**Description:** Returns the hour for a given time.

**Syntax:**

```sql
HOUR(time)
```

**Example:**

```sql
SELECT HOUR('12:34:56') AS Result;
```

**Output:**

```
Result
--------
12
```

### 21. `LAST_DAY()`

**Description:** Returns the last day of the month for a given date.

**Syntax:**

```sql
LAST_DAY(date)
```

**Example:**

```sql
SELECT LAST_DAY('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
2024-06-30
```

### 22. `LOCALTIME()`

**Description:** Returns the current date and time.

**Syntax:**

```sql
LOCALTIME()
```

**Example:**

```sql
SELECT LOCALTIME() AS Result;
```

**Output:**

```
Result
--------
2024-06-02 12:34:56
```

### 23. `LOCALTIMESTAMP()`

**Description:** Returns the current date and time (alias for `LOCALTIME()`).

**Syntax:**

```sql
LOCALTIMESTAMP()
```

**Example:**

```sql
SELECT LOCALTIMESTAMP() AS Result;
```

**Output:**

```
Result
--------
2024-06-02 12:34:56
```

### 24. `MAKEDATE()`

**Description:** Creates a date from the year and the day of year values.

**Syntax:**

```sql
MAKEDATE(year, dayofyear)
```

**Example:**

```sql
SELECT MAKEDATE(2024, 154) AS Result;
```

**Output:**

```
Result
--------
2024-06-02
```

### 25. `MAKETIME()`

**Description:** Creates a time from the hour, minute, and second values.

**Syntax:**

```sql
MAKETIME(hour, minute, second)
```

**Example:**

```sql
SELECT MAKETIME(12, 34, 56) AS Result;
```

**Output:**

```
Result
--------
12:34:56
```

### 26. `MICROSECOND()`

**Description:** Returns the microseconds for a given time.

**Syntax:**

```sql
MICROSECOND(time)
```

**Example:**

```sql
SELECT MICROSECOND('12:34:56.123456') AS Result;
```

**Output:**

```
Result
--------
123456
```

### 27

. `MINUTE()`
**Description:** Returns the minute for a given time.

**Syntax:**

```sql
MINUTE(time)
```

**Example:**

```sql
SELECT MINUTE('12:34:56') AS Result;
```

**Output:**

```
Result
--------
34
```

### 28. `MONTH()`

**Description:** Returns the month for a given date.

**Syntax:**

```sql
MONTH(date)
```

**Example:**

```sql
SELECT MONTH('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
6
```

### 29. `MONTHNAME()`

**Description:** Returns the name of the month for a given date.

**Syntax:**

```sql
MONTHNAME(date)
```

**Example:**

```sql
SELECT MONTHNAME('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
June
```

### 30. `NOW()`

**Description:** Returns the current date and time.

**Syntax:**

```sql
NOW()
```

**Example:**

```sql
SELECT NOW() AS Result;
```

**Output:**

```
Result
--------
2024-06-02 12:34:56
```

### 31. `PERIOD_ADD()`

**Description:** Adds a specified number of months to a period (in the format YYMM or YYYYMM).

**Syntax:**

```sql
PERIOD_ADD(period, number)
```

**Example:**

```sql
SELECT PERIOD_ADD(202406, 2) AS Result;
```

**Output:**

```
Result
--------
202408
```

### 32. `PERIOD_DIFF()`

**Description:** Returns the number of months between two periods.

**Syntax:**

```sql
PERIOD_DIFF(period1, period2)
```

**Example:**

```sql
SELECT PERIOD_DIFF(202406, 202304) AS Result;
```

**Output:**

```
Result
--------
2
```

### 33. `QUARTER()`

**Description:** Returns the quarter of the year for a given date (1 to 4).

**Syntax:**

```sql
QUARTER(date)
```

**Example:**

```sql
SELECT QUARTER('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
2
```

### 34. `SEC_TO_TIME()`

**Description:** Converts seconds to a time value.

**Syntax:**

```sql
SEC_TO_TIME(seconds)
```

**Example:**

```sql
SELECT SEC_TO_TIME(3661) AS Result;
```

**Output:**

```
Result
--------
01:01:01
```

### 35. `SECOND()`

**Description:** Returns the second for a given time.

**Syntax:**

```sql
SECOND(time)
```

**Example:**

```sql
SELECT SECOND('12:34:56') AS Result;
```

**Output:**

```
Result
--------
56
```

### 36. `STR_TO_DATE()`

**Description:** Converts a string to a date using a specified format.

**Syntax:**

```sql
STR_TO_DATE(string, format)
```

**Example:**

```sql
SELECT STR_TO_DATE('02-June-2024', '%d-%M-%Y') AS Result;
```

**Output:**

```
Result
--------
2024-06-02
```

Here is the information formatted into a table:

| Format | Description                                                                 |
|--------|-----------------------------------------------------------------------------|
| %a     | Abbreviated weekday name (Sun to Sat)                                       |
| %b     | Abbreviated month name (Jan to Dec)                                         |
| %c     | Numeric month name (0 to 12)                                                |
| %D     | Day of the month as a numeric value, followed by suffix (1st, 2nd, 3rd, ...)|
| %d     | Day of the month as a numeric value (01 to 31)                              |
| %e     | Day of the month as a numeric value (0 to 31)                               |
| %f     | Microseconds (000000 to 999999)                                             |
| %H     | Hour (00 to 23)                                                             |
| %h     | Hour (00 to 12)                                                             |
| %I     | Hour (00 to 12)                                                             |
| %i     | Minutes (00 to 59)                                                          |
| %j     | Day of the year (001 to 366)                                                |
| %k     | Hour (0 to 23)                                                              |
| %l     | Hour (1 to 12)                                                              |
| %M     | Month name in full (January to December)                                    |
| %m     | Month name as a numeric value (01 to 12)                                    |
| %p     | AM or PM                                                                    |
| %r     | Time in 12 hour AM or PM format (hh:mm:ss AM/PM)                            |
| %S     | Seconds (00 to 59)                                                          |
| %s     | Seconds (00 to 59)                                                          |
| %T     | Time in 24 hour format (hh:mm:ss)                                           |
| %U     | Week where Sunday is the first day of the week (00 to 53)                   |
| %u     | Week where Monday is the first day of the week (00 to 53)                   |
| %V     | Week where Sunday is the first day of the week (01 to 53). Used with %X     |
| %v     | Week where Monday is the first day of the week (01 to 53). Used with %X     |
| %W     | Weekday name in full (Sunday to Saturday)                                   |
| %w     | Day of the week where Sunday=0 and Saturday=6                               |
| %X     | Year for the week where Sunday is the first day of the week. Used with %V   |
| %x     | Year for the week where Monday is the first day of the week. Used with %V   |
| %Y     | Year as a numeric, 4-digit value                                            |
| %y     | Year as a numeric, 2-digit value                                            |

### 37. `SUBDATE()`

**Description:** Subtracts a specified number of days from a date.

**Syntax:**

```sql
SUBDATE(date, INTERVAL value unit)
```

**Example:**

```sql
SELECT SUBDATE('2024-06-02', INTERVAL 10 DAY) AS Result;
```

**Output:**

```
Result
--------
2024-05-23
```

### 38. `SUBTIME()`

**Description:** Subtracts a specified time interval from a time/datetime.

**Syntax:**

```sql
SUBTIME(time, time_interval)
```

**Example:**

```sql
SELECT SUBTIME('12:34:56', '01:30:00') AS Result;
```

**Output:**

```
Result
--------
11:04:56
```

### 39. `SYSDATE()`

**Description:** Returns the current date and time.

**Syntax:**

```sql
SYSDATE()
```

**Example:**

```sql
SELECT SYSDATE() AS Result;
```

**Output:**

```
Result
--------
2024-06-02 12:34:56
```

### 40. `TIME()`

**Description:** Extracts the time part of a time/datetime expression.

**Syntax:**

```sql
TIME(expression)
```

**Example:**

```sql
SELECT TIME('2024-06-02 12:34:56') AS Result;
```

**Output:**

```
Result
--------
12:34:56
```

### 41. `TIME_FORMAT()`

**Description:** Formats a time according to a specified format.

**Syntax:**

```sql
TIME_FORMAT(time, format)
```

**Example:**

```sql
SELECT TIME_FORMAT('12:34:56', '%h:%i %p') AS Result;
```

**Output:**

```
Result
--------
12:34 PM
```

### 42. `TIME_TO_SEC()`

**Description:** Converts a time value to seconds.

**Syntax:**

```sql
TIME_TO_SEC(time)
```

**Example:**

```sql
SELECT TIME_TO_SEC('01:01:01') AS Result;
```

**Output:**

```
Result
--------
3661
```

### 43. `TIMEDIFF()`

**Description:** Returns the difference between two time/datetime expressions.

**Syntax:**

```sql
TIMEDIFF(time1, time2)
```

**Example:**

```sql
SELECT TIMEDIFF('12:34:56', '11:30:00') AS Result;
```

**Output:**

```
Result
--------
01:04:56
```

### 44. `TIMESTAMP()`

**Description:** Returns a datetime value based on a date or datetime value.

**Syntax:**

```sql
TIMESTAMP(expression)
```

**Example:**

```sql
SELECT TIMESTAMP('2024-06-02 12:34:56') AS Result;
```

**Output:**

```
Result
--------
2024-06-02 12:34:56
```

### 45. `TIMESTAMPADD()`

**Description:** Adds a specified interval to a datetime or timestamp.

**Syntax:**

```sql
TIMESTAMPADD(unit, interval, datetime)
```

**Example:**

```sql
SELECT TIMESTAMPADD(MINUTE, 10, '2024-06-02 12:34:56') AS Result;
```

**Output:**

```
Result
--------
2024-06-02 12:44:56
```

### 46. `TIMESTAMPDIFF()`

**Description:** Returns the difference between two datetime expressions in a specified unit.

**Syntax:**

```sql
TIMESTAMPDIFF(unit, datetime1, datetime2)
```

**Example:**

```sql
SELECT TIMESTAMPDIFF(MINUTE, '2024-06-02 12:34:56', '2024-06-02 12:44:56') AS Result;
```

**Output:**

```
Result
--------
10
```

### 47. `TO_DAYS()`

**Description:** Returns the number of days since year 0.

**Syntax:**

```sql
TO_DAYS(date)
```

**Example:**

```sql
SELECT TO_DAYS('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
738000
```

### 48. `UNIX_TIMESTAMP()`

**Description:** Returns the Unix timestamp.

**Syntax:**

```sql
UNIX_TIMESTAMP(date)
```

**Example:**

```sql
SELECT UNIX_TIMESTAMP('2024-06-02 12:34:56') AS Result;
```

**Output:**

```
Result
--------
1717320896
```

### 49. `UTC_DATE()`

**Description:** Returns the current UTC date.

**Syntax:**

```sql
UTC_DATE()
```

**Example:**

```sql
SELECT UTC_DATE() AS Result;
```

**Output:**

```
Result
--------
2024-06-02
```

### 50. `UTC_TIME()`

**Description:** Returns the current UTC time.

**Syntax:**

```sql
UTC_TIME()
```

**Example:**

```sql
SELECT UTC_TIME() AS Result;
```

**Output:**

```
Result
--------
12:34:56
```

### 51. `UTC_TIMESTAMP()`

**Description:** Returns the current UTC date and time.

**Syntax:**

```sql
UTC_TIMESTAMP()
```

**Example:**

```sql
SELECT UTC_TIMESTAMP() AS Result;
```

**Output:**

```
Result
--------
2024-06-02 12:34:56
```

### 52. `WEEK()`

**Description:** Returns the week number for a given date (0 to 53).

**Syntax:**

```sql
WEEK(date)
```

**Example:**

```sql
SELECT WEEK('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
22
```

### 53. `WEEKDAY()`

**Description:** Returns the weekday

 index for a given date (0=Monday, 1=Tuesday, ..., 6=Sunday).

**Syntax:**

```sql
WEEKDAY(date)
```

**Example:**

```sql
SELECT WEEKDAY('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
6
```

### 54. `WEEKOFYEAR()`

**Description:** Returns the week number for a given date (1 to 53).

**Syntax:**

```sql
WEEKOFYEAR(date)
```

**Example:**

```sql
SELECT WEEKOFYEAR('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
23
```

### 55. `YEAR()`

**Description:** Returns the year for a given date.

**Syntax:**

```sql
YEAR(date)
```

**Example:**

```sql
SELECT YEAR('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
2024
```

### 56. `YEARWEEK()`

**Description:** Returns the year and week number for a given date.

**Syntax:**

```sql
YEARWEEK(date)
```

**Example:**

```sql
SELECT YEARWEEK('2024-06-02') AS Result;
```

**Output:**

```
Result
--------
202423
```

These date functions provide a wide range of capabilities for handling and manipulating date and time values in MySQL. If you need further details or examples, feel free to ask!
