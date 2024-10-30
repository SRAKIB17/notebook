**Type Annotations** TypeScript-এ ম্যানুয়ালি টাইপ নির্ধারণ করার একটি উপায়। যখন আমরা TypeScript-এ কোনো ভেরিয়েবল, ফাংশন, বা এক্সপ্রেশনের টাইপ স্পষ্টভাবে উল্লেখ করি, তখন তাকে **Type Annotation** বলা হয়। এটি টাইপ ইনফারেন্সের বিপরীতে ব্যবহৃত হয়, যেখানে TypeScript স্বয়ংক্রিয়ভাবে টাইপ অনুমান করে। টাইপ অ্যানোটেশন ব্যবহার করলে TypeScript কোডের ধরন স্পষ্টভাবে নির্ধারণ করতে পারে এবং টাইপ সম্পর্কিত ত্রুটিগুলো ধরতে পারে।

### **Type Annotations কিভাবে কাজ করে?**

Type Annotation করার জন্য ভেরিয়েবল বা ফাংশনের নামের পাশে `:` (কোলন) ব্যবহার করে টাইপ নির্ধারণ করা হয়।

### **1. Variable Type Annotations (ভেরিয়েবলের টাইপ নির্ধারণ):**

ভেরিয়েবলের জন্য টাইপ নির্ধারণ করতে আমরা টাইপ অ্যানোটেশন ব্যবহার করতে পারি। এর মাধ্যমে নির্দিষ্ট টাইপের ডেটা ভেরিয়েবলে সংরক্ষণ করতে বাধ্য করা হয়।

**উদাহরণ:**

```typescript
let message: string = "Hello, TypeScript!";
let age: number = 30;
let isActive: boolean = true;
```

এখানে, `message` ভেরিয়েবলের জন্য টাইপ `string`, `age` এর জন্য `number`, এবং `isActive` এর জন্য `boolean` নির্ধারণ করা হয়েছে।

#### **Optional Variable Annotations:**

যদি কোনো ভেরিয়েবলে মান প্রাথমিকভাবে নির্ধারণ করা না হয়, তবে শুধু টাইপ অ্যানোটেশন দিয়েও ভেরিয়েবল ডিক্লেয়ার করা যায়।

**উদাহরণ:**

```typescript
let username: string;
username = "JohnDoe"; // এটি শুধুমাত্র স্ট্রিং মান গ্রহণ করতে পারবে
```

### **2. Function Type Annotations (ফাংশনের টাইপ নির্ধারণ):**

ফাংশনের প্যারামিটার এবং রিটার্ন টাইপ নির্ধারণ করতেও টাইপ অ্যানোটেশন ব্যবহার করা হয়। এর মাধ্যমে ফাংশনে পাস করা আর্গুমেন্ট এবং রিটার্নের ধরন সুনির্দিষ্টভাবে চিহ্নিত করা যায়।

#### **Function Parameter Annotations:**

ফাংশনের প্যারামিটারের টাইপ নির্ধারণ করার জন্য টাইপ অ্যানোটেশন ব্যবহার করা হয়। এর ফলে ফাংশনের ভিতরে নির্দিষ্ট টাইপের মানই ব্যবহার করা যাবে।

**উদাহরণ:**

```typescript
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
```

এখানে `name` প্যারামিটারের টাইপ `string` হিসাবে নির্ধারণ করা হয়েছে, এবং ফাংশনটি `void` টাইপের অর্থ কোনো মান রিটার্ন করছে না।

#### **Function Return Type Annotations:**

ফাংশনের রিটার্ন টাইপ নির্ধারণ করাও গুরুত্বপূর্ণ। এটি নির্দেশ করে যে ফাংশনটি কী ধরনের মান রিটার্ন করবে।

**উদাহরণ:**

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

এখানে, `add` ফাংশনের রিটার্ন টাইপ `number` হিসাবে নির্ধারণ করা হয়েছে, কারণ এটি দুটি সংখ্যা যোগ করে রিটার্ন করছে।

### **3. Object Type Annotations (অবজেক্টের টাইপ নির্ধারণ):**

