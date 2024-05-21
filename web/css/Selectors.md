
### Syntax

```css
[attribute] {
    /* Styles applied to elements with the specified attribute */
}

[attribute="value"] {
    /* Styles applied to elements with the specified attribute value */
}

[attribute~="value"] {
    /* Styles applied to elements where the attribute value contains the specified word */
}

[attribute^="value"] {
    /* Styles applied to elements where the attribute value starts with the specified value */
}

[attribute$="value"] {
    /* Styles applied to elements where the attribute value ends with the specified value */
}

[attribute*="value"] {
    /* Styles applied to elements where the attribute value contains the specified value anywhere */
}
```

### Explanation

1. **`[attribute]`**: Selects elements with a specific attribute regardless of its value.

2. **`[attribute="value"]`**: Selects elements with a specific attribute value.

3. **`[attribute~="value"]`**: Selects elements where the attribute value contains the specified word as a whole word.

4. **`[attribute^="value"]`**: Selects elements where the attribute value starts with the specified value.

5. **`[attribute$="value"]`**: Selects elements where the attribute value ends with the specified value.

6. **`[attribute*="value"]`**: Selects elements where the attribute value contains the specified value anywhere.

### Examples

1. Select elements with a specific attribute:

```css
[disabled] {
    opacity: 0.5;
}
```

1. Select elements with a specific attribute value:

```css
[type="checkbox"] {
    border: 1px solid black;
}
```

1. Select elements with an attribute containing a specific word:

```css
[class~="important"] {
    color: red;
}
```

1. Select elements with an attribute value starting with a specific value:

```css
[href^="https"] {
    color: blue;
}
```

1. Select elements with an attribute value ending with a specific value:

```css
[src$=".png"] {
    border: 1px solid black;
}
```

1. Select elements with an attribute value containing a specific value anywhere:

```css
[href*="example"] {
    font-weight: bold;
}
```

### Documentation

- MDN Web Docs: [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- CSS Tricks: [Attribute Selectors](https://css-tricks.com/almanac/selectors/a/attribute/)
- W3C Specification: [Selectors Level 3 - Attribute selectors](https://www.w3.org/TR/selectors-3/#attribute-selectors)
