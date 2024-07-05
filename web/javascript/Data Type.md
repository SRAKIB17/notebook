JavaScript-এর ডাটা টাইপগুলি প্রধানত দুইটি শ্রেণীতে বিভক্ত: প্রিমিটিভ ডাটা টাইপ এবং নন-প্রিমিটিভ (অবজেক্ট) ডাটা টাইপ। এখানে প্রতিটি ডাটা টাইপের একটি সংক্ষিপ্ত বিবরণ দেওয়া হলো:

### প্রিমিটিভ ডাটা টাইপ (Primitive Data Types)

1. **String**: টেক্সট ডেটা সংরক্ষণ করে।

    ```javascript
    let name = "Alice";
    ```

2. **Number**: সব ধরনের সংখ্যা সংরক্ষণ করে (integer এবং floating-point)।

    ```javascript
    let age = 30;
    let price = 9.99;
    ```

3. **Boolean**: দুইটি মানের একটি ধারণ করে: `true` বা `false`।

    ```javascript
    let isStudent = true;
    ```

4. **Undefined**: একটি ভ্যারিয়েবল যা ডিক্লেয়ার করা হয়েছে কিন্তু কোন মান দেওয়া হয়নি।

    ```javascript
    let x;
    console.log(x); // undefined
    ```

5. **Null**: একটি ইন্টেনশনাল খালি বা শূন্য মান।

    ```javascript
    let y = null;
    ```

6. **Symbol**: একটি ইউনিক এবং অপরিবর্তনীয় প্রিমিটিভ মান, যার সাধারণত অবজেক্ট প্রপার্টি আইডেন্টিফায়ার হিসেবে ব্যবহৃত হয়।

    ```javascript
    let sym = Symbol("description");
    ```

7. **BigInt**: বড় ইন্টিজার সংখ্যার জন্য ব্যবহৃত হয় যা Number টাইপের সীমা ছাড়িয়ে যায়।

    ```javascript
    let bigInt = 1234567890123456789012345678901234567890n;
    ```

### নন-প্রিমিটিভ (অবজেক্ট) ডাটা টাইপ (Non-Primitive (Object) Data Types)

1. **Object**: কমপ্লেক্স ডেটা এবং কার্যকারিতা সংরক্ষণ করতে ব্যবহৃত হয়। এতে কী-ভ্যালু জোড়া থাকে।

    ```javascript
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 25
    };
    ```

2. **Array**: এক ধরনের অবজেক্ট যা নম্বরড ইন্ডেক্স ব্যবহার করে একাধিক মান সংরক্ষণ করতে ব্যবহৃত হয়।

    ```javascript
    let colors = ["red", "green", "blue"];
    ```

3. **Function**: কোডের পুনঃব্যবহারযোগ্য ব্লক যা একটি নির্দিষ্ট কাজ সম্পাদন করে।

    ```javascript
    function greet(name) {
        return "Hello, " + name;
    }
    ```

4. **Date**: তারিখ এবং সময়ের সাথে কাজ করার জন্য বিল্ট-ইন অবজেক্ট।

    ```javascript
    let today = new Date();
    ```

5. **RegExp**: রেগুলার এক্সপ্রেশন, যা প্যাটার্ন-ম্যাচিং এবং টেক্সট ম্যানিপুলেশনের জন্য ব্যবহৃত হয়।

    ```javascript
    let pattern = /w3schools/i;
    ```

6. **Map**: কী-ভ্যালু জোড়া সংরক্ষণ করতে ব্যবহৃত হয় যেখানে কী যেকোনো ধরনের ডাটা টাইপ হতে পারে।

    ```javascript
    let map = new Map();
    map.set('key1', 'value1');
    map.set('key2', 'value2');
    ```

7. **Set**: এক্সক্লুসিভ মানের একটি সংগ্রহ, যেখানে কোন মান একাধিকবার থাকতে পারে না।

    ```javascript
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(2); // Duplicate values are ignored
    ```

### বিশেষ ডাটা টাইপ

1. **NaN (Not-a-Number)**: এটি একটি প্রপার্টি যা বোঝায় যে মানটি সংখ্যা নয়।

    ```javascript
    let result = "hello" / 2; // NaN
    ```
