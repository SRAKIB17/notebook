নিচের ধাপগুলো অনুসরণ করে আপনি আপনার VPS Ubuntu সার্ভারে MySQL রিমোট অ্যাক্সেসসহ একটি নতুন ইউজার তৈরি করতে পারবেন এবং নির্দিষ্ট IP বা যেকোনো IP থেকে রিমোট অ্যাক্সেস করতে পারবেন।

### ধাপ ১: MySQL ইনস্টল করা

প্রথমেই MySQL ইনস্টল করতে হবে। টার্মিনালে নিচের কমান্ডগুলো রান করুন:

```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

### ধাপ ২: MySQL কনফিগার করা

MySQL ইনস্টল হওয়ার পরে, MySQL সার্ভারে লগইন করতে হবে:

```bash
sudo mysql
```

### ধাপ ৩: নতুন ইউজার তৈরি করা

MySQL সার্ভারে একটি নতুন ইউজার তৈরি করতে নিচের কমান্ডটি ব্যবহার করুন। এখানে, `username` এর জায়গায় আপনার পছন্দের ইউজারনেম এবং `password` এর জায়গায় আপনার পছন্দের পাসওয়ার্ড দিন:

```sql
CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'new_password';
```

### ধাপ ৪: রিমোট অ্যাক্সেস অনুমোদন করা

নতুন ইউজারকে যেকোনো IP থেকে অ্যাক্সেস করার অনুমতি দিতে নিচের কমান্ডটি চালান:

```sql
CREATE USER 'new_user'@'%' IDENTIFIED BY 'new_password';
```

```sql
   CREATE USER 'new_user'@'%' IDENTIFIED BY 'password';

   GRANT ALL PRIVILEGES ON *.* TO 'new_user'@'%' WITH GRANT OPTION;

   FLUSH PRIVILEGES;
```

এখানে `%` চিহ্নটি যেকোনো IP অ্যাড্রেসকে নির্দেশ করে। যদি আপনি নির্দিষ্ট একটি IP থেকে অ্যাক্সেস দিতে চান, তবে `%` এর পরিবর্তে সেই IP অ্যাড্রেসটি ব্যবহার করুন।

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

### ধাপ ৫: ইউজারকে ডাটাবেজে অনুমতি প্রদান করা

নির্দিষ্ট ডাটাবেজে ইউজারকে পূর্ণ অ্যাক্সেস দিতে নিচের কমান্ডটি ব্যবহার করুন:

```sql
GRANT ALL PRIVILEGES ON *.* TO 'new_user'@'%';
```

এটি ইউজারকে সকল ডাটাবেজে পূর্ণ অ্যাক্সেস দিবে। আপনি নির্দিষ্ট ডাটাবেজে অ্যাক্সেস দিতে চাইলে `*.*` এর পরিবর্তে ডাটাবেজের নাম উল্লেখ করুন, যেমন:

```sql
GRANT ALL PRIVILEGES ON database_name.* TO 'new_user'@'%';
```

ব্যবহারকারীকে প্রয়োজনীয় সুযোগ-সুবিধা দিন:

```sql
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;
```

প্রিভিলেজ গুলো আপডেট করতে নিচের কমান্ডটি চালান:

```sql
FLUSH PRIVILEGES;
```

### ধাপ ৬: MySQL কনফিগারেশন ফাইলে রিমোট অ্যাক্সেস সক্রিয় করা

MySQL এর কনফিগারেশন ফাইলটি এডিট করুন:

```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

এই ফাইলে `bind-address` এর লাইনটি খুঁজে বের করুন:

```bash
bind-address = 127.0.0.1
```

এটি পরিবর্তন করে যেকোনো IP থেকে অ্যাক্সেস করতে:

```bash
bind-address = 0.0.0.0
```

এটি আপনার MySQL সার্ভারকে যেকোনো IP থেকে কানেকশন গ্রহণ করতে সক্ষম করবে।

`0.0.0.0` সেট করলে MySQL সার্ভার সকল IP ঠিকানা থেকে সংযোগ গ্রহণ করতে পারবে। এটি সকল IP থেকে সংযোগের অনুমতি দেয়।

ফাইলটি সেভ করুন এবং বন্ধ করুন (Ctrl+X, তারপর Y এবং এন্টার চাপুন)।

### ধাপ ৭: MySQL সার্ভার রিস্টার্ট করা

কনফিগারেশন পরিবর্তনগুলি কার্যকর করতে MySQL সার্ভারটি রিস্টার্ট করুন:

```bash
sudo systemctl restart mysql
```

### ধাপ ৮: Firewall-এ পোর্ট 3306 খোলা

MySQL এর ডিফল্ট পোর্ট 3306। আপনাকে `ufw` ফায়ারওয়ালে এই পোর্টটি খুলতে হবে:

```bash
sudo ufw allow 3306
```

```bash
sudo ufw allow 3306/tcp
```

আপনার সার্ভারে ফায়ারওয়াল কনফিগার করুন যাতে MySQL পোর্ট (সাধারণত 3306) নির্দিষ্ট IP ঠিকানা থেকে খোলা থাকে।
`ufw` ব্যবহার করলে:

```bash
sudo ufw allow from 192.168.1.100 to any port 3306
sudo ufw allow from 192.168.1.101 to any port 3306
sudo ufw allow from 203.0.113.50 to any port 3306
```

```bash
sudo ufw reload
```

### For iptables

#### 1. Allow MySQL traffic

```bash
sudo iptables -A INPUT -p tcp --dport 3306 -j ACCEPT
```

#### 2. Save the firewall rules

```bash
sudo iptables-save
```

### For firewalld

#### 1. Open the MySQL port

```bash
sudo firewall-cmd --permanent --add-port=3306/tcp
```

#### 2. Reload the firewall

```bash
sudo firewall-cmd --reload
```

### ধাপ ৯: রিমোট মেশিন থেকে MySQL এ সংযোগ স্থাপন করা

এখন আপনি রিমোট মেশিন থেকে MySQL এ সংযোগ করতে পারেন। টার্মিনাল বা MySQL ক্লায়েন্টে নিচের কমান্ডটি দিন:

```bash
mysql -u new_user -p -h your_vps_ip_address
```

এখানে `your_vps_ip_address` এর জায়গায় আপনার VPS এর IP অ্যাড্রেস দিন।

### উপসংহার

এই ধাপগুলো অনুসরণ করলে আপনি MySQL সার্ভারে একটি নতুন ইউজার তৈরি করতে পারবেন এবং রিমোটলি MySQL অ্যাক্সেস সেটআপ করতে পারবেন।

### সমস্যা হলে

1. **MySQL সার্ভারে লগ ইন না হলে:** সার্ভার লগগুলো চেক করুন:

   ```bash
   sudo tail -f /var/log/mysql/error.log
   ```

2. **ফায়ারওয়ালে সমস্যা হলে:** নিশ্চিত করুন যে পোর্ট 3306 খোলা আছে এবং সঠিকভাবে রিমোট সংযোগের জন্য কনফিগার করা হয়েছে।

এই ধাপগুলো অনুসরণ করলে আপনি সফলভাবে রিমোটলি MySQL সেটআপ করতে পারবেন।