TypeScript-এ অবজেক্ট টাইপ অ্যানোটেশন করার জন্য অবজেক্টের প্রতিটি প্রপার্টির টাইপ নির্ধারণ করতে হয়। এটি নিশ্চিত করে যে অবজেক্টের প্রতিটি প্রপার্টির জন্য সঠিক টাইপের মান ব্যবহার করা হচ্ছে।

**উদাহরণ:**

```typescript
let person: { name: string; age: number; isStudent: boolean } = {
  name: "Alice",
  age: 25,
  isStudent: true
};
```

এখানে `person` অবজেক্টটির জন্য টাইপ অ্যানোটেশন করা হয়েছে, যেখানে `name` এর টাইপ `string`, `age` এর টাইপ `number`, এবং `isStudent` এর টাইপ `boolean` নির্ধারণ করা হয়েছে।

#### **Optional Properties:**

অবজেক্টের কিছু প্রপার্টি `optional` (ঐচ্ছিক) হতে পারে। এই ধরনের প্রপার্টির জন্য টাইপ অ্যানোটেশন করার সময় প্রপার্টির নামের শেষে `?` চিহ্ন ব্যবহার করা হয়।

**উদাহরণ:**

```typescript
let person: { name: string; age?: number } = { name: "Bob" };
```

এখানে `age` প্রপার্টিটি ঐচ্ছিক করা হয়েছে, তাই সেটি থাকতে বা না-ও থাকতে পারে।

### **4. Array Type Annotations (অ্যারের টাইপ নির্ধারণ):**

TypeScript-এ অ্যারের জন্য টাইপ অ্যানোটেশন করার সময় নির্দিষ্ট টাইপের উপাদান ধারণ করার নির্দেশ দেওয়া যায়।

অ্যারের টাইপ নির্ধারণ করার জন্য `elementType[]` বা `Array<elementType>` সিনট্যাক্স ব্যবহার করা হয়।

**উদাহরণ:**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

এখানে `numbers` অ্যারের প্রতিটি উপাদান `number` টাইপের এবং `names` অ্যারের প্রতিটি উপাদান `string` টাইপের।

#### **Generic Array Type:**

অ্যারের জন্য জেনেরিক টাইপ ব্যবহার করেও টাইপ নির্ধারণ করা যায়।

**উদাহরণ:**

```typescript
let fruits: Array<string> = ["Apple", "Banana", "Mango"];
```

### **5. Tuple Type Annotations (টাপলের টাইপ নির্ধারণ):**

Tuple হলো নির্দিষ্ট আকারের এবং নির্দিষ্ট টাইপের উপাদান ধারণকারী একটি ডেটা স্ট্রাকচার। Tuple এর জন্য টাইপ অ্যানোটেশন করতে প্রতিটি পজিশনের টাইপ নির্ধারণ করতে হয়।

**উদাহরণ:**

```typescript
let person: [string, number] = ["Alice", 25];
```

এখানে `person` টাপলে প্রথম উপাদানটি `string` এবং দ্বিতীয়টি `number` টাইপের।

### **6. Function Type Annotations with Callbacks (কলব্যাক ফাংশনের টাইপ নির্ধারণ):**

ফাংশনের প্যারামিটার হিসাবে কলব্যাক ফাংশন ব্যবহার করলে TypeScript-এ সেই কলব্যাক ফাংশনের টাইপও নির্ধারণ করতে হয়। এটি নিশ্চিত করে যে কলব্যাক ফাংশন সঠিক টাইপের মান গ্রহণ এবং রিটার্ন করছে।

**উদাহরণ:**

```typescript
function processNumbers(callback: (num: number) => void): void {
  let numbers = [1, 2, 3];
  numbers.forEach(callback);
}
```

এখানে `processNumbers` ফাংশনের প্যারামিটার হিসাবে একটি কলব্যাক ফাংশন গ্রহণ করছে যা `number` টাইপের মান নেয় এবং কিছু রিটার্ন করে না।

### **7. Union Types with Annotations (ইউনিয়ন টাইপ সহ অ্যানোটেশন):**

TypeScript-এ ভেরিয়েবল একাধিক টাইপ ধারণ করতে পারে। এক্ষেত্রে টাইপ অ্যানোটেশনের সময় ইউনিয়ন টাইপ (`|`) ব্যবহার করা হয়।

**উদাহরণ:**

