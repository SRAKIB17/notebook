### ধাপে ধাপে VPS সার্ভারে সাবডোমেইন সেটআপ (test.example.com)

VPS সার্ভারে Next.js অ্যাপ্লিকেশনের জন্য একটি সাবডোমেইন (যেমন, `test.example.com`) সেটআপ করার ধাপগুলো নিম্নরূপ:

### ধাপ ১: DNS কনফিগারেশন আপডেট

আপনার ডোমেইন রেজিস্ট্রারের প্যানেলে লগইন করুন এবং `test.example.com` এর জন্য একটি A রেকর্ড যোগ করুন যা আপনার VPS এর IP ঠিকানা নির্দেশ করে। উদাহরণস্বরূপ:

- **Name:** `test`
- **Type:** `A`
- **Value:** `your_vps_ip`

### ধাপ ২: Nginx কনফিগারেশন আপডেট

আপনার VPS সার্ভারে SSH এর মাধ্যমে লগইন করুন এবং Nginx কনফিগারেশন আপডেট করুন।

#### Nginx কনফিগারেশন ফাইল তৈরি

প্রথমে, Nginx এর জন্য একটি নতুন কনফিগারেশন ফাইল তৈরি করুন:

```bash
sudo nano /etc/nginx/sites-available/test.example.com
```

নিম্নলিখিত কনফিগারেশন যুক্ত করুন:

```nginx
server {
    listen 80;

    server_name test.example.com;

    location / {
        proxy_pass http://localhost:3001; # Ensure the port is different from your main domain if needed
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### সিমলিংক তৈরি করুন

এই কনফিগারেশনটি সক্রিয় করতে `sites-enabled` ডিরেক্টরিতে একটি সিমলিংক তৈরি করুন:

```bash
sudo ln -s /etc/nginx/sites-available/test.example.com /etc/nginx/sites-enabled/
```

#### Nginx রিলোড করুন

```bash
# Nginx কনফিগারেশন যাচাই করুন
sudo nginx -t

# Nginx রিলোড করুন
sudo systemctl reload nginx
```

### ধাপ ৩: Next.js অ্যাপ্লিকেশন চালু করুন

আপনার Next.js প্রজেক্টের নতুন ইনস্ট্যান্স সেটআপ করুন যা `test.example.com` সাবডোমেইনের জন্য চলবে। যদি এটি একই VPS-এ থাকে, তবে আপনাকে নতুন পোর্টে অ্যাপ্লিকেশনটি চালাতে হবে।

```bash
# আপনার Next.js প্রজেক্ট ডিরেক্টরিতে যান
cd /path/to/your/test-next-app

# নির্ভরশীলতাগুলি ইনস্টল করুন (যদি এখনও না করে থাকেন)
npm install

# প্রোডাকশন বিল্ড তৈরি করুন
npm run build

# প্রজেক্ট pm2 দিয়ে চালু করুন নতুন পোর্টে
pm2 start npm --name "test-next-app" -- start -- -p 3001
```

### ধাপ ৪: SSL সেটআপ (ঐচ্ছিক কিন্তু সুপারিশ করা হয়)

Let's Encrypt ব্যবহার করে `test.example.com` সাবডোমেইনের জন্য SSL সার্টিফিকেট ইনস্টল করুন:

```bash
# Certbot ইনস্টল করুন (যদি এখনও ইনস্টল না করা থাকে)
sudo apt install certbot python3-certbot-nginx

# SSL সার্টিফিকেট ইনস্টল করুন
sudo certbot --nginx -d test.example.com

# SSL সার্টিফিকেট পুনর্নবীকরণ যাচাই করুন
sudo certbot renew --dry-run
```

### উপসংহার

এখন আপনার Next.js অ্যাপ্লিকেশনটি `test.example.com` সাবডোমেইনে প্রোডাকশন মোডে চালু হওয়া উচিত এবং সহজেই অ্যাক্সেসযোগ্য হওয়া উচিত। এই ধাপগুলো অনুসরণ করে আপনি সহজেই একটি সাবডোমেইন সেটআপ করতে পারবেন এবং Next.js অ্যাপ্লিকেশন পরিচালনা করতে পারবেন।