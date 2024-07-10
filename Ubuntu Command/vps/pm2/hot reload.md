Next.js অ্যাপ্লিকেশনকে pm2 দিয়ে hot reload সহ চালানোর জন্য নিম্নলিখিত ধাপগুলি অনুসরণ করতে পারেন:

### পূর্বশর্ত

1. Node.js এবং npm ইনস্টল করা থাকতে হবে।
2. pm2 ইনস্টল করা থাকতে হবে।
3. Next.js অ্যাপ্লিকেশন তৈরি করা থাকতে হবে।

### ধাপ ১: pm2 ইনস্টলেশন

pm2 ইনস্টল করতে নিচের কমান্ডটি চালান:

```bash
sudo npm install -g pm2
```

### ধাপ ২: Next.js অ্যাপ্লিকেশন তৈরি করুন (যদি না করে থাকেন)

```bash
npx create-next-app my-next-app
cd my-next-app
```

### ধাপ ৩: ecosystem.config.js ফাইল তৈরি করুন

pm2 কনফিগারেশন ফাইল হিসেবে `ecosystem.config.js` তৈরি করুন এবং নিচের কনফিগারেশন লিখুন:

```javascript
module.exports = {
  apps: [
    {
      name: "my-next-app",
      script: "node_modules/next/dist/bin/next",
      args: "dev",
      watch: ["pages", "components", "styles"],
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

**নোট**: `watch` এপ্লিকেশনের যেসব ফোল্ডার বা ফাইল পরিবর্তন হতে পারে তা নির্দেশ করে। আপনি নিজের প্রয়োজন অনুসারে এটি পরিবর্তন করতে পারেন।

### ধাপ ৪: pm2 দিয়ে অ্যাপ্লিকেশন চালু করুন

```bash
pm2 start ecosystem.config.js --env development
```

এতে আপনার Next.js অ্যাপ্লিকেশন hot reload সহ চালু হবে।

### ধাপ ৫: প্রোডাকশন মোডে অ্যাপ্লিকেশন চালু করা

1. অ্যাপ্লিকেশন বিল্ড করুন:

```bash
    npm run build
```

2. pm2 দিয়ে প্রোডাকশন মোডে চালু করুন:

   ```bash
   pm2 start ecosystem.config.js --env production
   ```

### ধাপ ৬: pm2 এর স্থায়িত্ব এবং পুনরায় চালু করা

1. **pm2 কনফিগারেশন সংরক্ষণ করুন**:

```bash
   pm2 save
```

2. **সিস্টেম রিবুটের পর স্বয়ংক্রিয়ভাবে pm2 চালু করা**:

```bash
   pm2 startup
```

### ধাপ ৭: Nginx কনফিগারেশন (ঐচ্ছিক)

আপনার Next.js অ্যাপ্লিকেশনকে Nginx দিয়ে প্রক্সি করতে পারেন। এর জন্য নিম্নলিখিত ধাপগুলি অনুসরণ করুন:

1. **Nginx ইনস্টল করুন**:

```bash
   sudo apt update
   sudo apt install nginx
```

2. **Nginx কনফিগারেশন ফাইল তৈরি করুন**:

```bash
   sudo nano /etc/nginx/sites-available/example.com
```

3. **নিম্নলিখিত কনফিগারেশন যোগ করুন**:

```nginx
   server {
       listen 80;
       server_name example.com www.example.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }

       # Redirect www to non-www
       if ($host = 'www.example.com') {
           return 301 http://example.com$request_uri;
       }
   }
```

4. **সাইট সক্রিয় করুন**:

```bash
   sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```

5. **Nginx কনফিগারেশন পরীক্ষা করুন**:

```bash
   sudo nginx -t
```

6. **Nginx পুনরায় চালু করুন**:

```bash
   sudo systemctl restart nginx
```
