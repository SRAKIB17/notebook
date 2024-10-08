নিচে Ubuntu-তে MySQL Server ইনস্টল এবং সেটআপ করার সম্পূর্ণ নির্দেশিকা সহজভাবে ব্যাখ্যা করা হলো, যা একজন বিগিনারও সহজেই অনুসরণ করতে পারবে।

### ধাপ ১: প্যাকেজ তালিকা আপডেট করা

প্রথমে আপনার প্যাকেজ তালিকা আপডেট করুন। এর মাধ্যমে আপনার সিস্টেমের সফটওয়্যার তালিকা আপডেট হবে এবং আপনি সর্বশেষ প্যাকেজগুলি ইনস্টল করতে পারবেন।

```bash
sudo apt update
```

### ধাপ ২: MySQL Server ইনস্টল করা

MySQL Server ইনস্টল করতে নিচের কমান্ডটি ব্যবহার করুন:

```bash
sudo apt install mysql-server
```

### ধাপ ৩: MySQL সার্ভার সুরক্ষিত করা

MySQL ইনস্টলেশনের পরে আপনার সার্ভার সুরক্ষিত করার জন্য নিচের স্ক্রিপ্টটি চালান:

```bash
sudo mysql_secure_installation
```

এই স্ক্রিপ্টটি আপনাকে বিভিন্ন প্রশ্ন জিজ্ঞাসা করবে:

1. **VALIDATE PASSWORD PLUGIN সেটআপ করতে চান?**: আপনার পাসওয়ার্ডের নিরাপত্তা বাড়াতে এটি ইনস্টল করা যেতে পারে। যদি হ্যাঁ চান, তাহলে `Y` টাইপ করুন এবং এন্টার চাপুন। নাহলে `N` টাইপ করুন।

```bash
SHOW VARIABLES LIKE 'validate_password%';
```

- Minimum Length: 8 characters.
- Mixed Case: At least 1 uppercase letter and 1 lowercase letter.
- Numbers: At least 1 numeric digit.
- Special Characters: At least 1 special character (e.g., !@#$%^&*()).

2. **রুট পাসওয়ার্ড সেট করুন**: আপনার MySQL রুট ইউজারের জন্য একটি শক্তিশালী পাসওয়ার্ড সেট করুন।
3. **অজানা ইউজার অপসারণ করুন**: অজানা ইউজার অ্যাকাউন্ট মুছে ফেলতে `Y` টাইপ করুন এবং এন্টার চাপুন।
4. **রিমোট রুট লগইন নিষিদ্ধ করুন**: রিমোট রুট লগইন নিষিদ্ধ করতে `Y` টাইপ করুন এবং এন্টার চাপুন।
5. **টেস্ট ডাটাবেস সরান এবং এক্সেস অক্ষম করুন**: টেস্ট ডাটাবেস সরাতে এবং এক্সেস অক্ষম করতে `Y` টাইপ করুন এবং এন্টার চাপুন।
6. **প্রিবিলেজ টেবিল রিলোড করুন**: প্রিবিলেজ টেবিল রিলোড করতে `Y` টাইপ করুন এবং এন্টার চাপুন।

### ধাপ ৪: MySQL সার্ভারে লগইন করা

MySQL সার্ভারে লগইন করতে নিচের কমান্ডটি ব্যবহার করুন:

```bash
sudo mysql -u root -p
```

পাসওয়ার্ড টাইপ করার পর এন্টার চাপুন। আপনি MySQL কমান্ড প্রম্পটে চলে আসবেন।

### ধাপ ৫: MySQL ব্যবস্থাপনা

#### 5.1: একটি নতুন ডাটাবেস তৈরি করা

```sql
CREATE DATABASE my_database;
```

#### 5.2: একটি নতুন ইউজার তৈরি করা এবং তাকে পূর্ণ অনুমতি দেয়া

```sql
CREATE USER 'my_user'@'localhost' IDENTIFIED BY 'my_password';

GRANT ALL PRIVILEGES ON my_database.* TO 'my_user'@'localhost';
FLUSH PRIVILEGES;
```

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '11224455';
```

#### 5.3: ডাটাবেস তালিকা দেখুন

```sql
SHOW DATABASES;
```

#### 5.4: একটি নির্দিষ্ট ডাটাবেস ব্যবহার করা

```sql
USE my_database;
```

#### 5.5: একটি টেবিল তৈরি করা

```sql
CREATE TABLE my_table (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY(id)
);
```

#### 5.6: টেবিলগুলির তালিকা দেখুন

```sql
SHOW TABLES;
```

### ধাপ ৬: MySQL সার্ভার স্টার্ট, স্টপ এবং রিস্টার্ট করা

MySQL সার্ভার চালু করা:

```bash
sudo systemctl start mysql
```

MySQL সার্ভার বন্ধ করা:

```bash
sudo systemctl stop mysql
```

MySQL সার্ভার রিস্টার্ট করা:

```bash
sudo systemctl restart mysql
```

### ধাপ ৭: MySQL সার্ভার স্ট্যাটাস পরীক্ষা করা

MySQL সার্ভারের স্ট্যাটাস পরীক্ষা করতে:

```bash
sudo systemctl status mysql
```

### ধাপ 8: আপনি MySQL-কে বুট সময়ে চালু করার জন্য সক্রিয় করতে পারেন

```bash
sudo systemctl enable mysql
```
