### **Interfaces এবং Object Types** - TypeScript-এ

TypeScript-এ **Interfaces** এবং **Object Types** ব্যবহার করে অবজেক্টের গঠন নির্ধারণ করা যায়। এগুলোকে ব্যবহার করে আমরা আমাদের প্রোগ্রামের ডেটার স্ট্রাকচার এবং টাইপ স্পষ্টভাবে উল্লেখ করতে পারি। Interfaces মূলত অবজেক্টের টাইপ নির্ধারণ করার জন্য ব্যবহার করা হয়, তবে এগুলো ক্লাস এবং ফাংশনের ক্ষেত্রেও ব্যবহার করা যেতে পারে। Object Types বলতে অবজেক্টের প্রোপার্টি এবং তাদের টাইপ নির্ধারণ করাকে বোঝায়।

### **1. Object Types:**

TypeScript-এ Object Types নির্ধারণ করা হলো সরাসরি একটি অবজেক্টের প্রোপার্টির টাইপ নির্ধারণ করা। প্রতিটি প্রোপার্টির জন্য নির্দিষ্ট টাইপ উল্লেখ করা হয়।

**উদাহরণ:**

```typescript
let person: { name: string; age: number; isStudent: boolean } = {
  name: "Alice",
  age: 25,
  isStudent: true
};
```

এখানে `person` অবজেক্টের তিনটি প্রোপার্টি আছে: `name`, `age`, এবং `isStudent`, যেখানে `name` হলো `string`, `age` হলো `number`, এবং `isStudent` হলো `boolean`।

#### **Optional Properties (ঐচ্ছিক প্রোপার্টি):**

TypeScript-এ কোনো প্রোপার্টি ঐচ্ছিক করতে হলে `?` চিহ্ন ব্যবহার করতে হয়।

**উদাহরণ:**

```typescript
let person: { name: string; age: number; isStudent?: boolean } = {
  name: "Alice",
  age: 25
};
```

এখানে `isStudent` প্রোপার্টিটি ঐচ্ছিক করা হয়েছে। এটি না থাকলেও কোনো ত্রুটি দেখাবে না।

#### **Readonly Properties (কেবল পড়ার জন্য প্রোপার্টি):**

`readonly` কীওয়ার্ড ব্যবহার করে প্রোপার্টিকে শুধুমাত্র পড়া যায় এমন করা যায়, অর্থাৎ এর মান পরে পরিবর্তন করা যাবে না।

**উদাহরণ:**

```typescript
let car: { readonly brand: string; year: number } = {
  brand: "Toyota",
  year: 2020
};

// car.brand = "Honda"; // এটি ত্রুটি দেখাবে, কারণ 'brand' প্রোপার্টি readonly।
```

এখানে `brand` প্রোপার্টিটি `readonly`, তাই এটি পরিবর্তন করা যাবে না।

### **2. Interfaces:**

**Interfaces** TypeScript-এর একটি বৈশিষ্ট্য, যা অবজেক্টের জন্য টাইপ তৈরি করতে ব্যবহৃত হয়। এটি Object Types-এর চেয়ে বেশি সুবিধাজনক, কারণ এটিকে পুনরায় ব্যবহার করা যায় এবং আরও উন্নত ফিচার সমর্থন করে।

#### **Basic Interface:**

**উদাহরণ:**

```typescript
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

let person1: Person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
```

এখানে `Person` ইন্টারফেসটি অবজেক্টের গঠন নির্ধারণ করেছে, যা `name`, `age`, এবং `isStudent` প্রোপার্টি নির্দিষ্ট করেছে।

#### **Optional Properties (ঐচ্ছিক প্রোপার্টি):**

Interfaces-এও আমরা কোনো প্রোপার্টিকে ঐচ্ছিক করতে `?` ব্যবহার করতে পারি।

**উদাহরণ:**

```typescript
interface Person {
  name: string;
  age: number;
  isStudent?: boolean;
}

let person1: Person = {
  name: "Bob",
  age: 30
};
```

এখানে `isStudent` প্রোপার্টি ঐচ্ছিক, তাই এটি ব্যবহার না করলেও কোনো সমস্যা হবে না।

#### **Readonly Properties:**

Interfaces-এও `readonly` ব্যবহার করে প্রোপার্টিকে কেবল পড়া যায় এমন করা যায়।

