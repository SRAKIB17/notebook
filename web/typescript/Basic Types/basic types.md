TypeScript-এ প্রিমিটিভ টাইপগুলো হলো বেসিক ডেটা টাইপ, যা সবচেয়ে সাধারণ ধরনের ভেরিয়েবল ধরে রাখতে ব্যবহৃত হয়। এখানে প্রতিটি প্রিমিটিভ টাইপের একটি সংক্ষিপ্ত পরিচিতি এবং উদাহরণ দেওয়া হলো।

### **1. String (স্ট্রিং):**

`string` টাইপটি টেক্সট বা অক্ষরের একটি ধারা ধরে রাখতে ব্যবহৃত হয়। এটি ডাবল কোটেশন (`" "`) বা সিঙ্গেল কোটেশন (`' '`) দিয়ে লেখা হয়।

**উদাহরণ:**

```typescript
let message: string = "Hello, TypeScript!";
```

### **2. Number (সংখ্যা):**

`number` টাইপটি সমস্ত ধরনের সংখ্যা ধরে রাখতে ব্যবহৃত হয়। এটি ইন্টিজার এবং ফ্লোট উভয়ই হতে পারে।

**উদাহরণ:**

```typescript
let count: number = 42;
let price: number = 99.99;
```

### **3. Boolean (বুলিয়ান):**

`boolean` টাইপটি কেবলমাত্র দুটি মান ধারণ করতে পারে: `true` বা `false`। এটি সাধারণত শর্ত বা সত্য/মিথ্যা যাচাইয়ের জন্য ব্যবহৃত হয়।

**উদাহরণ:**

```typescript
let isLoggedIn: boolean = true;
let hasAccess: boolean = false;
```

### **4. Null (নাল):**

`null` টাইপটি কেবলমাত্র একটি মান ধারণ করে, আর সেটি হলো `null`। এটি সাধারণত কোনো ভেরিয়েবল খালি (empty) আছে বা সেটি কোনো মান ধারণ করছে না তা নির্দেশ করতে ব্যবহৃত হয়।

**উদাহরণ:**

```typescript
let data: null = null;
```

### **5. Undefined (আনডিফাইন্ড):**

`undefined` টাইপটি এমন একটি মান নির্দেশ করে যা কোনো ভেরিয়েবলকে মান নির্ধারণ না করলে পায়। মানে, যখন কোনো ভেরিয়েবলে মান সেট করা হয়নি, তখন সেটি `undefined` থাকে।

**উদাহরণ:**

```typescript
let result: undefined;
```

### **উদাহরণ হিসেবে একসাথে প্রিমিটিভ টাইপগুলো:**

```typescript
let username: string = "JohnDoe";
let age: number = 30;
let isActive: boolean = true;
let salary: null = null;
let address: undefined;
```

### **সংক্ষেপে:**

- **string**: টেক্সট বা অক্ষরের ধারা
- **number**: সকল ধরনের সংখ্যা (ইন্টিজার, ফ্লোট)
- **boolean**: সত্য বা মিথ্যা (true/false)
- **null**: খালি মান
- **undefined**: কোনো মান নির্ধারণ করা হয়নি

এই প্রিমিটিভ টাইপগুলো TypeScript এ কোডের ধরন নির্ধারণে গুরুত্বপূর্ণ ভূমিকা পালন করে, যা কোডের সঠিকতা বজায় রাখতে সহায়তা করে।