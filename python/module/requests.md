
---

## Requests Module

The `requests` module is a powerful Python library for making HTTP requests. It provides a simple yet powerful API for interacting with web services and APIs.

### Installation

You can install the `requests` module via pip:

```bash
pip install requests
```

### HTTP Methods

#### `requests.get(url, params=None, headers=None, cookies=None, auth=None, timeout=None) -> Response`

- **Description:** Sends a GET request to the specified URL.
- **Parameters:**
  - `url`: The URL to send the request to.
  - `params` (optional): Dictionary or bytes to be sent in the query string.
  - `headers` (optional): Dictionary of HTTP headers to send with the request.
  - `cookies` (optional): Dict or CookieJar object to send with the request.
  - `auth` (optional): Auth handler or tuple of username and password.
  - `timeout` (optional): Timeout for the request.
- **Returns:** A `Response` object.

#### `requests.post(url, data=None, json=None, headers=None, cookies=None, auth=None, timeout=None) -> Response`

- **Description:** Sends a POST request to the specified URL.
- **Parameters:**
  - `url`: The URL to send the request to.
  - `data` (optional): Dictionary or bytes to send in the body of the request.
  - `json` (optional): JSON data to send in the body of the request.
  - `headers` (optional): Dictionary of HTTP headers to send with the request.
  - `cookies` (optional): Dict or CookieJar object to send with the request.
  - `auth` (optional): Auth handler or tuple of username and password.
  - `timeout` (optional): Timeout for the request.
- **Returns:** A `Response` object.

#### `requests.put(url, data=None, json=None, headers=None, cookies=None, auth=None, timeout=None) -> Response`

- **Description:** Sends a PUT request to the specified URL.
- **Parameters:** Same as `requests.post`.
- **Returns:** A `Response` object.

#### `requests.delete(url, headers=None, cookies=None, auth=None, timeout=None) -> Response`

- **Description:** Sends a DELETE request to the specified URL.
- **Parameters:**
  - `url`: The URL to send the request to.
  - `headers` (optional): Dictionary of HTTP headers to send with the request.
  - `cookies` (optional): Dict or CookieJar object to send with the request.
  - `auth` (optional): Auth handler or tuple of username and password.
  - `timeout` (optional): Timeout for the request.
- **Returns:** A `Response` object.

#### `requests.patch(url, data=None, json=None, headers=None, cookies=None, auth=None, timeout=None) -> Response`

- **Description:** Sends a PATCH request to the specified URL.
- **Parameters:** Same as `requests.post`.
- **Returns:** A `Response` object.

### Response Object

The `Response` object represents the HTTP response from the server.

#### Attributes

- `status_code`: HTTP status code of the response.
- `text`: Content of the response, in Unicode.
- `json()`: Returns the JSON content of the response.
- `headers`: Dictionary of response headers.

### Example Usage

```python
import requests

# GET Request
response = requests.get('https://api.example.com/data')
print(response.text)

# POST Request with JSON data
data = {'key': 'value'}
response = requests.post('https://api.example.com/post', json=data)
print(response.json())

# PUT Request
response = requests.put('https://api.example.com/put', data={'key': 'value'})

# DELETE Request
response = requests.delete('https://api.example.com/delete')
```

Refer to the official documentation: [Requests: HTTP for Humans™](https://docs.python-requests.org/en/latest/).
