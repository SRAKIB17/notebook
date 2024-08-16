Promise হলো JavaScript-এর একটি বিল্ট-ইন অবজেক্ট, যা asynchronous অপারেশন পরিচালনা করতে ব্যবহৃত হয়। Promise অবজেক্টটি তখনই তৈরি হয় যখন কোন ফাংশন asynchronous কাজ শেষ হওয়ার প্রতিশ্রুতি দেয়, কিন্তু সেই কাজ শেষ না হওয়া পর্যন্ত ফলাফল দেয় না।

### Promise এর স্টেট (State)

Promise-এর তিনটি প্রধান স্টেট (অবস্থা) রয়েছে:

1. **Pending (অপেক্ষমাণ):** এটি Promise-এর প্রাথমিক অবস্থা। যখন Promise তৈরি হয়, তখন এটি এই অবস্থায় থাকে। এই সময়ে, Promise এখনও পূর্ণ হয়নি বা রিজেক্ট হয়নি।

2. **Fulfilled (পূর্ণ):** যদি Promise সফলভাবে সম্পন্ন হয় এবং ফলাফল দেয়, তখন Promise fulfilled হয়।

3. **Rejected (প্রত্যাখ্যান):** যদি Promise কোনো কারণে ব্যর্থ হয় বা একটি error ঘটে, তখন Promise rejected হয়।

### Promise কিভাবে কাজ করে

Promise তৈরি করার সময়, আমরা একটি executor ফাংশন প্রদান করি, যা দুটি ফাংশন গ্রহণ করে: `resolve` এবং `reject`।

- **`resolve`**: এটি Promise পূর্ণ হলে কল করা হয় এবং একটি মান প্রদান করে।
- **`reject`**: এটি Promise প্রত্যাখ্যান হলে কল করা হয় এবং একটি error বা কারন প্রদান করে।

### Promise এর উদাহরণ

```javascript
// একটি নতুন Promise তৈরি করা
let myPromise = new Promise(function(resolve, reject) {
    let condition = true;

    if(condition) {
        resolve("Promise পূর্ণ হয়েছে!");
    } else {
        reject("Promise প্রত্যাখ্যান হয়েছে!");
    }
});

// Promise ব্যবহার করা
myPromise.then(function(value) {
    console.log(value); // "Promise পূর্ণ হয়েছে!"
}).catch(function(error) {
    console.log(error); // "Promise প্রত্যাখ্যান হয়েছে!"
});
```

### `.then()` এবং `.catch()` মেথড

- **`.then()`**: এই মেথডটি তখন কল করা হয় যখন Promise পূর্ণ হয়। এটি fulfilled মানকে গ্রহণ করে।
- **`.catch()`**: এই মেথডটি তখন কল করা হয় যখন Promise প্রত্যাখ্যান হয়। এটি error মানকে গ্রহণ করে।

### Async এবং Await এর সাথে Promise ব্যবহার

`async` এবং `await` হল Promises-এর সাথে কাজ করার জন্য সহজ এবং পরিষ্কার syntax।

```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('2 সেকেন্ড পরে পূর্ণ হয়েছে');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('ফাংশন কল শুরু');
  let result = await resolveAfter2Seconds();
  console.log(result); // "2 সেকেন্ড পরে পূর্ণ হয়েছে"
}

asyncCall();
```

### Promise এর চেইনিং (Chaining)

Promise চেইনিং ব্যবহার করে, আমরা একাধিক asynchronous অপারেশন ধারাবাহিকভাবে পরিচালনা করতে পারি।

```javascript
let promise = new Promise(function(resolve, reject) {
    resolve(10);
});

promise.then(function(value) {
    console.log(value); // 10
    return value * 2;
}).then(function(value) {
    console.log(value); // 20
    return value * 3;
}).then(function(value) {
    console.log(value); // 60
});
```

এই প্রক্রিয়াটি Promise চেইনিং হিসাবে পরিচিত।

### Promise.all() এবং Promise.race()

- **`Promise.all()`**: এটি একাধিক Promise গুলি একত্রে পরিচালনা করার জন্য ব্যবহৃত হয়। যদি সব Promise পূর্ণ হয়, তাহলে এটি একটি array রিটার্ন করে, যেখানে প্রত্যেকটি Promise এর ফলাফল থাকে।

```javascript
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then(function(values) {
    console.log(values); // [10, 20, 30]
});
```

