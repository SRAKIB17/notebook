### **7. Union এবং Intersection Types** - TypeScript-এ

TypeScript-এ **Union** এবং **Intersection** টাইপ হলো শক্তিশালী ফিচার, যা একাধিক টাইপের ডেটা সংজ্ঞায়িত এবং নিয়ন্ত্রণ করতে সাহায্য করে। এর মাধ্যমে আমাদের প্রোগ্রাম আরও বহুমুখী এবং টাইপ-নিরাপত্তা সম্পন্ন হয়।

---

### **Union Types (একাধিক টাইপ নির্ধারণ করা)**

**Union Types** ব্যবহার করা হয় যখন একটি ভেরিয়েবল একাধিক টাইপ ধারণ করতে পারে। এটি একটি ভেরিয়েবলকে একাধিক টাইপের মধ্যে যেকোনো একটির মান ধারণ করার অনুমতি দেয়।

**Syntax:**  
`type1 | type2 | type3`

এখানে `|` (পাইপ) চিহ্ন ব্যবহার করা হয় বিভিন্ন টাইপের মধ্যে ইউনিয়ন তৈরির জন্য।

#### **উদাহরণ ১:**

```typescript
let value: string | number;
value = "Hello";
value = 42;
```

এখানে `value` ভেরিয়েবলটি হয় `string` বা `number` টাইপের কোনো মান গ্রহণ করতে পারবে।

#### **উদাহরণ ২: ফাংশন এবং Union Types:**

একটি ফাংশনও Union Type গ্রহণ করতে পারে। এ ক্ষেত্রে ফাংশনের ইনপুট হিসেবে একাধিক টাইপের ডেটা দেওয়া যেতে পারে এবং সেই অনুযায়ী সিদ্ধান্ত নেওয়া হয়।

```typescript
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id}`);
  }
}

printId(101);      // ID: 101
printId("E101");   // ID: E101
```

এখানে `printId` ফাংশনটি `string` বা `number` টাইপের মান গ্রহণ করে এবং টাইপের উপর ভিত্তি করে আলাদা আচরণ করে।

#### **Union Arrays (ইউনিয়ন টাইপের অ্যারে):**

TypeScript-এ আপনি ইউনিয়ন টাইপের অ্যারে ডিক্লেয়ার করতে পারেন, যেখানে একটি অ্যারের প্রতিটি উপাদান ভিন্ন ভিন্ন টাইপের হতে পারে।

```typescript
let data: (string | number)[] = ["Alice", 30, "Bob", 25];
```

এখানে `data` অ্যারেটিতে `string` এবং `number` টাইপের উপাদান থাকতে পারে।

---

### **Intersection Types (Type Combos)**

**Intersection Types** ব্যবহার করা হয় যখন আপনি একাধিক টাইপকে একত্রিত করতে চান, অর্থাৎ কোনো ভেরিয়েবলকে একাধিক টাইপের সবগুলো গুণাবলী (properties) ধারণ করতে হবে। এটি সাধারণত অনেকগুলো টাইপ একত্রিত করে একটি নতুন টাইপ তৈরির জন্য ব্যবহৃত হয়।

**Syntax:**  
`type1 & type2 & type3`

এখানে `&` (এন্ড) চিহ্ন ব্যবহার করে টাইপের ইন্টারসেকশন তৈরি করা হয়।

#### **উদাহরণ ১:**

```typescript
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

let person: EmployeePerson = {
  name: "Alice",
  employeeId: 123
};
```

এখানে `EmployeePerson` হলো একটি Intersection টাইপ, যা `Person` এবং `Employee` এর গুণাবলী একত্রিত করেছে। অর্থাৎ, `person` অবজেক্টটি উভয় ইন্টারফেসের প্রোপার্টি ধারণ করতে বাধ্য।

#### **উদাহরণ ২: ফাংশন এবং Intersection Types:**

Intersection টাইপ ব্যবহার করে ফাংশনের ইনপুটে একাধিক টাইপের ডেটা একত্রিত করা যেতে পারে।

```typescript
interface Developer {
  codingLanguages: string[];
}

interface Manager {
  teamSize: number;
}

type DevManager = Developer & Manager;

function describeEmployee(emp: DevManager): void {
  console.log(`Employee knows: ${emp.codingLanguages.join(", ")}`);
  console.log(`Manages a team of size: ${emp.teamSize}`);
}

let devMgr: DevManager = {
  codingLanguages: ["JavaScript", "TypeScript", "Python"],
  teamSize: 10
};

describeEmployee(devMgr);
```

এখানে `DevManager` টাইপটি `Developer` এবং `Manager` টাইপকে একত্রিত করেছে, এবং `describeEmployee` ফাংশনটি এই মিশ্র টাইপের ইনপুট গ্রহণ করছে।

---

### **Union vs Intersection:**

- **Union Types:** একটি ভেরিয়েবল একাধিক টাইপের যেকোনো একটির গুণাবলী ধারণ করতে পারে। এটি OR সম্পর্কের মতো।
- **Intersection Types:** একটি ভেরিয়েবল একাধিক টাইপের সবগুলো গুণাবলী ধারণ করতে হবে। এটি AND সম্পর্কের মতো।

---

### **সংক্ষেপে:**

- **Union Types:** ভেরিয়েবল বা ফাংশন প্যারামিটারকে একাধিক টাইপের যেকোনো একটি গ্রহণ করতে সক্ষম করে।  
  উদাহরণ: `string | number`

- **Intersection Types:** একাধিক টাইপের গুণাবলী একত্রিত করে একটি টাইপ তৈরি করে, যেখানে ভেরিয়েবল সব টাইপের গুণাবলী ধারণ করতে হবে।  
  উদাহরণ: `Person & Employee`
