### pm2 এর ecosystem.config.js ফাইলের পূর্ণাঙ্গ ডকুমেন্টেশন বাংলায়

`ecosystem.config.js` ফাইলটি pm2 দ্বারা ব্যবহৃত একটি কনফিগারেশন ফাইল, যা আপনার অ্যাপ্লিকেশনের প্রক্রিয়াগুলি পরিচালনা করার জন্য ব্যবহৃত হয়। এই ফাইলটি আপনার অ্যাপ্লিকেশনের জন্য সমস্ত সেটিংস এবং কনফিগারেশন সংরক্ষণ করে।

### উদাহরণ `ecosystem.config.js` ফাইল

```javascript
module.exports = {
  apps: [
    {
      name: "my-next-app",
      script: "node_modules/next/dist/bin/next",
      args: "dev",
      instances: 1,
      autorestart: true,
      watch: ["pages", "components", "styles"],
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        args: "start",
      },
    },
  ],
};
```

### কনফিগারেশন ফাইলের বিশদ ব্যাখ্যা

- **module.exports**: এটি ফাইলটিকে একটি মডিউল হিসেবে এক্সপোর্ট করে, যাতে pm2 এটি পড়তে পারে।

- **apps**: এটি অ্যাপ্লিকেশনের একটি অ্যারের মতো গঠন, যেখানে এক বা একাধিক অ্যাপ্লিকেশন কনফিগারেশন থাকতে পারে।

#### `apps` এর ভিতরে প্রতিটি অ্যাপ্লিকেশনের কনফিগারেশন

- **name**: অ্যাপ্লিকেশনের নাম। এটি pm2 তালিকায় অ্যাপ্লিকেশন সনাক্ত করতে ব্যবহৃত হবে।

  ```javascript
  name: "my-next-app",
  ```

- **script**: চালানোর জন্য প্রধান স্ক্রিপ্ট ফাইল বা কমান্ড। এখানে Next.js এর `next` স্ক্রিপ্টটি নির্দেশ করা হয়েছে।

  ```javascript
  script: "node_modules/next/dist/bin/next",
  ```

- **args**: কমান্ড লাইন আর্গুমেন্ট, যা `script` এর সাথে যুক্ত হবে। ডেভেলপমেন্ট মোডে `dev` এবং প্রোডাকশন মোডে `start` ব্যবহার করা হয়।

  ```javascript
  args: "dev",
  ```

- **instances**: চালানোর জন্য প্রক্রিয়ার সংখ্যা। `1` মানে একটি ইনস্ট্যান্স চালানো হবে। মাল্টি-কোর সিস্টেমে লোড ব্যালেন্সিংয়ের জন্য এটি সংখ্যা বৃদ্ধি করা যায়।

  ```javascript
  instances: 1,
  ```

- **autorestart**: প্রক্রিয়া ক্র্যাশ করলে স্বয়ংক্রিয়ভাবে পুনরায় চালু হবে কিনা। `true` রাখলে প্রক্রিয়া ক্র্যাশ করলে স্বয়ংক্রিয়ভাবে পুনরায় চালু হবে।

  ```javascript
  autorestart: true,
  ```

- **watch**: কোন ফাইল বা ডিরেক্টরি পর্যবেক্ষণ করা হবে। এখানে `pages`, `components`, এবং `styles` ডিরেক্টরি উল্লেখ করা হয়েছে। যদি এসব ডিরেক্টরির কোন পরিবর্তন ঘটে তবে অ্যাপ্লিকেশনটি পুনরায় চালু হবে।

  ```javascript
  watch: ["pages", "components", "styles"],
  ```

- **max_memory_restart**: নির্দিষ্ট মেমোরি সীমা অতিক্রম করলে প্রক্রিয়াটি পুনরায় চালু হবে। এখানে `1G` মানে ১ গিগাবাইট মেমোরি।

  ```javascript
  max_memory_restart: "1G",
  ```

- **env**: ডিফল্ট পরিবেশ ভেরিয়েবল। এখানে ডেভেলপমেন্ট মোডের জন্য `NODE_ENV` সেট করা হয়েছে।

  ```javascript
  env: {
    NODE_ENV: "development",
  },
  ```

- **env_production**: প্রোডাকশন পরিবেশের জন্য নির্দিষ্ট ভেরিয়েবল। এখানে প্রোডাকশন মোডে `NODE_ENV` এবং আর্গুমেন্ট `start` সেট করা হয়েছে।

  ```javascript
  env_production: {
    NODE_ENV: "production",
    args: "start",
  },
  ```

### পূর্ণ `ecosystem.config.js` ফাইলের উদাহরণ

```javascript
module.exports = {
  apps: [
    {
      name: "my-next-app",
      script: "node_modules/next/dist/bin/next",
      args: "dev",
      instances: 1,
      autorestart: true,
      watch: ["pages", "components", "styles"],
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        args: "start",
      },
    },
  ],
};
```

### pm2 দিয়ে Next.js অ্যাপ্লিকেশন চালানোর ধাপসমূহ

1. **pm2 ইনস্টল করুন**:

   ```bash
   sudo npm install -g pm2
   ```

2. **Next.js অ্যাপ্লিকেশন তৈরি করুন** (যদি না থাকে):

   ```bash
   npx create-next-app my-next-app
   cd my-next-app
   ```

3. **ecosystem.config.js ফাইল তৈরি করুন** এবং উপরের উদাহরণ কনফিগারেশন যোগ করুন।

4. **pm2 দিয়ে অ্যাপ্লিকেশন চালু করুন**:

   ```bash
   pm2 start ecosystem.config.js --env development
   ```

5. **প্রোডাকশন মোডে চালানোর জন্য**:
   - অ্যাপ্লিকেশন বিল্ড করুন:

     ```bash
     npm run build
     ```

   - pm2 দিয়ে প্রোডাকশন মোডে চালু করুন:

     ```bash
     pm2 start ecosystem.config.js --env production
     ```

### pm2 এর অন্যান্য গুরুত্বপূর্ণ কমান্ডসমূহ

1. **চালু করা প্রক্রিয়ার তালিকা দেখতে**:

   ```bash
   pm2 list
   ```

2. **প্রক্রিয়া থামানো**:

   ```bash
   pm2 stop my-next-app
   ```

3. **প্রক্রিয়া পুনরায় চালানো**:

   ```bash
   pm2 restart my-next-app
   ```

4. **প্রক্রিয়া মুছে ফেলা**:

   ```bash
   pm2 delete my-next-app
   ```

5. **লগ দেখুন**:

   ```bash
   pm2 logs
   ```

6. **নির্দিষ্ট প্রক্রিয়ার লগ দেখুন**:

   ```bash
   pm2 logs my-next-app
   ```

7. **প্রক্রিয়া মনিটর করুন**:

   ```bash
   pm2 monit
   ```

8. **pm2 কনফিগারেশন সংরক্ষণ করুন**:

   ```bash
   pm2 save
   ```

9. **সিস্টেম রিবুটের পর স্বয়ংক্রিয়ভাবে pm2 চালু করা**:

   ```bash
   pm2 startup
   ```
