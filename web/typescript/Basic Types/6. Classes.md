### 6. **Classes (ক্লাস)**

TypeScript-এ **Classes** হলো একটি ব্লুপ্রিন্ট বা খাঁচা, যার মাধ্যমে অবজেক্ট তৈরি করা হয়। JavaScript এর মতোই TypeScript-এ ক্লাস ব্যবহার করা যায়, তবে TypeScript এ অতিরিক্ত টাইপিং সুবিধা, Access Modifiers এবং আরও কিছু ফিচার রয়েছে, যা কোডের নিরাপত্তা ও ব্যবস্থাপনা সহজ করে তোলে।

TypeScript-এ ক্লাসগুলো ইনস্ট্যান্স তৈরি করতে `new` কীওয়ার্ড ব্যবহার করা হয় এবং এর কনস্ট্রাক্টর (constructor) এর মাধ্যমে প্রাথমিক মান সেট করা হয়। ক্লাসে মেথড, প্রোপার্টি, এবং বিভিন্ন ধরনের অ্যাক্সেস মডিফায়ার ব্যবহার করা যায়।

#### **TypeScript এর ক্লাস (Class)**

TypeScript এ ক্লাস তৈরির জন্য `class` কীওয়ার্ড ব্যবহার করা হয়। এর মাধ্যমে একটি অবজেক্টের প্রোপার্টি ও মেথড (function) নির্ধারণ করা যায়।

**Basic Example:**

```typescript
class Person {
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let person1 = new Person("Alice", 30);
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
```

এখানে `Person` নামক ক্লাসটিতে দুটি প্রোপার্টি (`name` এবং `age`) এবং একটি মেথড (`greet`) রয়েছে। কনস্ট্রাক্টর (constructor) এর মাধ্যমে ক্লাসটির ইনস্ট্যান্স তৈরির সময় প্রোপার্টিগুলোতে মান সেট করা হচ্ছে।

### **Constructors এবং Methods (কনস্ট্রাক্টর এবং মেথড)**

#### **Constructors:**

`constructor` হলো একটি বিশেষ মেথড, যা ক্লাস থেকে ইনস্ট্যান্স তৈরির সময় প্রথমে কল হয়। এটি সাধারণত প্রোপার্টি ইনিশিয়ালাইজ করার জন্য ব্যবহৃত হয়। আপনি কনস্ট্রাক্টরের মাধ্যমে প্রোপার্টির প্রাথমিক মান সেট করতে পারেন।

**Constructor Example:**

```typescript
class Car {
  brand: string;
  year: number;

  // Constructor
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }

  getDetails(): string {
    return `${this.brand} was manufactured in the year ${this.year}.`;
  }
}

let myCar = new Car("Toyota", 2020);
console.log(myCar.getDetails()); // Output: Toyota was manufactured in the year 2020.
```

এখানে `Car` ক্লাসটির কনস্ট্রাক্টরের মাধ্যমে `brand` এবং `year` প্রোপার্টিগুলো ইনিশিয়ালাইজ করা হয়েছে।

#### **Methods:**

Methods হলো ক্লাসের ফাংশনগুলো। এগুলো ক্লাসের প্রোপার্টির উপর কোনো কাজ সম্পাদন করে বা কোনো মান রিটার্ন করে। মেথডের মধ্যে আপনি ক্লাসের ভেতরের প্রোপার্টিগুলো `this` কিওয়ার্ড ব্যবহার করে অ্যাক্সেস করতে পারেন।

**Method Example:**

```typescript
class Animal {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  makeSound(): string {
    return `${this.type} makes a sound!`;
  }
}

let animal1 = new Animal("Dog");
console.log(animal1.makeSound()); // Output: Dog makes a sound!
```

এখানে `makeSound` মেথডটি `Animal` ক্লাসের একটি প্রোপার্টির উপর কাজ করে।

### **Inheritance (ঊত্তরাধিকার)**

TypeScript এ `extends` কিওয়ার্ড ব্যবহার করে একটি ক্লাস অন্য একটি ক্লাস থেকে উত্তরাধিকার (inheritance) পেতে পারে। এতে একটি ক্লাস অন্য একটি ক্লাসের প্রোপার্টি ও মেথড ব্যবহার করতে পারে।

#### **Inheritance Example:**

