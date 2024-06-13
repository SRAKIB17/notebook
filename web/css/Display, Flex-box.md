### ডিসপ্লে এবং ফ্লেক্সবক্স (Flexbox)

#### ডিসপ্লে প্রপার্টি (Display Property)

`display` প্রপার্টি কোনো উপাদানের প্রদর্শন আচরণ (রেন্ডারিং বক্সের ধরন) নির্ধারণ করে।

#### সাধারণ মান (Common Values)

- **`block`**: উপাদানটি ব্লক উপাদান হিসেবে প্রদর্শিত হয় (যেমন: `<div>`, `<p>`).
- **`inline`**: উপাদানটি ইনলাইন উপাদান হিসেবে প্রদর্শিত হয় (যেমন: `<span>`, `<a>`).
- **`inline-block`**: উপাদানটি ইনলাইন-লেভেল ব্লক কন্টেইনার হিসেবে প্রদর্শিত হয়।
- **`flex`**: উপাদানটি একটি ফ্লেক্স কন্টেইনার হয়ে যায়, যা ফ্লেক্সবক্স প্রপার্টি ব্যবহার করতে সক্ষম করে।
- **`inline-flex`**: উপাদানটি ইনলাইন-লেভেল ফ্লেক্স কন্টেইনার হয়ে যায়।
- **`grid`**: উপাদানটি একটি গ্রিড কন্টেইনার হয়ে যায়, যা গ্রিড লেআউট প্রপার্টি ব্যবহার করতে সক্ষম করে।
- **`none`**: উপাদানটি প্রদর্শিত হয় না।

#### উদাহরণ (Example)

```html
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ডিসপ্লে প্রপার্টি উদাহরণ</title>
    <style>
        .block-element {
            display: block;
            background-color: #d3d3d3;
            padding: 10px;
            margin: 5px 0;
        }

        .inline-element {
            display: inline;
            background-color: #add8e6;
            padding: 5px;
            margin: 5px;
        }

        .inline-block-element {
            display: inline-block;
            background-color: #90ee90;
            padding: 10px;
            margin: 5px;
        }

        .flex-container {
            display: flex;
            background-color: #f0e68c;
            padding: 10px;
        }

        .inline-flex-container {
            display: inline-flex;
            background-color: #dda0dd;
            padding: 10px;
        }

        .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            background-color: #ffe4b5;
            padding: 10px;
        }

        .grid-item {
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div class="block-element">ব্লক উপাদান</div>
    <span class="inline-element">ইনলাইন উপাদান</span>
    <span class="inline-element">আরেকটি ইনলাইন উপাদান</span>
    <div class="inline-block-element">ইনলাইন-ব্লক উপাদান</div>
    <div class="flex-container">
        <div>ফ্লেক্স আইটেম 1</div>
        <div>ফ্লেক্স আইটেম 2</div>
        <div>ফ্লেক্স আইটেম 3</div>
    </div>
    <div class="inline-flex-container">
        <div>ইনলাইন-ফ্লেক্স আইটেম 1</div>
        <div>ইনলাইন-ফ্লেক্স আইটেম 2</div>
        <div>ইনলাইন-ফ্লেক্স আইটেম 3</div>
    </div>
    <div class="grid-container">
        <div class="grid-item">গ্রিড আইটেম 1</div>
        <div class="grid-item">গ্রিড আইটেম 2</div>
        <div class="grid-item">গ্রিড আইটেম 3</div>
    </div>
</body>
</html>
```

### ফ্লেক্সবক্স (Flexbox)

ফ্লেক্সবক্স লেআউট মডেল আপনাকে ফ্লেক্সিবল এবং কার্যকর লেআউট স্ট্রাকচার ডিজাইন করতে সাহায্য করে ফ্লোট বা পজিশনিং ব্যবহার না করেও।

#### ফ্লেক্স কন্টেইনার প্রপার্টি (Flex Container Properties)

1. **`display: flex;`**: একটি ফ্লেক্স কন্টেইনার সংজ্ঞায়িত করে।
2. **`flex-direction`**: ফ্লেক্স আইটেমগুলির দিক নির্ধারণ করে।
    - `row` (ডিফল্ট): বাম থেকে ডান।
    - `row-reverse`: ডান থেকে বাম।
    - `column`: উপর থেকে নিচ।
    - `column-reverse`: নিচ থেকে উপর।
3. **`flex-wrap`**: ফ্লেক্স আইটেমগুলি মোড়ানো উচিত কিনা তা নির্ধারণ করে।
    - `nowrap` (ডিফল্ট): একক লাইন।
    - `wrap`: একাধিক লাইন।
    - `wrap-reverse`: উল্টো একাধিক লাইন।
4. **`flex-flow`**: `flex-direction` এবং `flex-wrap` এর শর্টহ্যান্ড।
5. **`justify-content`**: মূল অক্ষ বরাবর সারিবদ্ধকরণ নির্ধারণ করে।
    - `flex-start` (ডিফল্ট): আইটেমগুলি শুরুতে সজ্জিত।
    - `flex-end`: আইটেমগুলি শেষে সজ্জিত।
    - `center`: আইটেমগুলি কেন্দ্রীভূত।
    - `space-between`: আইটেমগুলি সমানভাবে বিতরণ করা হয়েছে; প্রথম আইটেমটি শুরুতে, শেষ আইটেমটি শেষে।
    - `space-around`: আইটেমগুলি সমানভাবে বিতরণ করা হয়েছে এবং তাদের চারপাশে সমান স্থান রয়েছে।
    - `space-evenly`: আইটেমগুলি এমনভাবে বিতরণ করা হয়েছে যাতে যে কোনও দুটি আইটেমের মধ্যে ব্যবধান (এবং প্রান্তে স্থান) সমান হয়।
