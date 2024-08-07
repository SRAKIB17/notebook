### Ubuntu তে `ufw` ব্যবহারের সম্পূর্ণ ডকুমেন্টেশন বাংলায়

**Uncomplicated Firewall (ufw)** হল Ubuntu-তে ব্যবহৃত একটি সরল এবং শক্তিশালী ফায়ারওয়াল ম্যানেজমেন্ট টুল। এটি iptables এর জন্য একটি ফ্রন্ট-এন্ড হিসাবে কাজ করে এবং ব্যবহারকারীদের জন্য ফায়ারওয়াল নিয়ন্ত্রণ করা সহজ করে তোলে।

### UFW ইনস্টলেশন

Ubuntu তে `ufw` সাধারণত পূর্ব-ইনস্টল করা থাকে। যদি ইনস্টল করা না থাকে, তাহলে আপনি নিম্নলিখিত কমান্ড দিয়ে ইনস্টল করতে পারেন:

```bash
sudo apt update
sudo apt install ufw
```

### UFW এর মৌলিক ব্যবহার

1. **UFW সক্রিয় করা:**

   ```bash
   sudo ufw enable
   ```

2. **UFW অক্ষম করা:**

   ```bash
   sudo ufw disable
   ```

3. **UFW এর অবস্থা দেখা:**

   ```bash
   sudo ufw status
   ```

4. **UFW এর বিস্তারিত অবস্থা দেখা:**

   ```bash
   sudo ufw status verbose
   ```

### নিয়ম যোগ করা

1. **পোর্ট খুলুন (অধিকাংশ সার্ভিসের জন্য):**

   ```bash
   sudo ufw allow port_number
   ```

   উদাহরণস্বরূপ, HTTP এর জন্য পোর্ট 80 খুলতে:

   ```bash
   sudo ufw allow 80
   ```

2. **পোর্ট বন্ধ করুন:**

   ```bash
   sudo ufw deny port_number
   ```

   উদাহরণস্বরূপ, পোর্ট 80 বন্ধ করতে:

   ```bash
   sudo ufw deny 80
   ```

3. **নির্দিষ্ট সার্ভিসের জন্য নিয়ম যোগ করা (নাম দ্বারা):**

   ```bash
   sudo ufw allow service_name
   ```

   উদাহরণস্বরূপ, SSH সার্ভিসের জন্য নিয়ম যোগ করতে:

   ```bash
   sudo ufw allow ssh
   ```

4. **নির্দিষ্ট আইপি থেকে পোর্টে প্রবেশাধিকার দিতে:**

   ```bash
   sudo ufw allow from ip_address to any port port_number
   ```

   উদাহরণস্বরূপ, 192.168.1.100 থেকে পোর্ট 22 এ প্রবেশাধিকার দিতে:

   ```bash
   sudo ufw allow from 192.168.1.100 to any port 22
   ```

### নিয়ম মুছে ফেলা

1. **নিয়ম মুছে ফেলার জন্য প্রথমে নিয়মের সংখ্যা বের করুন:**

   ```bash
   sudo ufw status numbered
   ```

   এটি সকল নিয়মের একটি তালিকা দেখাবে, যেখানে প্রতিটি নিয়মের সামনে একটি সংখ্যা থাকবে।

2. **নির্দিষ্ট নিয়ম মুছে ফেলা:**

   ```bash
   sudo ufw delete rule_number
   ```

   উদাহরণস্বরূপ, যদি আপনাকে ৩ নম্বর নিয়ম মুছে ফেলতে হয়:

   ```bash
   sudo ufw delete 3
   ```

### লগিং সক্রিয়/অক্ষম করা

1. **লগিং সক্রিয় করা:**

   ```bash
   sudo ufw logging on
   ```

2. **লগিং অক্ষম করা:**

   ```bash
   sudo ufw logging off
   ```

### ডিফল্ট নীতিমালা সেট করা

1. **ডিফল্ট পলিসি (ইনকামিং সংযোগ বন্ধ):**

   ```bash
   sudo ufw default deny incoming
   ```

2. **ডিফল্ট পলিসি (আউটগোয়িং সংযোগ অনুমোদিত):**

   ```bash
   sudo ufw default allow outgoing
   ```

### অন্যান্য উদাহরণ

1. **নির্দিষ্ট সাবনেট থেকে অনুমোদিত:**

   ```bash
   sudo ufw allow from 192.168.1.0/24
   ```

2. **নির্দিষ্ট ইন্টারফেসের মাধ্যমে অনুমোদিত:**

   ```bash
   sudo ufw allow in on eth0 to any port 80
   ```

3. **একাধিক পোর্ট খুলুন:**

   ```bash
   sudo ufw allow 3000:3005/tcp
   ```

   উপরের উদাহরণটি পোর্ট 3000 থেকে 3005 পর্যন্ত TCP পোর্ট খুলে দেবে।

### সার্ভিস রিলোড করা

কোনো পরিবর্তনের পরে UFW এর সেটিংস রিলোড করতে:

```bash
sudo ufw reload
```

### সার্ভিস রিসেট করা

সব নিয়ম রিসেট করে ডিফল্ট অবস্থায় ফিরিয়ে আনতে:

```bash
sudo ufw reset
```

### উপসংহার

`ufw` ব্যবহারের মাধ্যমে আপনি সহজেই আপনার সিস্টেমের ফায়ারওয়াল নিয়ন্ত্রণ করতে পারবেন। এটি আপনাকে নিরাপত্তা বজায় রাখতে সাহায্য করবে এবং নেটওয়ার্ক সংযোগ পরিচালনা করতে আরও সুবিধাজনক করবে।