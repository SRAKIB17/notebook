TypeScript-এ `Enum` (Enumeration) হলো একটি বিশেষ ধরনের ডেটা স্ট্রাকচার যা নির্দিষ্ট নামযুক্ত ধ্রুবকগুলোর (constants) একটি সেট সংজ্ঞায়িত করতে ব্যবহৃত হয়। এটি বিশেষত কোনো ভেরিয়েবল বা মানের সেট (যেমন সপ্তাহের দিনগুলো বা দিক নির্দেশক) সংজ্ঞায়িত করতে সহায়ক।

### **Enum কী?**

`Enum` এমন একটি ডেটা টাইপ যা কয়েকটি নির্দিষ্ট নামের মানকে গ্রুপ করে। এটি TypeScript এবং JavaScript এর মধ্যে কোডকে আরও পড়ারযোগ্য এবং রক্ষণাবেক্ষণযোগ্য করে তোলে।

### **Enum এর ধরন:**

TypeScript-এ দুটি ধরণের `Enum` রয়েছে:

1. **Numeric Enum (সংখ্যাসূচক এনাম)**
2. **String Enum (স্ট্রিং এনাম)**

#### **1. Numeric Enum (সংখ্যাসূচক এনাম):**

Numeric enum হলো ডিফল্ট এনাম টাইপ, যেখানে প্রতিটি এনাম সদস্যের জন্য স্বয়ংক্রিয়ভাবে একটি সংখ্যা নির্ধারিত হয়, এবং যদি কোনো মান নির্ধারণ করা না হয় তবে এটি ০ থেকে শুরু হয়।

**উদাহরণ:**

```typescript
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

এখানে, `Direction` নামক এনামটির চারটি সদস্য রয়েছে: `Up`, `Down`, `Left`, এবং `Right`, যা স্বয়ংক্রিয়ভাবে ০, ১, ২, এবং ৩ এর সাথে সমান করা হয়েছে।

##### **Custom Numeric Enum:**

তুমি নিজেও এনামের জন্য একটি কাস্টম সংখ্যাসূচক মান সেট করতে পারো।

**উদাহরণ:**

```typescript
enum Direction {
  Up = 1,    // 1
  Down,      // 2
  Left = 10, // 10
  Right      // 11
}

let move: Direction = Direction.Left;
console.log(move); // Output: 10
```

এখানে, আমরা `Up` এর মান ১ দিয়েছি, এবং এরপরের গুলো স্বয়ংক্রিয়ভাবে increment করে মান সেট করা হয়েছে।

#### **2. String Enum (স্ট্রিং এনাম):**

String enum-এ, প্রতিটি এনাম সদস্যকে একটি নির্দিষ্ট স্ট্রিং মান নির্ধারণ করতে হয়। এটি নামযুক্ত ধ্রুবকগুলোর (named constants) সাথে স্ট্রিং হিসেবে কাজ করে।

**উদাহরণ:**

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Up;
console.log(move); // Output: "UP"
```

এখানে, প্রতিটি এনাম সদস্যের একটি স্ট্রিং মান নির্ধারণ করা হয়েছে।

### **Enum এর ব্যবহার:**

TypeScript-এ `Enum` এর ব্যবহার কোডের পাঠযোগ্যতা এবং পরিষ্কারতা বাড়ায়। বিশেষ করে যখন কোনো ভেরিয়েবল কিছু নির্দিষ্ট মান ধারণ করবে তখন এনাম ব্যবহারের মাধ্যমে সেটি আরও পরিষ্কার হয়।

#### **উদাহরণ:**

```typescript
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

let today: Days = Days.Wednesday;
console.log(today); // Output: 3 (যেহেতু 'Sunday' শুরু হয় ০ থেকে)
```

### **Enum এর আরও বৈশিষ্ট্য:**

1. **Reverse Mapping:**
   Numeric enum-এ TypeScript দুই দিকেই ম্যাপিং করে থাকে, অর্থাৎ মান থেকে নাম এবং নাম থেকে মান উভয়দিকেই ম্যাপ করা যায়।

**উদাহরণ:**

```typescript
enum Status {
  Active = 1,
  Inactive,
  Pending
}

console.log(Status.Active);   // Output: 1
console.log(Status[1]);       // Output: "Active"
```

2. **Const Enum:**
   যদি কোনো এনামকে compile time এ শুধুমাত্র পড়া যায় এমনভাবে ব্যবহার করতে চাও, তখন `const enum` ব্যবহার করতে পারো। এটি কম্পাইল হলে এনাম এর মান সরাসরি কোডে প্রতিস্থাপন করা হয়, ফলে এক্সট্রা জাভাস্ক্রিপ্ট কোড জেনারেট হয় না।

**উদাহরণ:**

```typescript
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0 (কম্পাইল হলে সরাসরি 0 হিসেবে প্রতিস্থাপিত হবে)
```

3. **Heterogeneous Enum:**
   TypeScript-এ enum-এ মিশ্রিত টাইপের মানও ব্যবহার করা যায়, যেমন সংখ্যা এবং স্ট্রিং একসাথে।

**উদাহরণ:**

```typescript
enum Result {
  Success = "SUCCESS",
  Failure = 0
}
```

### **সংক্ষেপে:**

- **Numeric Enum:** ডিফল্ট এনাম যেখানে মান সংখ্যা দ্বারা নির্ধারিত হয়।
- **String Enum:** এনাম সদস্যদের স্ট্রিং মান নির্ধারণ করতে হয়।
- **Reverse Mapping:** সংখ্যাসূচক এনামে নাম এবং মানের মধ্যে উভয় দিকেই অ্যাক্সেস করা যায়।
- **Const Enum:** compile time-এ সরাসরি প্রতিস্থাপন হওয়া এনাম, যা এক্সট্রা কোড জেনারেট করে না।
- **Heterogeneous Enum:** একই এনামে সংখ্যা এবং স্ট্রিং মিশ্রিত করা যেতে পারে।

TypeScript-এ `Enum` কোডের পাঠযোগ্যতা, মানের নির্দিষ্টতা এবং ভুল ধরতে সহায়ক।
