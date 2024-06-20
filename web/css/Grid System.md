# CSS Grid Layout Documentation

CSS Grid Layout is a powerful layout system available in CSS. It allows you to create complex layouts on the web efficiently. This comprehensive guide will cover everything from the basics to advanced concepts with practical examples.

## Table of Contents

1. [Basic Concepts](#basic-concepts)
2. [Grid Container](#grid-container)
3. [Grid Items](#grid-items)
4. [Grid Lines](#grid-lines)
5. [Advanced Features](#advanced-features)
6. [Complete Examples](#complete-examples)

## Basic Concepts

CSS Grid Layout introduces a new layout system with rows and columns. Here are the fundamental concepts:

- **Grid Container**: The element on which `display: grid` is applied. It contains grid items.
- **Grid Item**: The direct children of the grid container.
- **Grid Line**: The lines dividing the grid, which can be referred to by number or name.
- **Grid Cell**: The space between four grid lines. It's a single "unit" of the grid.
- **Grid Track**: The space between two adjacent grid lines. You can think of it as the rows or columns in the grid.
- **Grid Area**: The total space surrounded by four grid lines. A grid area can contain any number of grid cells.

## Grid Container

To create a grid layout, you need to define a grid container by setting the `display` property to `grid` or `inline-grid`.

```css
.container {
  display: grid;
}
```

### Defining Columns and Rows

You can define the number of columns and rows using the `grid-template-columns` and `grid-template-rows` properties.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px 100px;
}
```

This will create a grid with three columns and two rows.

### Gap

The `gap` property is used to specify the gap between rows and columns.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px 100px;
  gap: 10px;
}
```

## Grid Items

Grid items are the children of the grid container. They can be positioned within the grid using line numbers.

### Placing Items

You can place items using the `grid-column` and `grid-row` properties.

```css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

This will place the item from column line 1 to column line 3 and row line 1 to row line 2.

### Naming Lines

You can name lines to make placement more readable.

```css
.container {
  display: grid;
  grid-template-columns: [start] 100px [middle] 200px [end] 100px;
  grid-template-rows: [top] 50px [bottom] 100px;
}
.item1 {
  grid-column: start / middle;
  grid-row: top / bottom;
}
```

## Grid Lines

Grid lines can be referred to by number or by name.

### Spanning

You can span items across multiple lines.

```css
.item2 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

This will make the item span across 2 columns and 2 rows.

## Advanced Features

### Auto-Fill and Auto-Fit

You can create responsive grids with `auto-fill` and `auto-fit`.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}
```

### Grid Areas

You can define areas and place items in those areas.

```css
.container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

### Justify and Align

You can control the alignment of items with `justify-items`, `align-items`, `justify-content`, and `align-content`.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px 100px;
  justify-items: center;
  align-items: center;
}
```

## Complete Examples

### Basic Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: grid;
      grid-template-columns: 100px 200px 100px;
      grid-template-rows: 50px 100px;
      gap: 10px;
    }
    .item1 { background: lightcoral; }
    .item2 { background: lightblue; }
    .item3 { background: lightgreen; }
    .item4 { background: lightgoldenrodyellow; }
  </style>
  <title>Basic Grid Example</title>
</head>
<body>
  <div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
  </div>
</body>
</html>
```

### Responsive Example with Auto-Fill

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 10px;
    }
    .item { background: lightcoral; }
  </style>
  <title>Responsive Grid Example</title>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
  </div>
</body>
</html>
```

### Advanced Grid Areas Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: grid;
      grid-template-areas: 
        "header header header"
        "sidebar content content"
        "footer footer footer";
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-rows: auto;
      gap: 10px;
    }
    .header { grid-area: header; background: lightcoral; }
    .sidebar { grid-area: sidebar; background: lightblue; }
    .content { grid-area: content; background: lightgreen; }
    .footer { grid-area: footer; background: lightgoldenrodyellow; }
  </style>
  <title>Advanced Grid Example</title>
</head>
<body>
  <div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
    <div class="footer">Footer</div>
  </div>
</body>
</html>
```

### Complex Responsive Grid Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-template-rows: auto;
      gap: 20px;
    }
    .header {
      grid-column: span 3;
      background: lightcoral;
    }
    .sidebar {
      grid-column: span 1;
      background: lightblue;
    }
    .content {
      grid-column: span 2;
      background: lightgreen;
    }
    .footer {
      grid-column: span 3;
      background: lightgoldenrodyellow;
    }
    @media (max-width: 600px) {
      .container {
        grid-template-columns: 1fr;
      }
      .header, .sidebar, .content, .footer {
        grid-column: span 1;
      }
    }
  </style>
  <title>Complex Responsive Grid Example</title>
</head>
<body>
  <div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
    <div class="footer">Footer</div>
  </div>
</body>
</html>
```