```typescript
let value: string | number;
value = "Hello";
value = 42;
```

এখানে `value` ভেরিয়েবলের জন্য টাইপ অ্যানোটেশন করা হয়েছে `string | number`, অর্থাৎ এটি স্ট্রিং অথবা সংখ্যা ধারণ করতে পারে।

### **8. Type Aliases (টাইপের ছদ্মনাম):**

TypeScript-এ টাইপ অ্যানোটেশনের জন্য টাইপ ছদ্মনাম ব্যবহার করা যেতে পারে, যাতে কোডের পুনরাবৃত্তি কমানো যায় এবং টাইপগুলোকে আরও পড়ারযোগ্য করা যায়।

**উদাহরণ:**

```typescript
type Person = { name: string; age: number };

let employee: Person = { name: "Bob", age: 30 };
```

এখানে `Person` নামক টাইপ ছদ্মনাম ব্যবহার করে অবজেক্ট টাইপ সংজ্ঞায়িত করা হয়েছে এবং পরে `employee` ভেরিয়েবলের জন্য এটি ব্যবহার করা হয়েছে।

### **9. Function Type Expressions:**

কখনও কখনও ফাংশন নিজেই একটি টাইপ হতে পারে। TypeScript এ ফাংশনের টাইপ নির্ধারণ করতে ফাংশন টাইপ এক্সপ্রেশন ব্যবহার করা হয়।

**উদাহরণ:**

```typescript
let myFunc: (x: number, y: number) => number;
myFunc = function(x: number, y: number): number {
  return x + y;
};
```

এখানে `myFunc` ফাংশন টাইপ হিসেবে ঘোষণা করা হয়েছে, যা দুটি `number` ইনপুট গ্রহণ করে এবং একটি `number` রিটার্ন করে।

### **10. Optional Parameters and Properties:**

ফাংশনের প্যারামিটার বা অবজেক্টের প্রপার্টি যা প্রয়োজনীয় নয়, তা `?` ব্যবহার করে নির্ধারণ করা যায়।

**উদাহরণ:**

```typescript
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}. You are ${age} years old.`;
  } else {
    return `Hello, ${name}.`;
  }
}
```

এখানে `age` একটি অপশনাল প্যারামিটার, যার মান দেওয়া না হলেও ফাংশনটি কাজ করবে।

### **11. Default Parameters:**

ফাংশনের প্যারামিটারগুলোর জন্য ডিফল্ট মান নির্ধারণ করা যায়।

**উদাহরণ:**

```typescript
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}
```

এখানে `name` প্যারামিটারটির ডিফল্ট মান `"Guest"` সেট করা হয়েছে, যা মান না দিলেও ব্যবহৃত হবে।

### **12. Interface:**

TypeScript এ `interface` ব্যবহার করে অবজেক্টের টাইপ নির্ধারণ করতে পারা যায়।

**উদাহরণ:**

```typescript
interface Person {
  name: string;
  age: number;
  isStudent?: boolean; // Optional property
}

let person: Person = {
  name: "Alice",
  age: 25
};
```

এখানে `Person` নামক একটি ইন্টারফেস তৈরি করা হয়েছে যা অবজেক্টের টাইপ নির্ধারণ করছে।

### **সংক্ষেপে:**

- **Variable Annotations**: ভেরিয়েবলের টাইপ নির্ধারণ।
- **Function Annotations**: ফাংশনের প্যারামিটার এবং রিটার্ন টাইপ নির্ধারণ।
- **Object Annotations**: অবজেক্টের প্রতিটি প্রপার্টির টাইপ নির্ধারণ।
- **Array Annotations**: অ্যারের প্রতিটি উপাদানের টাইপ নির্ধারণ।
- **Tuple Annotations**: Tuple এর প্রতিটি উপাদানের টাইপ নির্ধারণ।
- **Union Types**: একাধিক টাইপের জন্য টাইপ অ্যানোটেশন।
- **Type Aliases**: টাইপের ছদ্মনাম ব্যবহার করে টাইপ সংজ্ঞায়িত করা।

Type Annotations TypeScript-এর একটি মৌলিক বৈশিষ্ট্য, যা টাইপ নিরাপত্তা বজায় রাখে এবং টাইপ সম্পর্কিত ত্রুটি কমায়।