6. **`align-items`**: ক্রস অক্ষ বরাবর ডিফল্ট আচরণ নির্ধারণ করে।
    - `stretch` (ডিফল্ট): কন্টেইনারটি পূরণ করতে প্রসারিত।
    - `flex-start`: আইটেমগুলির ক্রস-স্টার্ট মার্জিন প্রান্ত ক্রস-স্টার্ট লাইনে স্থাপন করা হয়।
    - `flex-end`: আইটেমগুলির ক্রস-এন্ড মার্জিন প্রান্ত ক্রস-এন্ড লাইনে স্থাপন করা হয়।
    - `center`: আইটেমগুলি ক্রস-অক্ষ বরাবর কেন্দ্রীভূত।
    - `baseline`: আইটেমগুলি এমনভাবে সারিবদ্ধ করা হয়েছে যেন তাদের বেসলাইনগুলি সামঞ্জস্যপূর্ণ।
7. **`align-content`**: লাইনের মধ্যে ফাঁকা স্থান কীভাবে বিতরণ করা হয় তা নির্ধারণ করে।
    - `stretch` (ডিফল্ট): লাইনের অবশিষ্ট স্থান পূরণ করার জন্য প্রসারিত।
    - `flex-start`: কন্টেইনারের শুরুতে প্যাক করা।
    - `flex-end`: কন্টেইনারের শেষে প্যাক করা।
    - `center`: লাইনের কেন্দ্রীভূত।
    - `space-between`: লাইনগুলি সমানভাবে বিতরণ করা হয়েছে; প্রথম লাইন শুরুতে, শেষ লাইন শেষে।
    - `space-around`: লাইনগুলি সমানভাবে বিতরণ করা হয়েছে এবং তাদের চারপাশে সমান স্থান রয়েছে।
    - `space-evenly`: লাইনগুলি এমনভাবে বিতরণ করা হয়েছে যাতে যে কোনও দুটি লাইনের মধ্যে ব্যবধান (এবং প্রান্তে স্থান) সমান হয়।

#### ফ্লেক্স আইটেম প্রপার্টি (Flex Item Properties)

1. **`order`**: ফ্লেক্স আইটেমগুলির ক্রম নির্ধারণ করে।
2. **`flex-grow`**: প্রয়োজন হলে একটি ফ্লেক্স আইটেম কতটা বৃদ্ধি পাবে তা নির্ধারণ করে।
3. **`flex-shrink`**: প্রয়োজন হলে একটি ফ্লেক্স আইটেম কতটা সঙ্কুচিত হবে তা নির্ধারণ করে।
4. **`flex-basis`**: অবশিষ্ট স্থান বিতরণ করার আগে একটি উপাদানের ডিফল্ট আকার নির্ধারণ করে।
5. **`flex`**: `flex-grow`, `flex-shrink`, এবং `flex-basis` এর শর্টহ্যান্ড।
6. **`align-self`**: নির্দিষ্ট ফ্লেক্স আইটেমের জন্য `align-items` মানকে ওভাররাইড করে।

#### উদাহরণ (Example)

```html
আরো পূর্ণ উদাহরণ দেওয়া হলো:

```html
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ফ্লেক্সবক্স উদাহরণ</title>
    <style>
        .flex-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            align-content: space-between;
            height: 300px; /* ভিজ্যুয়ালাইজেশনের জন্য */
            border: 2px solid #000; /* ভিজ্যুয়ালাইজেশনের জন্য */
        }

        .flex-item {
            width: 100px;
            height: 100px;
            margin: 10px;
            background-color: #3498db;
            color: #fff;
            text-align: center;
            line-height: 100px;
            font-family: Arial, sans-serif;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">আইটেম 1</div>
        <div class="flex-item">আইটেম 2</div>
        <div class="flex-item">আইটেম 3</div>
        <div class="flex-item">আইটেম 4</div>
        <div class="flex-item">আইটেম 5</div>
    </div>
</body>
</html>
```

এই উদাহরণে, `.flex-container` ক্লাস একটি ফ্লেক্স কন্টেইনার হিসেবে নির্ধারণ করা হয়েছে। এটি অন্যান্য ফ্লেক্স আইটেমগুলির জন্য একটি ফ্লেক্সিবল লেআউট সরবরাহ করে। `.flex-item` ক্লাস ফ্লেক্স আইটেম হিসেবে নির্ধারণ করা হয়েছে, যা স্পেসিফিক সাইজ, রঙ এবং লেআউট প্রয়োজনীয় স্টাইল সেট করে।

এখানে, ফ্লেক্স কন্টেইনারের সকল আইটেম হাইট এবং উচ্চতা একই হয়েছে, যা তাদের সমতলে আলাদা করে রাখে। যদিও আমি প্রদর্শিত করছি কিছু পয়েন্ট আপনি কিভাবে ফ্লেক্স বক্সের দ্বারা ডিজাইন করতে পারেন, যেহেতু এটি ফ্লেক্সিবল।

ফ্লেক্সবক্স এবং ফ্লেক্সবক্স আইটেম প্রপার্টি ব্যবহার করে সাজানো হয়েছে যেটি আপনাকে একটি সম্পূর্ণ ফ্লেক্সিবল লেআউট ডিজাইন করতে সাহায্য করে। ফ্লেক্সবক্স দ্বারা স্থির, ব্যক্তিগত এবং প্রয়োজনীয় অবস্থানে আইটেমগুলি সাজানো যায়, যা অন্যান্য লেআউট প্রয়োজনীয় বৈশিষ্ট্য ব্যবহার না করে সম্পূর্ণ অপ্টিমাইজড।
