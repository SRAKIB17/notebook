### **8. Advanced Types** - TypeScript-এ

TypeScript-এ **Advanced Types** হলো টাইপ সিস্টেমের শক্তিশালী বৈশিষ্ট্যগুলো, যা আপনাকে আরও জটিল টাইপ নিয়ন্ত্রণ এবং কোডের টাইপ নিরাপত্তা উন্নত করতে সাহায্য করে। এর মাধ্যমে টাইপগুলি আরও সহজে সংজ্ঞায়িত করা এবং পরিচালনা করা যায়।

---

### **1. Type Aliases (টাইপ উপনাম)**

**Type Alias** হলো TypeScript-এ একটি সুবিধাজনক ফিচার, যা আপনাকে একটি বিদ্যমান টাইপের জন্য একটি নতুন নাম বা উপনাম তৈরি করতে দেয়। এটি বড় এবং জটিল টাইপগুলোকে সহজে ব্যবহারের জন্য সহজ করে।

#### **Syntax:**

```typescript
type AliasName = ExistingType;
```

#### **উদাহরণ:**

```typescript
type StringOrNumber = string | number;
let value: StringOrNumber;
value = "Hello";
value = 42;
```

এখানে `StringOrNumber` নামের একটি টাইপ উপনাম তৈরি করা হয়েছে, যা `string` এবং `number` টাইপের একটি ইউনিয়ন। এটি ব্যবহার করে আমরা টাইপ লেখার কাজকে সংক্ষিপ্ত করতে পারি।

#### **অন্য উদাহরণ:**

```typescript
type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "Alice",
  age: 25
};
```

এখানে `User` টাইপ উপনামটি একটি অবজেক্ট টাইপের জন্য তৈরি করা হয়েছে। এটি পুনরায় ব্যবহারযোগ্য এবং কোডকে আরও পাঠযোগ্য করে তোলে।

---

### **2. Literal Types (লিটারাল টাইপ)**

**Literal Types** নির্দিষ্ট মানগুলোর ভিত্তিতে টাইপ তৈরি করতে ব্যবহার করা হয়। এটি এমন টাইপ যেখানে একটি ভেরিয়েবল শুধুমাত্র নির্দিষ্ট কিছু মান গ্রহণ করতে পারে।

#### **Syntax:**

```typescript
let variable: "specificValue";
```

#### **উদাহরণ:**

```typescript
let direction: "left" | "right" | "up" | "down";
direction = "left";  // ঠিক আছে
direction = "right"; // ঠিক আছে
// direction = "forward"; // এটি ত্রুটি দেখাবে
```

এখানে `direction` ভেরিয়েবলটি শুধুমাত্র `left`, `right`, `up`, বা `down` মানগুলোর একটি গ্রহণ করতে পারবে।

#### **কম্বিনেশন:**

Literal Types ইউনিয়ন টাইপের সাথে মিশিয়ে ব্যবহার করা যায়, যা আপনাকে সীমিত মান সহ টাইপ তৈরি করতে সাহায্য করে।

```typescript
type YesNo = "yes" | "no";
let answer: YesNo;
answer = "yes";  // ঠিক আছে
// answer = "maybe"; // এটি ত্রুটি দেখাবে
```

---

### **3. Type Guards এবং Type Narrowing (টাইপ নিরীক্ষা এবং সংকোচন)**

**Type Guards** এবং **Type Narrowing** হল TypeScript-এ টাইপ চেক করার পদ্ধতি, যা একটি ভেরিয়েবল কোনো নির্দিষ্ট টাইপের কিনা তা যাচাই করতে ব্যবহৃত হয়। এটি কোডের ভিতরে টাইপগুলোকে সংকীর্ণ (narrow) করার জন্য ব্যবহৃত হয়, যাতে নির্দিষ্ট টাইপের জন্য নির্ধারিত কাজ করা যায়।

#### **Type Guards:**

Type Guards মূলত JavaScript এর `typeof`, `instanceof`, এবং কাস্টম ফাংশন ব্যবহার করে নির্দিষ্ট টাইপ যাচাই করার জন্য ব্যবহৃত হয়।

#### **উদাহরণ ১: typeof Type Guard**

```typescript
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } 
  else {
    console.log(`Number value: ${value}`);
  }
}

printValue("Hello");
printValue(42);
```

