`import` হল JavaScript-এর একটি কীওয়ার্ড যা ES6 (ECMAScript 2015) থেকে চালু করা হয়েছে এবং এটি ES6 মডিউল সিস্টেমের অংশ। `import` নির্দেশটি ব্যবহার করে আপনি অন্য ফাইল থেকে এক্সপোর্ট করা ভেরিয়েবল, ফাংশন, ক্লাস, অবজেক্ট বা কোনো নির্দিষ্ট কিছু অংশকে আপনার বর্তমান ফাইলে অন্তর্ভুক্ত করতে পারেন। এটি `require` এর একটি আধুনিক বিকল্প এবং এটি সাধারণত নতুন জাভাস্ক্রিপ্ট প্রোজেক্টগুলোতে ব্যবহার করা হয়।

### `import` এর ব্যবহারের বিস্তারিত

#### ১. Named Imports

যখন আপনি একটি মডিউল থেকে একটি নির্দিষ্ট এক্সপোর্ট করা অংশ ইম্পোর্ট করতে চান, তখন Named Import ব্যবহার করতে পারেন। মডিউলের নাম এবং যে অংশগুলো ইম্পোর্ট করতে চান সেগুলোকে `{}` ব্রেসেসের মধ্যে উল্লেখ করতে হয়।

**math.js ফাইল:**

```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

**app.js ফাইল:**

```javascript
import { add, subtract } from './math';

console.log(add(5, 3));       // Output: 8
console.log(subtract(5, 3));  // Output: 2
```

#### ২. Default Imports

যদি কোনো মডিউল থেকে শুধুমাত্র একটি অংশ ডিফল্টভাবে এক্সপোর্ট করা হয়, তাহলে আপনি ডিফল্ট ইম্পোর্ট ব্যবহার করতে পারেন। ডিফল্ট ইম্পোর্টের জন্য `{}` ব্রেসেস ব্যবহার করতে হয় না।

**math.js ফাইল:**

```javascript
export default function multiply(a, b) {
  return a * b;
}
```

**app.js ফাইল:**

```javascript
import multiply from './math';

console.log(multiply(5, 3));  // Output: 15
```

#### ৩. Named এবং Default Import একসাথে ব্যবহার

আপনি Named এবং Default Import একসাথে ব্যবহার করতে পারেন।

**math.js ফাইল:**

```javascript
export default function multiply(a, b) {
  return a * b;
}

export function add(a, b) {
  return a + b;
}
```

**app.js ফাইল:**

```javascript
import multiply, { add } from './math';

console.log(multiply(5, 3));  // Output: 15
console.log(add(5, 3));       // Output: 8
```

#### ৪. Import সবকিছু (Import All)

আপনি একটি মডিউল থেকে সবকিছু ইম্পোর্ট করতে চাইলে `*` ব্যবহার করতে পারেন এবং একটি alias (উপনাম) দিতে পারেন।

**math.js ফাইল:**

```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
```

**app.js ফাইল:**

```javascript
import * as math from './math';

console.log(math.add(5, 3));        // Output: 8
console.log(math.subtract(5, 3));   // Output: 2
console.log(math.default(5, 3));    // Output: 15
```

#### ৫. Import এর অন্যান্য বৈশিষ্ট্য

- **Dynamic Import:**
  - আপনি যখন কোডের একটি নির্দিষ্ট অংশে ইম্পোর্ট করতে চান (যেমন কোনো ইভেন্টের পরে), তখন Dynamic Import ব্যবহার করতে পারেন। এটি একটি প্রমিস ফেরত দেয়।

  ```javascript
  import('./math').then(math => {
    console.log(math.add(5, 3)); // Output: 8
  });
  ```

- **Alias ব্যবহার:**
  - Named Import এর ক্ষেত্রে, আপনি ইম্পোর্ট করা অংশের জন্য একটি আলাদা নাম (alias) ব্যবহার করতে পারেন।

  ```javascript
  import { add as sum } from './math';

  console.log(sum(5, 3)); // Output: 8
  ```