**উদাহরণ:**

```typescript
interface Car {
  readonly brand: string;
  year: number;
}

let myCar: Car = {
  brand: "Toyota",
  year: 2021
};

// myCar.brand = "Honda"; // এটি ত্রুটি দেখাবে।
```

এখানে `brand` প্রোপার্টিটি `readonly` হওয়ায় এটি পরিবর্তন করা যাবে না।

### **3. Interface-এ ফাংশন ডিফাইন করা:**

Interfaces-এ ফাংশনের টাইপও নির্ধারণ করা যায়।

**উদাহরণ:**

```typescript
interface Person {
  name: string;
  age: number;
  greet(): string;
}

let person1: Person = {
  name: "Alice",
  age: 25,
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
};
```

এখানে `greet` নামে একটি ফাংশন `Person` ইন্টারফেসে নির্ধারণ করা হয়েছে, যা একটি স্ট্রিং রিটার্ন করবে।

### **4. Interface Inheritance (ইন্টারফেস উত্তরাধিকার):**

একটি ইন্টারফেস অন্য ইন্টারফেস থেকে উত্তরাধিকার (inheritance) গ্রহণ করতে পারে। এটি বহু ইন্টারফেসের মধ্যে গঠন শেয়ার করার জন্য খুবই কার্যকর।

**উদাহরণ:**

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

let employee1: Employee = {
  name: "Alice",
  age: 25,
  salary: 50000
};
```

এখানে `Employee` ইন্টারফেসটি `Person` ইন্টারফেস থেকে উত্তরাধিকার নিয়েছে এবং এর সাথে `salary` প্রোপার্টি যোগ করেছে।

### **5. Interface vs Type Aliases:**

`type` কিওয়ার্ড ব্যবহার করে টাইপ এ্যালিয়াস তৈরি করা যায়। যদিও `interface` এবং `type` উভয়কেই অবজেক্টের টাইপ নির্ধারণের জন্য ব্যবহার করা যায়, তবে `interface` এর তুলনায় `type` কিছু সীমাবদ্ধ। তবে, `type` কিওয়ার্ড দিয়ে আপনি ইউনিয়ন টাইপ (union types) ও টিউপল (tuples) তৈরি করতে পারেন।

**উদাহরণ:**

```typescript
type StringOrNumber = string | number;

let id: StringOrNumber;
id = 101;       // সঠিক
id = "E101";    // এটিও সঠিক
```

### **6. Hybrid Types (হাইব্রিড টাইপ):**

Interfaces হাইব্রিড টাইপও সমর্থন করে, যেখানে অবজেক্ট এবং ফাংশনের গঠন একসাথে থাকতে পারে।

**উদাহরণ:**

```typescript
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

let counter: Counter = (function (start: number): string {
  return `Started at ${start}`;
}) as Counter;

counter.interval = 1000;
counter.reset = function () {
  console.log("Counter reset.");
};
```

এখানে `Counter` ইন্টারফেসটি একটি ফাংশন টাইপ এবং কিছু প্রোপার্টি নির্ধারণ করেছে।

### **সংক্ষেপে:**

- **Object Types:** সরাসরি অবজেক্টের টাইপ নির্ধারণ করা।
- **Interfaces:** অবজেক্টের টাইপের জন্য আরও শক্তিশালী এবং পুনর্ব্যবহারযোগ্য একটি পদ্ধতি।
- **Optional Properties:** `?` ব্যবহার করে প্রোপার্টিকে ঐচ্ছিক করা যায়।
- **Readonly Properties:** `readonly` ব্যবহার করে প্রোপার্টি কেবল পড়া যায় এমন করা যায়।
- **Function in Interfaces:** ইন্টারফেসে ফাংশনের টাইপ নির্ধারণ করা যায়।
- **Inheritance in Interfaces:** ইন্টারফেস একে অপরের কাছ থেকে উত্তরাধিকার পেতে পারে।
- **Interface vs Type Aliases:** `type` এবং `interface` উভয়ই অবজেক্টের টাইপ নির্ধারণ করতে পারে, তবে তাদের মধ্যে কিছু পার্থক্য রয়েছে।

Interfaces এবং Object Types ব্যবহারের মাধ্যমে TypeScript কোড আরও সুনির্দিষ্ট, পুনর্ব্যবহারযোগ্য এবং নিরাপদ হয়।
