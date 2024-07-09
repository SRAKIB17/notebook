MySQL-এ নির্দিষ্ট কয়েকটি IP ঠিকানা থেকে রিমোট অ্যাক্সেস অনুমোদন করার জন্য আপনি নিচের ধাপগুলি অনুসরণ করতে পারেন। এখানে আমরা কনফিগারেশন ফাইল এবং MySQL ইউজার প্রিভিলেজ উভয়ই কনফিগার করব।

### ধাপ ১: MySQL কনফিগারেশন ফাইল এডিট করা

MySQL সার্ভারকে নির্দিষ্ট IP ঠিকানা থেকে সংযোগ গ্রহণ করার অনুমতি দিতে হলে MySQL কনফিগারেশন ফাইলটি এডিট করুন:

```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

`mysqld.cnf` ফাইলে `bind-address` সেকশন খুঁজুন এবং তার মান পরিবর্তন করুন:

```ini
bind-address = 0.0.0.0
```

`0.0.0.0` সেট করলে MySQL সার্ভার সকল IP ঠিকানা থেকে সংযোগ গ্রহণ করতে পারবে। এটি সকল IP থেকে সংযোগের অনুমতি দেয়।

ফাইলটি সেভ করুন এবং বন্ধ করুন (Ctrl+X, তারপর Y এবং এন্টার চাপুন)।

### ধাপ ২: MySQL সার্ভার রিস্টার্ট করা

কনফিগারেশন পরিবর্তনের পরে MySQL সার্ভার রিস্টার্ট করুন:

```bash
sudo systemctl restart mysql
```

### ধাপ ৩: নির্দিষ্ট IP ঠিকানার জন্য ইউজার তৈরি করা বা অনুমতি দেয়া

MySQL-এ নির্দিষ্ট IP ঠিকানা থেকে রিমোট অ্যাক্সেসের জন্য ইউজার তৈরি করতে MySQL সার্ভারে লগইন করুন:

```bash
sudo mysql -u root -p
```

প্রথমে নির্দিষ্ট IP ঠিকানার জন্য একটি ইউজার তৈরি করুন এবং তাকে প্রয়োজনীয় প্রিভিলেজ প্রদান করুন। ধরুন আপনার ইউজারনেম `remote_user`, পাসওয়ার্ড `user_password`, এবং ডাটাবেস `example_database`।

প্রথম IP ঠিকানার জন্য ইউজার তৈরি:

```sql
CREATE USER 'remote_user'@'192.168.1.100' IDENTIFIED BY 'user_password';
GRANT ALL PRIVILEGES ON example_database.* TO 'remote_user'@'192.168.1.100';
```

দ্বিতীয় IP ঠিকানার জন্য ইউজার তৈরি:

```sql
CREATE USER 'remote_user'@'192.168.1.101' IDENTIFIED BY 'user_password';
GRANT ALL PRIVILEGES ON example_database.* TO 'remote_user'@'192.168.1.101';
```

তৃতীয় IP ঠিকানার জন্য ইউজার তৈরি:

```sql
CREATE USER 'remote_user'@'203.0.113.50' IDENTIFIED BY 'user_password';
GRANT ALL PRIVILEGES ON example_database.* TO 'remote_user'@'203.0.113.50';
```

প্রিভিলেজ টেবিল রিলোড করুন:

```sql
FLUSH PRIVILEGES;
```

### ধাপ ৪: ফায়ারওয়াল কনফিগার করা

আপনার সার্ভারে ফায়ারওয়াল কনফিগার করুন যাতে MySQL পোর্ট (সাধারণত 3306) নির্দিষ্ট IP ঠিকানা থেকে খোলা থাকে। 

`ufw` ব্যবহার করলে:

```bash
sudo ufw allow from 192.168.1.100 to any port 3306
sudo ufw allow from 192.168.1.101 to any port 3306
sudo ufw allow from 203.0.113.50 to any port 3306
```

### ধাপ ৫: রিমোট থেকে সংযোগ পরীক্ষা করা

আপনার নির্দিষ্ট মেশিন থেকে MySQL সার্ভারে সংযোগ করার চেষ্টা করুন:

```bash
mysql -u remote_user -p -h your_vps_ip
```

আপনার পাসওয়ার্ড টাইপ করুন এবং এন্টার চাপুন। যদি সবকিছু সঠিকভাবে করা থাকে, তাহলে আপনি MySQL সার্ভারে লগইন করতে সক্ষম হবেন।

এই ধাপগুলি অনুসরণ করলে আপনি MySQL সার্ভারে নির্দিষ্ট কয়েকটি IP ঠিকানা থেকে রিমোট অ্যাক্সেস অনুমোদন করতে পারবেন। যদি আরও কোনো প্রশ্ন থাকে, জানাতে পারেন!