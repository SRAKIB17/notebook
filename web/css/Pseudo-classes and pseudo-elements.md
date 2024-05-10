
---

## Pseudo-classes

Pseudo-classes are keywords added to selectors that specify a special state of the selected elements. They allow you to style elements based on user interaction, structural position, or other criteria.

### Common Pseudo-classes:

#### 1. `:hover`

- Description: Styles an element when the user hovers over it.
- Example:
  
  ```css
  button:hover {
      background-color: lightblue;
  }
  ```

#### 2. `:active`

- Description: Styles an element when it is being activated by the user.
- Example:
  
  ```css
  button:active {
      transform: translateY(2px);
  }
  ```

#### 3. `:focus`

- Description: Styles an element when it gains focus.
- Example:

  ```css
  input:focus {
      border-color: blue;
      box-shadow: 0 0 5px blue;
  }
  ```

#### 4. `:visited`

- Description: Styles a link that has been visited.
- Example:
 
  ```css
  a:visited {
      color: gray;
  }
  ```

#### 5. `:first-child`

- Description: Styles an element that is the first child of its parent.
- Example:
  
  ```css
  li:first-child {
      font-weight: bold;
  }
  ```

#### 6. `:last-child`

- Description: Styles an element that is the last child of its parent.
- Example:
  
  ```css
  li:last-child {
      color: red;
  }
  ```

#### 7. `:nth-child()`

- Description: Styles elements based on their position within a parent element.
- Example:

  ```css
  tr:nth-child(2n) {
      background-color: lightgray;
  }
  ```

#### 8. `:nth-of-type()`

- Description: Styles elements based on their position within a parent element, counting only elements of the same type.
- Example:
  
  ```css
  div:nth-of-type(odd) {
      background-color: lightblue;
  }
  ```

---

## Pseudo-elements

Pseudo-elements create virtual elements that do not exist in the HTML document tree, allowing you to style specific parts of elements.

### Common Pseudo-elements:

#### 1. `::before`

- Description: Inserts content before the content of the selected element.
- Example:
  
  ```css
  p::before {
      content: ">> ";
  }
  ```

#### 2. `::after`

- Description: Inserts content after the content of the selected element.
- Example:
  
  ```css
  button::after {
      content: " (click me)";
  }
  ```

#### 3. `::first-line`

- Description: Styles the first line of text within the selected element.
- Example:
 
  ```css
  p::first-line {
      font-weight: bold;
  }
  ```

#### 4. `::first-letter`

- Description: Styles the first letter of text within the selected element.
- Example:
 
  ```css
  p::first-letter {
      font-size: 150%;
      color: blue;
  }
  ```

#### 5. `::selection`

- Description: Styles the portion of a document that has been highlighted by the user.
- Example:
 
  ```css
  ::selection {
      background-color: yellow;
      color: black;
  }
  ```

---

### Resources:

- **MDN Web Docs**: [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) and [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- **CSS Tricks**: [Pseudo-classes and Pseudo-elements](https://css-tricks.com/almanac/selectors/p/)
- **W3C Specification**: [Selectors Level 3 - Pseudo-classes and pseudo-elements](https://www.w3.org/TR/selectors-3/#pseudo-classes)
