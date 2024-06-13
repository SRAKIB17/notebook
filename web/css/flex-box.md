### Display and Flexbox

#### Display Property

The `display` property specifies the display behavior (the type of rendering box) of an element.

#### Common Values

- **`block`**: The element is displayed as a block element (e.g., `<div>`, `<p>`).
- **`inline`**: The element is displayed as an inline element (e.g., `<span>`, `<a>`).
- **`inline-block`**: The element is displayed as an inline-level block container.
- **`flex`**: The element becomes a flex container, enabling the use of flexbox properties on its children.
- **`inline-flex`**: The element becomes an inline-level flex container.
- **`grid`**: The element becomes a grid container, enabling the use of grid layout properties on its children.
- **`none`**: The element is not displayed.

#### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Property Example</title>
    <style>
        .block-element {
            display: block;
            background-color: #d3d3d3;
            padding: 10px;
            margin: 5px 0;
        }

        .inline-element {
            display: inline;
            background-color: #add8e6;
            padding: 5px;
            margin: 5px;
        }

        .inline-block-element {
            display: inline-block;
            background-color: #90ee90;
            padding: 10px;
            margin: 5px;
        }

        .flex-container {
            display: flex;
            background-color: #f0e68c;
            padding: 10px;
        }

        .inline-flex-container {
            display: inline-flex;
            background-color: #dda0dd;
            padding: 10px;
        }

        .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            background-color: #ffe4b5;
            padding: 10px;
        }

        .grid-item {
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div class="block-element">Block Element</div>
    <span class="inline-element">Inline Element</span>
    <span class="inline-element">Another Inline Element</span>
    <div class="inline-block-element">Inline-Block Element</div>
    <div class="flex-container">
        <div>Flex Item 1</div>
        <div>Flex Item 2</div>
        <div>Flex Item 3</div>
    </div>
    <div class="inline-flex-container">
        <div>Inline-Flex Item 1</div>
        <div>Inline-Flex Item 2</div>
        <div>Inline-Flex Item 3</div>
    </div>
    <div class="grid-container">
        <div class="grid-item">Grid Item 1</div>
        <div class="grid-item">Grid Item 2</div>
        <div class="grid-item">Grid Item 3</div>
    </div>
</body>
</html>
```

### Flexbox

The `flexbox` layout model allows you to design a flexible and efficient layout structure without using float or positioning.

#### Flex Container Properties

1. **`display: flex;`**: Defines a flex container.
2. **`flex-direction`**: Defines the direction of the flex items.
    - `row` (default): left to right.
    - `row-reverse`: right to left.
    - `column`: top to bottom.
    - `column-reverse`: bottom to top.
3. **`flex-wrap`**: Defines whether the flex items should wrap or not.
    - `nowrap` (default): single line.
    - `wrap`: multiple lines.
    - `wrap-reverse`: reverse multiple lines.
4. **`flex-flow`**: Shorthand for `flex-direction` and `flex-wrap`.
5. **`justify-content`**: Defines the alignment along the main axis.
    - `flex-start` (default): items are packed toward the start.
    - `flex-end`: items are packed toward the end.
    - `center`: items are centered.
    - `space-between`: items are evenly distributed; first item is at the start, last item is at the end.
    - `space-around`: items are evenly distributed with equal space around them.
    - `space-evenly`: items are distributed so that the spacing between any two items (and the space to the edges) is equal.
6. **`align-items`**: Defines the default behavior for how flex items are laid out along the cross axis.
    - `stretch` (default): stretch to fill the container.
    - `flex-start`: cross-start margin edge of the items is placed on the cross-start line.
    - `flex-end`: cross-end margin edge of the items is placed on the cross-end line.
    - `center`: items are centered in the cross-axis.
    - `baseline`: items are aligned such as their baselines align.
7. **`align-content`**: Defines how the space between lines is distributed.
    - `stretch` (default): lines stretch to take up the remaining space.
    - `flex-start`: packed to the start of the container.
    - `flex-end`: packed to the end of the container.
    - `center`: lines are centered.
    - `space-between`: lines evenly distributed; first line at the start, last line at the end.
    - `space-around`: lines evenly distributed with equal space around them.
    - `space-evenly`: lines are evenly distributed.

#### Flex Item Properties

1. **`order`**: Defines the order of the flex items.
2. **`flex-grow`**: Defines the ability for a flex item to grow if necessary.
3. **`flex-shrink`**: Defines the ability for a flex item to shrink if necessary.
4. **`flex-basis`**: Defines the default size of an element before the remaining space is distributed.
5. **`flex`**: Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
6. **`align-self`**: Overrides the `align-items` value for specific flex items.

#### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <style>
        .flex-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            align-content: space-between;
            height: 300px; /* for visualization */
            border: 2px solid #000; /* for visualization */
        }

        .flex-item {
            background-color: #f2f2f2;
            padding: 20px;
            margin: 10px;
            text-align: center;
            border: 1px solid #ccc;
        }

        .flex-grow {
            flex-grow: 2;
        }

        .flex-shrink {
            flex-shrink: 2;
        }

        .flex-basis {
            flex-basis: 200px;
        }

        .order {
            order: 1;
        }

        .align-self {
            align-self: flex-end;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item flex-grow">Item 2 (Grow)</div>
        <div class="flex-item flex-shrink">Item 3 (Shrink)</div>
        <div class="flex-item flex-basis">Item 4 (Basis)</div>
        <div class="flex-item order">Item 5 (Order)</div>
        <div class="flex-item align-self">Item 6 (Align Self)</div>
    </div>
</body>
</html>
```

In this example, the `flex-container` is configured to demonstrate various flexbox properties. Adjust the properties and observe the changes to understand how flexbox works.

#### Detailed Explanation

- **Flex Container**: The parent element with `display: flex;` becomes a flex container. This enables flex properties for its children (flex items).
- **Flex Direction**: The `flex-direction` property defines the direction in which the flex items are placed in the flex container. It can be set to `row`, `row-reverse`, `column`, or `column-reverse`.
- **Flex Wrap**: The `flex-wrap` property specifies whether the flex items should wrap onto multiple lines. It can be set to `nowrap`, `wrap`, or `wrap-reverse`.
- **Justify Content**: The `justify-content` property aligns the flex items along the main axis (horizontal by default). It can be set to `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, or `space-evenly`.
- **Align Items**: The `align-items` property aligns the flex items along the cross axis (vertical by default). It can be set to `stretch`, `flex-start`, `flex-end`, `center`, or `baseline`.
- **Align Content**: The `align-content` property aligns the flex lines

 when there is extra space in the cross axis. It can be set to `stretch`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, or `space-evenly`.

- **Order**: The `order` property defines the order in which the flex items appear within the flex container.
- **Flex Grow**: The `flex-grow` property specifies how much a flex item will grow relative to the rest of the flex items.
- **Flex Shrink**: The `flex-shrink` property specifies how much a flex item will shrink relative to the rest of the flex items.
- **Flex Basis**: The `flex-basis` property defines the default size of a flex item before the remaining space is distributed.
- **Align Self**: The `align-self` property overrides the `align-items` property for a specific flex item.
