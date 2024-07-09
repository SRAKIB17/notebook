`curl` হল একটি কমান্ড লাইন টুল যা ডেটা ট্রান্সফারের জন্য ব্যবহৃত হয়। এটি বিভিন্ন প্রোটোকলের (HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP, LDAPS, FILE, IMAP, SMTP, POP3, এবং আরও অনেক) মাধ্যমে ডেটা রিকোয়েস্ট এবং রেসপন্স করতে সক্ষম। এখানে `curl` কমান্ডের একটি বিস্তৃত ডকুমেন্টেশন প্রদান করা হলো যা শুরু থেকে উন্নত স্তর পর্যন্ত কভার করবে।

---

# `curl` কমান্ডের সম্পূর্ণ ডকুমেন্টেশন

## ১. `curl` ইনস্টল করা

### ডেবিয়ান/উবুন্টু:
```sh
sudo apt-get install curl
```

### রেড হ্যাট/সেন্টওএস:
```sh
sudo yum install curl
```

## ২. সাধারণ ব্যবহার

### ২.১. একটি URL থেকে ডেটা ডাউনলোড করা
```sh
curl http://example.com
```

### ২.২. একটি ফাইল ডাউনলোড করে নির্দিষ্ট ফাইলে সংরক্ষণ করা
```sh
curl -o output_file http://example.com/file
```

### ২.৩. একটি ফাইল ডাউনলোড করে একই নামে সংরক্ষণ করা
```sh
curl -O http://example.com/file
```

### ২.৪. একাধিক ফাইল ডাউনলোড করা
```sh
curl -O http://example.com/file1 -O http://example.com/file2
```

### ২.৫. HTTP হেডার সহ রিকোয়েস্ট পাঠানো
```sh
curl -I http://example.com
```

## ৩. POST রিকোয়েস্ট পাঠানো

### ৩.১. সরল POST রিকোয়েস্ট
```sh
curl -X POST http://example.com/resource
```

### ৩.২. ফর্ম ডেটা সহ POST রিকোয়েস্ট
```sh
curl -d "param1=value1&param2=value2" -X POST http://example.com/resource
```

### ৩.৩. JSON ডেটা সহ POST রিকোয়েস্ট
```sh
curl -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}' -X POST http://example.com/resource
```

## ৪. ফাইল আপলোড করা

### ৪.১. একটি ফাইল আপলোড করা
```sh
curl -F "file=@/path/to/file" http://example.com/upload
```

### ৪.২. একাধিক ফাইল আপলোড করা
```sh
curl -F "file1=@/path/to/file1" -F "file2=@/path/to/file2" http://example.com/upload
```

## ৫. HTTP বেসিক অথেন্টিকেশন

### ৫.১. ইউজারনেম এবং পাসওয়ার্ড সহ রিকোয়েস্ট পাঠানো
```sh
curl -u username:password http://example.com
```

## ৬. ডেটা সেভ করা

### ৬.১. HTTP রেসপন্স হেডার এবং বডি আলাদা করে সেভ করা
```sh
curl -D headers.txt -o body.txt http://example.com
```

### ৬.২. কুকিজ সেভ এবং লোড করা
```sh
curl -c cookies.txt -b cookies.txt http://example.com
```

## ৭. রেসপন্স ডেটা ফরম্যাটিং

### ৭.১. JSON ডেটা সুন্দরভাবে প্রিন্ট করা (jq এর সাথে)
```sh
curl -s http://example.com/data | jq .
```

## ৮. উন্নত ব্যবহার

### ৮.১. টাইমআউট সেট করা
```sh
curl --max-time 10 http://example.com
```

### ৮.২. প্রক্সি সার্ভার ব্যবহার করা
```sh
curl -x http://proxyserver:port http://example.com
```

### ৮.৩. HTTP রিকোয়েস্টের মেথড পরিবর্তন করা (PUT, DELETE)
```sh
curl -X PUT http://example.com/resource
curl -X DELETE http://example.com/resource
```

### ৮.৪. নির্দিষ্ট হেডার সেট করা
```sh
curl -H "Authorization: Bearer token" http://example.com
```

### ৮.৫. SSL/TLS সনদ যাচাই বন্ধ করা
```sh
curl -k https://self-signed.badssl.com/
```

---

