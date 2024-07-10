আপনি যদি একটি VPS সার্ভারে Next.js অ্যাপ্লিকেশন স্থাপন করতে চান এবং pm2 এবং Nginx ব্যবহার করে example.com ডোমেইনের মাধ্যমে এক্সেস করতে চান, তাহলে নিম্নলিখিত ধাপগুলি অনুসরণ করতে পারেন:

### পূর্বশর্ত

1. একটি VPS সার্ভার (উদাহরণস্বরূপ, Ubuntu 20.04)
2. আপনার ডোমেইন example.com
3. সার্ভারে SSH অ্যাক্সেস
4. Node.js এবং npm ইনস্টল করা
5. pm2 এবং Nginx ইনস্টল করা

### ধাপ ১: সার্ভারে Next.js অ্যাপ্লিকেশন আপলোড করা

1. **Next.js অ্যাপ্লিকেশন তৈরি করুন**:
   আপনার লোকাল মেশিনে Next.js অ্যাপ্লিকেশন তৈরি করুন বা প্রস্তুত থাকলে সেটি ব্যবহার করুন।

```bash
   npx create-next-app my-next-app
   cd my-next-app
```

2. **VPS এ লগ ইন করুন**:
   আপনার VPS সার্ভারে SSH ব্যবহার করে লগ ইন করুন।

```bash
   ssh your_username@your_vps_ip
```

3. **VPS এ অ্যাপ্লিকেশন আপলোড করুন**:
   আপনার Next.js অ্যাপ্লিকেশন ফাইলগুলি সার্ভারে আপলোড করুন (scp বা sftp ব্যবহার করতে পারেন)।

```bash
   scp -r my-next-app your_username@your_vps_ip:/path/to/destination
```

### ধাপ ২: Next.js অ্যাপ্লিকেশন রান করানো pm2 দিয়ে

1. **Node.js এবং npm ইনস্টল করুন** (যদি ইনস্টল না থাকে):

```bash
   curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   sudo apt install -y nodejs
```

2. **pm2 ইনস্টল করুন**:

```bash
   sudo npm install -g pm2
```

3. **Next.js অ্যাপ্লিকেশন তৈরি করুন**:

```bash
   cd /path/to/destination/my-next-app
   npm install
   npm run build
```

4. **pm2 দিয়ে অ্যাপ্লিকেশন চালু করুন**:

```bash
   pm2 start npm --name "my-next-app" -- start
```

5. **pm2 ইনস্ট্যান্স সংরক্ষণ করুন**:

```bash
   pm2 save
   pm2 startup
```

### ধাপ ৩: Nginx ইনস্টল ও কনফিগার করা

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

       listen [::]:80;
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

### ধাপ ৪: ডোমেইন কনফিগার করা

1. **ডোমেইন DNS সেটআপ**:
   আপনার ডোমেইনের DNS সেটিংসে একটি A রেকর্ড তৈরি করুন যা আপনার VPS এর IP ঠিকানা নির্দেশ করে। উদাহরণস্বরূপ:

```
   Type: A
   Name: @
   Value: your_vps_ip
```

```
   Type: A
   Name: www
   Value: your_vps_ip
```

### ধাপ ৫: HTTPS সেটআপ করা (ঐচ্ছিক কিন্তু সুপারিশকৃত)

1. **Certbot ইনস্টল করুন**:

```bash
   sudo apt install certbot python3-certbot-nginx
```

2. **SSL সার্টিফিকেট প্রাপ্ত করুন**:

```bash
   sudo certbot --nginx -d example.com -d www.example.com
```

3. **স্বয়ংক্রিয় নবায়ন নিশ্চিত করুন**:

```bash
   sudo systemctl status certbot.timer
```

এই ধাপগুলি অনুসরণ করে, আপনি আপনার Next.js অ্যাপ্লিকেশনকে pm2 এবং Nginx ব্যবহার করে একটি VPS সার্ভারে স্থাপন করতে পারবেন এবং example.com ডোমেইনের মাধ্যমে অ্যাক্সেস করতে পারবেন।