```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  introduce(): string {
    return `Hello, my name is ${this.name}.`;
  }
}

class Employee extends Person {
  employeeId: number;

  constructor(name: string, employeeId: number) {
    super(name); // Parent class এর কনস্ট্রাক্টরকে কল করে।
    this.employeeId = employeeId;
  }

  getDetails(): string {
    return `Name: ${this.name}, Employee ID: ${this.employeeId}`;
  }
}

let emp1 = new Employee("John", 123);
console.log(emp1.introduce());  // Output: Hello, my name is John.
console.log(emp1.getDetails()); // Output: Name: John, Employee ID: 123.
```

এখানে `Employee` ক্লাসটি `Person` ক্লাস থেকে উত্তরাধিকার পেয়েছে এবং `Person` এর প্রোপার্টি ও মেথড ব্যবহার করতে পারছে।

### **Access Modifiers (অ্যাক্সেস মডিফায়ারস)**

TypeScript এ **Access Modifiers** দিয়ে ক্লাসের প্রোপার্টি ও মেথডে অ্যাক্সেস কিভাবে করা যাবে, তা নিয়ন্ত্রণ করা যায়। সাধারণত তিন ধরনের অ্যাক্সেস মডিফায়ার রয়েছে:

- **public**: ডিফল্ট মডিফায়ার। ক্লাসের বাইরের অংশ থেকেও প্রোপার্টি বা মেথড অ্যাক্সেস করা যায়।
- **private**: কেবল ক্লাসের ভেতরেই প্রোপার্টি বা মেথড অ্যাক্সেস করা যায়। বাইরে থেকে কোনোভাবেই অ্যাক্সেস করা যাবে না।
- **protected**: কেবলমাত্র ক্লাস এবং তার সন্তানেরা (sub-classes) অ্যাক্সেস করতে পারে। বাইরে থেকে অ্যাক্সেস করা যায় না।

#### **1. public:**

যদি কোনো প্রোপার্টি বা মেথড `public` ঘোষণা করা হয়, তাহলে সেটি যেকোনো স্থান থেকে অ্যাক্সেস করা যাবে।

**Example:**

```typescript
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): string {
    return `Hello, ${this.name}`;
  }
}

let person = new Person("Alice");
console.log(person.name);  // Output: Alice
console.log(person.greet()); // Output: Hello, Alice
```

#### **2. private:**

`private` প্রোপার্টি বা মেথড কেবলমাত্র ক্লাসের ভেতর থেকেই অ্যাক্সেসযোগ্য।

**Example:**

```typescript
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): string {
    return `Hello, ${this.name}`;
  }
}

let person = new Person("Alice");
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.
console.log(person.greet()); // Output: Hello, Alice
```

এখানে `name` প্রোপার্টিটি `private` হওয়ায় বাইরে থেকে এটি অ্যাক্সেস করা যায় না।

#### **3. protected:**

`protected` প্রোপার্টি বা মেথড কেবলমাত্র ক্লাস এবং তার সন্তানেরা অ্যাক্সেস করতে পারে।

**Example:**

```typescript
class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  constructor(name: string) {
    super(name);
  }

  getName(): string {
    return this.name;
  }
}

let emp = new Employee("Bob");
console.log(emp.getName()); // Output: Bob
// console.log(emp.name); // Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.
```

এখানে `name` প্রোপার্টিটি `protected`, তাই `Employee` ক্লাসের মধ্যে এটি অ্যাক্সেস করা যাচ্ছে, তবে বাইরে থেকে সরাসরি অ্যাক্সেস করা যাচ্ছে না।

### **সংক্ষেপে:**

- **Classes (ক্লাস)**: অবজেক্টের গঠন নির্ধারণ করতে ব্যবহৃত হয়।
- **Constructors (কনস্ট্রাক্টর)**: ক্লাস ইনস্ট্যান্স তৈরির সময় প্রোপার্টি ইনিশিয়ালাইজ করার জন্য ব্যবহৃত হয়।
- **Methods (মেথড)**: ক্লাসের ফাংশনগুলো, যা প্রোপার্টির উপর কাজ সম্পাদন করে।
- **Inheritance (ঊত্তরাধিকার)**: একটি ক্লাস অন্য ক্লাসের প্রোপার্টি ও মেথড উত্তরাধিকার পায়।
- **Access Modifiers (public, private, protected)**: প্রোপার্টি বা মেথডের অ্যাক্সেস নিয়ন্ত্রণ করতে ব্যবহৃত হয়।