- **`Promise.race()`**: এটি তখন ব্যবহৃত হয় যখন আমরা চাই যে প্রথম পূর্ণ হওয়া Promise এর ফলাফল পাই, এবং অন্যান্যগুলিকে উপেক্ষা করা হয়।

```javascript
let p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "এক্সিকিউটেড p1");
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "এক্সিকিউট p2");
});

Promise.race([p1, p2]).then(function(value) {
    console.log(value); // "এক্সিকিউট p2"
});
```

### Promise.any() এবং Promise.race() ব্যাখ্যা সহ

#### **Promise.any():**

`Promise.any()` হল একটি নতুন Promise মেথড যা ES2021 (ES12) এ অন্তর্ভুক্ত হয়েছে। এটি একটি Promise রিটার্ন করে যা প্রথম সফল (fulfilled) Promise এর ফলাফল রিটার্ন করে। যদি কোনো Promise সফল না হয়, অর্থাৎ সবগুলো Promise রিজেক্টেড হয়, তাহলে এটি একটি `AggregateError` রিটার্ন করে, যা প্রত্যেকটি রিজেক্টেড Promise এর error ধারণ করে।

**ব্যবহার:**

```javascript
let p1 = Promise.reject("p1 ব্যর্থ হয়েছে");
let p2 = Promise.resolve("p2 সফল হয়েছে");
let p3 = Promise.resolve("p3 সফল হয়েছে");

Promise.any([p1, p2, p3])
  .then(value => {
    console.log(value); // "p2 সফল হয়েছে"
  })
  .catch(error => {
    console.log(error);
  });
```

**বিষয়গুলি মনে রাখার জন্য:**

- `Promise.any()` প্রথম সফল হওয়া Promise এর মান রিটার্ন করে।
- যদি সব Promise ব্যর্থ হয়, তাহলে এটি `AggregateError` রিটার্ন করে।

#### **Promise.race():**

`Promise.race()` একটি Promise রিটার্ন করে, যা সেই Promise-এর মান রিটার্ন করে যে Promise সবার আগে fulfilled বা rejected হয়।

**ব্যবহার:**

```javascript
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "p1 সফল হয়েছে");
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "p2 সফল হয়েছে");
});

Promise.race([p1, p2])
  .then(value => {
    console.log(value); // "p2 সফল হয়েছে"
  })
  .catch(error => {
    console.log(error);
  });
```

**বিষয়গুলি মনে রাখার জন্য:**

- `Promise.race()` প্রথম সম্পন্ন হওয়া (fulfilled বা rejected) Promise-এর ফলাফল প্রদান করে।
- এটি শুধুমাত্র প্রথম সম্পন্ন হওয়া Promise-এর ফলাফল প্রদান করে এবং অন্য Promise গুলিকে উপেক্ষা করে।

### **Promise.allSettled():**

`Promise.allSettled()` মেথডটি `Promise.all()` এর মতোই কিন্তু এর মধ্যে একটি পার্থক্য আছে। `Promise.allSettled()` Promise গুলি পূর্ণ (fulfilled) বা প্রত্যাখ্যান (rejected) হওয়া পর্যন্ত অপেক্ষা করে এবং তাদের স্টেট (fulfilled/rejected) এবং মান/কারণসহ একটি array রিটার্ন করে।

**ব্যবহার:**

```javascript
let p1 = Promise.resolve("p1 সফল হয়েছে");
let p2 = Promise.reject("p2 ব্যর্থ হয়েছে");
let p3 = Promise.resolve("p3 সফল হয়েছে");

Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
    // [
    //   { status: "fulfilled", value: "p1 সফল হয়েছে" },
    //   { status: "rejected", reason: "p2 ব্যর্থ হয়েছে" },
    //   { status: "fulfilled", value: "p3 সফল হয়েছে" }
    // ]
  });
```

**বিষয়গুলি মনে রাখার জন্য:**

- `Promise.allSettled()` সব Promise গুলি সম্পন্ন হওয়ার পর তাদের স্টেট (fulfilled/rejected) এবং মান/কারণসহ array রিটার্ন করে।
- এটি কখনো reject হয় না, কারণ এটি সব Promise এর ফলাফলকে একটি array তে রিটার্ন করে।

এই মেথডগুলি Promise-এর ক্ষমতা আরও প্রসারিত করে এবং বিভিন্ন পরিস্থিতিতে asynchronous কাজ পরিচালনা করতে সাহায্য করে।