এখানে `typeof` ব্যবহার করে যাচাই করা হচ্ছে যে, `value` কি `string` নাকি `number` এবং সেই অনুযায়ী কাজ করা হচ্ছে।

#### **উদাহরণ ২: instanceof Type Guard**

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

let dog = new Dog();
let cat = new Cat();
animalSound(dog);
animalSound(cat);
```

এখানে `instanceof` দিয়ে যাচাই করা হচ্ছে যে, অবজেক্টটি `Dog` না `Cat` টাইপের।

#### **Custom Type Guard:**

```typescript
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function isFish(animal: Bird | Fish): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Bird | Fish) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

এখানে `isFish` হলো একটি কাস্টম টাইপ গার্ড, যা যাচাই করছে `animal` আসলেই `Fish` কিনা।

---

### **4. Discriminated Unions (বিভক্ত ইউনিয়ন)**

**Discriminated Unions** হলো একটি বিশেষ ধরনের টাইপ গার্ড, যেখানে একাধিক অবজেক্ট টাইপের মধ্যে একটি সাধারণ প্রপার্টি (discriminator) ব্যবহার করে তাদের পার্থক্য করা হয়। এটি বড় ইউনিয়ন টাইপগুলোর জন্য খুবই কার্যকর।

#### **উদাহরণ:**

```typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

let myCircle: Circle = { kind: "circle", radius: 10 };
let mySquare: Square = { kind: "square", sideLength: 5 };

console.log(getArea(myCircle));  // 314.159
console.log(getArea(mySquare));  // 25
```

এখানে `kind` প্রপার্টির মাধ্যমে পার্থক্য নির্ধারণ করা হচ্ছে যে, অবজেক্টটি `Circle` নাকি `Square` এবং সেই অনুযায়ী এরিয়ার হিসাব করা হচ্ছে।

---

### **5. Index Types এবং Mapped Types**

#### **Index Types:**

**Index Types** ব্যবহার করে আমরা অবজেক্ট টাইপের প্রোপার্টিগুলোতে অ্যাক্সেস করতে পারি এবং টাইপগুলো বিশ্লেষণ করতে পারি। এটি `keyof` অপারেটর ব্যবহার করে করা হয়।

#### **উদাহরণ:**

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonKeys = keyof Person;  // 'name' | 'age' | 'address'

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}

let person: Person = {
  name: "Alice",
  age: 30,
  address: "123 Main St"
};

console.log(getValue(person, "name"));  // Alice
```

এখানে `keyof` অপারেটর ব্যবহার করে `Person` টাইপের প্রোপার্টিগুলোর কী (key) টাইপ সংগ্রহ করা হয়েছে।

#### **Mapped Types:**

**Mapped Types** ব্যবহার করে টাইপের প্রোপার্টিগুলো পরিবর্তন করা বা মডিফাই করা যায়। এটি টাইপ মডিফিকেশনের একটি সহজ পদ্ধতি।

#### **উদাহরণ:**

```typescript
type ReadOnlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

let person: ReadOnlyPerson = {
  name: "Alice",
  age: 30,
  address: "123 Main St"
};

// person.name = "Bob";  // এটি ত্রুটি দেখাবে, কারণ প্রোপার্টিগুলো readonly
```

এখানে `Mapped Types` ব্যবহার করে `Person` টাইপের সকল প্রোপার্টিকে `readonly` করা হয়েছে।

---

### **সংক্ষেপে:**

- **Type Aliases:** টাইপগুলোর জন্য উপনাম তৈরি করা।
- **Literal Types:** নির্দিষ্ট মানের টাইপ তৈরি করা।
- **Type Guards এবং Type Narrowing:** টাইপ যাচাই করা এবং টাইপ সংকীর্ণ করা।
- **Discriminated Unions:** একটি সাধারণ প্রপার্টি ব্যবহার করে ইউনিয়ন টাইপ পার্থক্য করা।
- **Index Types এবং Mapped Types:** অবজেক্টের প্রোপার্টি বিশ্লেষণ এবং মডিফাই করা।

TypeScript-এর এই **Advanced Types** গুলো টাইপ নির্ধারণ এবং নিয়ন্ত্রণের ক্ষেত্রে আপনার কোডকে আরও শক্তিশালী ও নমনীয় করে তোলে।
