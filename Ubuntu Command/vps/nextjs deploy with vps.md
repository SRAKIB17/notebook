### ধাপে ধাপে VPS সার্ভারে Next.js এবং Node.js সেটআপ (ডোমেইন: example.com)

আপনার VPS সার্ভারে Next.js এবং Node.js সেটআপ করতে এবং example.com ডোমেইন কনফিগার করতে নিম্নলিখিত ধাপগুলো অনুসরণ করুন:

### ধাপ ১: সার্ভারে লগইন করুন

প্রথমে, আপনার VPS সার্ভারে SSH এর মাধ্যমে লগইন করুন:

```bash
ssh username@your_vps_ip
```

### ধাপ ২: Node.js ইনস্টল করুন

Node.js এবং npm ইনস্টল করার জন্য nvm (Node Version Manager) ব্যবহার করুন:

```bash
# nvm ইনস্টল করুন
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

# nvm লোড করুন
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# nvm এবং node ইনস্টলেশন যাচাই করুন
command -v nvm

# Node.js এর সর্বশেষ স্থিতিশীল সংস্করণ ইনস্টল করুন
nvm install --lts

# ইনস্টলেশন যাচাই করুন
node -v
npm -v
```

### ধাপ ৩: Next.js প্রজেক্ট সেটআপ

আপনার Next.js প্রজেক্ট তৈরি করুন বা একটি বিদ্যমান প্রজেক্ট ক্লোন করুন। এখানে একটি নতুন Next.js প্রজেক্ট তৈরি করার উদাহরণ দেওয়া হল:

```bash
# আপনার প্রজেক্ট ডিরেক্টরিতে যান
cd /path/to/your/projects

# একটি নতুন Next.js প্রজেক্ট তৈরি করুন
npx create-next-app@latest my-next-app

# প্রজেক্ট ডিরেক্টরিতে যান
cd my-next-app

# নির্ভরশীলতাগুলি ইনস্টল করুন
npm install
```

### ধাপ ৪: প্রোডাকশন বিল্ড এবং রান

Next.js প্রজেক্ট প্রোডাকশন মোডে রান করার জন্য প্রোডাকশন বিল্ড তৈরি করুন:

```bash
# প্রোডাকশন বিল্ড তৈরি করুন
npm run build

# সার্ভার শুরু করুন
npm start
```

### ধাপ ৫: PM2 দিয়ে প্রজেক্ট ম্যানেজ করুন

PM2 একটি প্রোডাকশন প্রসেস ম্যানেজার যা Node.js অ্যাপ্লিকেশনগুলিকে পরিচালনা এবং মনিটর করতে ব্যবহৃত হয়। এটি ইনস্টল করুন:

```bash
# pm2 ইনস্টল করুন
npm install -g pm2

# আপনার Next.js প্রজেক্ট pm2 দিয়ে শুরু করুন
pm2 start npm --name "my-next-app" -- start

# pm2 প্রজেক্ট তালিকা দেখুন
pm2 ls
```

### ধাপ ৬: Nginx ইনস্টল এবং কনফিগার করুন

Nginx ইনস্টল এবং কনফিগার করুন যাতে এটি আপনার Next.js অ্যাপ্লিকেশনের জন্য একটি রিভার্স প্রক্সি হিসাবে কাজ করে:

```bash
# Nginx ইনস্টল করুন
sudo apt update
sudo apt install nginx

# Nginx কনফিগারেশন সম্পাদনা করুন
sudo nano /etc/nginx/sites-available/default
```

নিম্নলিখিত কনফিগারেশন যোগ করুন:

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
}
```

কনফিগারেশন ফাইল সংরক্ষণ এবং বন্ধ করুন। তারপর Nginx পুনরায় লোড করুন:

```bash
# Nginx কনফিগারেশন যাচাই করুন
sudo nginx -t

# Nginx রিলোড করুন
sudo systemctl restart nginx
```

### ধাপ ৭: ফায়ারওয়াল নিয়ম সেটআপ করুন

আপনার ফায়ারওয়ালে HTTP এবং HTTPS ট্রাফিকের জন্য নিয়ম যোগ করুন:

```bash
# HTTP এবং HTTPS ট্রাফিক অনুমোদন করুন
sudo ufw allow 'Nginx Full'

# UFW স্ট্যাটাস চেক করুন
sudo ufw status
```

### ধাপ ৮: ডোমেইন নাম কনফিগার করুন

আপনার ডোমেইন রেজিস্ট্রার প্যানেলে লগইন করুন এবং `example.com` এর জন্য একটি A রেকর্ড তৈরি করুন যা আপনার VPS এর IP ঠিকানা নির্দেশ করে।

### ধাপ ৯: SSL সেটআপ (ঐচ্ছিক কিন্তু সুপারিশ করা হয়)

Let's Encrypt ব্যবহার করে আপনার ডোমেইনের জন্য SSL সার্টিফিকেট ইনস্টল করুন:

```bash
# Certbot ইনস্টল করুন
sudo apt install certbot python3-certbot-nginx

# SSL সার্টিফিকেট ইনস্টল করুন
sudo certbot --nginx -d example.com -d www.example.com

# SSL সার্টিফিকেট পুনর্নবীকরণ যাচাই করুন
sudo certbot renew --dry-run
```

### উপসংহার

এখন আপনার Next.js অ্যাপ্লিকেশনটি প্রোডাকশন মোডে চালু হওয়া উচিত এবং আপনার ডোমেইন `example.com` এ অ্যাক্সেসযোগ্য হওয়া উচিত। এই ধাপগুলো অনুসরণ করে আপনি সহজেই আপনার VPS সার্ভারে Next.js এবং Node.js সেটআপ করতে পারবেন।