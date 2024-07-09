আপনি যদি একই সার্ভারে একাধিক ডোমেইন (`www.example.com` এবং `example.com`) সেট করতে চান এবং তাদের উভয়ই একই অ্যাপ্লিকেশনের জন্য ব্যবহার করতে চান, তাহলে এটি করার জন্য আপনার নিম্নলিখিত কনফিগারেশন অনুসরণ করতে হবে:

### পদক্ষেপ ১: Nginx কনফিগারেশন সম্পাদনা

1. **কনফিগারেশন ফাইল সম্পাদনা**:

আপনার Nginx কনফিগারেশন ফাইল সম্পাদনা করুন:

```bash
sudo nano /etc/nginx/sites-available/example.com
```

2. **Nginx কনফিগার করুন**:

উপরের উদাহরণের মতো কনফিগার করুন যেখানে সমস্ত অনুরোধ `example.com` থেকে আপনার Next.js অ্যাপ্লিকেশনে পথনির্দেশনা করবেন:

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    location / {
        proxy_pass http://localhost:3000; # Assuming Next.js runs on localhost:3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Add additional configurations as needed
}
```

### পদক্ষেপ ২: রিডাইরেক্ট যোগ করুন

1. **কনফিগারেশন ফাইল সম্পাদনা**:

`www.example.com` এর জন্য একটি আলাদা Nginx কনফিগারেশন ফাইল তৈরি করুন যেখানে `example.com` এ স্বয়ংক্রিয়ভাবে পথনির্দেশনা করা হবে:

```bash
sudo nano /etc/nginx/sites-available/www.example.com
```

2. **Nginx কনফিগার করুন**:

```nginx
server {
    listen 80;
    server_name www.example.com;

    return 301 $scheme://example.com$request_uri;
}
```

### পদক্ষেপ ৩: কনফিগারেশন সক্রিয় করুন এবং পরীক্ষা করুন

1. **সাইট সক্রিয় করুন**:

সাইট কনফিগারেশন সক্রিয় করতে একটি সিম্বলিক লিঙ্ক তৈরি করুন:

```bash
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/www.example.com /etc/nginx/sites-enabled/
```

2. **Nginx কনফিগারেশন পরীক্ষা করুন**:

কনফিগারেশনের সিনট্যাক্স ত্রুটি নেই তা পরীক্ষা করুন:

```bash
sudo nginx -t
```

3. **Nginx পুনরায় চালানো**:

পরিবর্তনগুলি প্রয়োগ করতে Nginx পুনরায় চালানো করুন:

```bash
sudo systemctl restart nginx
```

### অতিরিক্ত নোট

- আপনি যদি সুপারিশ করেন, তাহলে SSL/TLS সার্টিফিকেট ব্যবহার করুন এবং HTTPS সেটআপ করুন নিশ্চিত হতে।
- কনফিগারেশনের সমস্ত প্লেসহোল্ডার (`example.com`, `www.example.com`, `localhost:3000` ইত্যাদি) আপনার ব্যবহারিত সংজ্ঞানামত্তার মতো সংশোধন করুন।

এই পদক্ষেপগুলি অনুসরণ করে, আপনি নিশ্চিত হতে পারবেন যে আপনার সার্ভারে উভয় ডোমেইন (`www.example.com` এবং `example.com`) সঠিকভাবে কনফিগার করা হয়েছে এবং পথনির্দেশিত হচ্ছে ঠিকমতো।