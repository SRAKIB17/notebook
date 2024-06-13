
### Margin

#### Syntax

- `margin: top right bottom left;`
- `margin: top right+left bottom;`
- `margin: top+bottom right+left;`
- `margin: all-side;`
- `margin: auto;`

**Note:** আপনি `auto` এর কন্টেইনারের মধ্যে উপাদানটিকে অনুভূমিকভাবে কেন্দ্রে মার্জিন সম্পত্তি সেট করতে পারেন। উপাদানটি তারপর নির্দিষ্ট প্রস্থ গ্রহণ করবে এবং অবশিষ্ট স্থানটি বাম এবং ডান মার্জিনের মধ্যে সমানভাবে বিভক্ত হবে।

#### Individual Properties

- `margin-top: ;`
- `margin-right: ;`
- `margin-bottom: ;`
- `margin-left: ;`

#### Example

```css
.element {
    margin: 10px 20px 30px 40px; /* top right bottom left */
}

.center-element {
    margin: 0 auto; /* Horizontally center the element */
}
```

### Padding

#### Syntax

- `padding: top right bottom left;`
- `padding: top right+left bottom;`
- `padding: top+bottom right+left;`
- `padding: all-side;`

#### Individual Properties

- `padding-top: 50px;`
- `padding-right: 30px;`
- `padding-bottom: 50px;`
- `padding-left: 80px;`

#### Example

```css
.element {
    padding: 10px 20px 30px 40px; /* top right bottom left */
}

.padding-example {
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
}
```

### Border

#### Syntax

- `border: border-width border-style (required) border-color;`

#### Border Style

- `dotted`: একটি বিন্দুযুক্ত রূপরেখা সংজ্ঞায়িত করে
- `dashed`: একটি ড্যাশ করা রূপরেখা সংজ্ঞায়িত করে
- `solid`: একটি কঠিন রূপরেখা সংজ্ঞায়িত করে
- `double`: একটি ডবল রূপরেখা সংজ্ঞায়িত করে
- `groove`: একটি 3D খাঁজকাটা রূপরেখা সংজ্ঞায়িত করে
- `ridge`: একটি 3D রিজড আউটলাইন সংজ্ঞায়িত করে
- `inset`: একটি 3D ইনসেট রূপরেখা সংজ্ঞায়িত করে
- `outset`: একটি 3D আউটসেট রূপরেখা সংজ্ঞায়িত করে
- `none`: কোন রূপরেখা সংজ্ঞায়িত করে না
- `hidden`: একটি লুকানো রূপরেখা সংজ্ঞায়িত করে

#### Border Properties

- `border-top-style: ;`
- `border-right-style: ;`
- `border-bottom-style: ;`
- `border-left-style: ;`
- `border-width: medium / thin / thick;`
- `border-color: value;`
- `border-radius: value;`

#### Example

```css
.element {
    border: 2px solid #000; /* width style color */
    border-top-style: dotted;
}

.mixed-border {
    border-style: dotted dashed solid double; /* top right bottom left */
    border-width: thin medium thick; /* top right+left bottom */
    border-color: red green blue; /* top right+left bottom */
}
```

### Outline

#### Syntax

- `outline: outline-width outline-style (required) outline-color;`

#### Outline Style

- `dotted`: একটি বিন্দুযুক্ত রূপরেখা সংজ্ঞায়িত করে
- `dashed`: একটি ড্যাশ করা রূপরেখা সংজ্ঞায়িত করে
- `solid`: একটি কঠিন রূপরেখা সংজ্ঞায়িত করে
- `double`: একটি ডবল রূপরেখা সংজ্ঞায়িত করে
- `groove`: একটি 3D খাঁজকাটা রূপরেখা সংজ্ঞায়িত করে
- `ridge`: একটি 3D রিজড আউটলাইন সংজ্ঞায়িত করে
- `inset`: একটি 3D ইনসেট রূপরেখা সংজ্ঞায়িত করে
- `outset`: একটি 3D আউটসেট রূপরেখা সংজ্ঞায়িত করে
- `none`: কোন রূপরেখা সংজ্ঞায়িত করে না
- `hidden`: একটি লুকানো রূপরেখা সংজ্ঞায়িত করে

#### Outline Properties

- `outline-color: value;`
- `outline-width: value;`
- `outline-offset: value;`

#### Example

```css
.element {
    outline: 2px solid #000; /* width style color */
    outline-offset: 5px;
}
```

### Box Model

#### Description

CSS বক্স মডেলটি মূলত একটি বক্স যা প্রতিটি HTML উপাদানের চারপাশে মোড়ানো থাকে। এতে রয়েছে: মার্জিন, সীমানা, প্যাডিং এবং প্রকৃত বিষয়বস্তু। নীচের চিত্রটি বক্স মডেলকে চিত্রিত করে:

- **Content**: বাক্সের বিষয়বস্তু, যেখানে টেক্সট এবং ছবি প্রদর্শিত হয়
- **Padding**: বিষয়বস্তুর চারপাশে একটি এলাকা সাফ করে। প্যাডিং স্বচ্ছ
- **Border**: একটি সীমানা যা প্যাডিং এবং বিষয়বস্তুর চারপাশে যায়
- **Margin**: সীমান্তের বাইরে একটি এলাকা সাফ করে। মার্জিন স্বচ্ছ

#### Calculation

- Total Element Width = Width + Left Padding + Right Padding + Left Border + Right Border + Left Margin + Right Margin
- Total Element Height = Height + Top Padding + Bottom Padding + Top Border + Bottom Border + Top Margin + Bottom Margin

#### Example

```css
.element {
    width: 320px;
    padding: 10px 20px; /* top+bottom right+left */
    border: 5px solid #000;
    margin: 10px 0; /* top+bottom left+right */
}
```

### Box Shadow

#### Syntax

- `box-shadow: none | h-offset v-offset blur spread color inset (ভিতরে দিক);`

#### Properties

- `none`: Default value. No shadow is displayed
- `h-offset`: Required. ছায়ার অনুভূমিক অফসেট। Positive মান ডান দিকে ছায়া রাখে, Negative মান বাম দিকে ছায়া রাখে
- `v-offset`: Required. ছায়ার উল্লম্ব অফসেট। Positive মান নীচে ছায়া রাখে, Negative মান উপরে ছায়া রাখে
- `blur`: Optional. The blur radius. সংখ্যা যত বেশি হবে, ছায়া তত বেশি ঝাপসা হবে
- `spread`: Optional. The spread radius. Positive মান ছায়ার আকার বাড়ায়, Negative মান ছায়ার আকার হ্রাস করে
- `color`: Optional. The color of the shadow
- `inset`: Optional. ছায়াটিকে বাইরে থেকে ভিতরে পরিবর্তন করে

#### Example

```css
.element {
    box-shadow: 10px 5px 5px #888; /* h-offset v-offset blur color */
}
```
