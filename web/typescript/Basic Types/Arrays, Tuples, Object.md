TypeScript-এ `Array`, `Tuple`, এবং `Object` হলো ডেটা স্ট্রাকচার যা বিভিন্ন ধরনের ডেটা স্টোর এবং ম্যানেজ করতে ব্যবহৃত হয়। এখানে আমরা এদের নিয়ে বিস্তারিত আলোচনা করবো।

### **1. Arrays (অ্যারেস):**

`Array` হলো একই ধরনের ডেটার তালিকা বা সংগ্রহ। TypeScript-এ অ্যারের মধ্যে একাধিক মান রাখা যায় এবং প্রতিটি মানের টাইপ একই হতে হবে।

**উদাহরণ:**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5]; // সংখ্যার অ্যারে
let names: string[] = ["Alice", "Bob", "Charlie"]; // স্ট্রিং এর অ্যারে
let flags: boolean[] = [true, false, true]; // বুলিয়ানের অ্যারে
```

TypeScript-এ অ্যারের টাইপ নির্ধারণ করার জন্য `elementType[]` সিনট্যাক্স ব্যবহার করা হয়। `number[]` মানে এটি সংখ্যার একটি অ্যারে, `string[]` মানে এটি স্ট্রিং এর একটি অ্যারে।

#### **Generic Array Type:**

TypeScript এ `Array<T>` জেনেরিক টাইপও ব্যবহার করা যেতে পারে, যা উপরের সিনট্যাক্সের বিকল্প।

**উদাহরণ:**

```typescript
let fruits: Array<string> = ["Apple", "Banana", "Mango"];
```

### **2. Tuples (টাপলস):**

`Tuple` হলো একটি নির্দিষ্ট আকারের অ্যারে, যেখানে প্রতিটি পজিশনে নির্দিষ্ট টাইপের মান থাকতে হবে। এটি এমন একটি ডেটা স্ট্রাকচার যা ভিন্ন ভিন্ন টাইপের ডেটা একসাথে ধরে রাখতে পারে।

**উদাহরণ:**

```typescript
let person: [string, number] = ["Alice", 25]; // প্রথমটি স্ট্রিং এবং দ্বিতীয়টি সংখ্যা
```

এখানে, `person` হলো একটি tuple যেখানে প্রথম উপাদানটি `string` এবং দ্বিতীয়টি `number`।

#### **Tuple এর মধ্যে অতিরিক্ত মান যোগ করা:**

Tuple ডিক্লেয়ার করা হলে অতিরিক্ত মান যোগ করা যায়, কিন্তু TypeScript কনফিগারেশনের উপর নির্ভর করে তা কঠোরভাবে নিয়ন্ত্রিত হতে পারে।

**উদাহরণ:**

```typescript
let tuple: [string, number] = ["Hello", 42];
tuple.push("World"); // এটি কাজ করবে, তবে TypeScript এর মধ্যে এরর ধরতে পারে
```

### **3. Object (অবজেক্ট):**

`Object` হলো TypeScript এবং JavaScript উভয়েরই একটি মৌলিক ডেটা স্ট্রাকচার। এটি কী-মান (key-value) জোড়ায় ডেটা সংরক্ষণ করে। TypeScript-এ আমরা `object` টাইপ ব্যবহার করে নির্দিষ্ট গঠনসহ একটি অবজেক্ট তৈরি করতে পারি।

**উদাহরণ:**

```typescript
let person: { name: string; age: number; isStudent: boolean } = {
  name: "Alice",
  age: 25,
  isStudent: true
};
```

এখানে, `person` অবজেক্টের মধ্যে তিনটি প্রপার্টি রয়েছে: `name` (স্ট্রিং), `age` (সংখ্যা), এবং `isStudent` (বুলিয়ান)। TypeScript-এ অবজেক্টের টাইপ নির্ধারণ করলে কোডের সঠিকতা এবং নির্ভুলতা বজায় থাকে।

#### **Nested Objects:**

একটি অবজেক্টের মধ্যে অন্য অবজেক্টও থাকতে পারে। একে নেস্টেড অবজেক্ট বলে।

**উদাহরণ:**

```typescript
let company: {
  name: string;
  address: {
    city: string;
    zipCode: number;
  };
} = {
  name: "TechCorp",
  address: {
    city: "New York",
    zipCode: 10001
  }
};
```

এখানে `company` অবজেক্টের মধ্যে একটি `address` অবজেক্ট রয়েছে যা শহর এবং জিপ কোড সংরক্ষণ করে।

### **সংক্ষেপে:**

1. **Array**: একই টাইপের মানের তালিকা।
   - উদাহরণ: `let numbers: number[] = [1, 2, 3];`
2. **Tuple**: নির্দিষ্ট টাইপের নির্দিষ্ট আকারের তালিকা।
   - উদাহরণ: `let person: [string, number] = ["Alice", 25];`
3. **Object**: কী-মান জোড়া নিয়ে তৈরি ডেটা স্ট্রাকচার, যা বিভিন্ন প্রপার্টি ধরে রাখতে পারে।
   - উদাহরণ: `let person: { name: string; age: number; } = { name: "Alice", age: 25 };`

এই ডেটা স্ট্রাকচারগুলো TypeScript এ ডেটা ম্যানেজ করতে ব্যবহার করা হয়।
