### Ubuntu তে Systemctl ব্যবহারের সম্পূর্ণ ডকুমেন্টেশন বাংলায়

**Systemctl** হল একটি কমান্ড-লাইন ইউটিলিটি যা systemd সিস্টেম এবং পরিষেবা পরিচালনা করতে ব্যবহৃত হয়। এটি আপনার সিস্টেমের ডেমন এবং পরিষেবাগুলিকে আরম্ভ, থামানো, পুনরায় লোড এবং সক্ষম/অক্ষম করতে সাহায্য করে।

### Systemctl ইনস্টলেশন

Ubuntu তে systemd পূর্ব-ইনস্টল করা থাকে, তাই systemctl ব্যবহারের জন্য আপনাকে কিছু ইনস্টল করতে হবে না।

### Systemctl কমান্ডসমূহ

1. **সার্ভিস শুরু করা:**

   ```bash
   sudo systemctl start service_name
   ```

   উদাহরণস্বরূপ, Apache সার্ভার শুরু করতে:
   
   ```bash
   sudo systemctl start apache2
   ```

2. **সার্ভিস থামানো:**

   ```bash
   sudo systemctl stop service_name
   ```

   উদাহরণস্বরূপ, Apache সার্ভার থামাতে:
   
   ```bash
   sudo systemctl stop apache2
   ```

3. **সার্ভিস পুনরায় আরম্ভ করা:**

   ```bash
   sudo systemctl restart service_name
   ```

   উদাহরণস্বরূপ, Apache সার্ভার পুনরায় আরম্ভ করতে:
   
   ```bash
   sudo systemctl restart apache2
   ```

4. **সার্ভিস পুনরায় লোড করা:**

   ```bash
   sudo systemctl reload service_name
   ```

   উদাহরণস্বরূপ, Apache সার্ভার পুনরায় লোড করতে:
   
   ```bash
   sudo systemctl reload apache2
   ```

5. **সার্ভিসের অবস্থা দেখানো:**

   ```bash
   sudo systemctl status service_name
   ```

   উদাহরণস্বরূপ, Apache সার্ভারের অবস্থা দেখতে:
   
   ```bash
   sudo systemctl status apache2
   ```

6. **বুটের সময় সার্ভিস সক্রিয় করা:**

   ```bash
   sudo systemctl enable service_name
   ```

   উদাহরণস্বরূপ, Apache সার্ভার বুটের সময় সক্রিয় করতে:
   
   ```bash
   sudo systemctl enable apache2
   ```

7. **বুটের সময় সার্ভিস অক্ষম করা:**

   ```bash
   sudo systemctl disable service_name
   ```

   উদাহরণস্বরূপ, Apache সার্ভার বুটের সময় অক্ষম করতে:
   
   ```bash
   sudo systemctl disable apache2
   ```

8. **বর্তমান রানটাইমে সার্ভিস সক্রিয় করা:**

   ```bash
   sudo systemctl is-active service_name
   ```

   উদাহরণস্বরূপ, Apache সার্ভার সক্রিয় কিনা তা দেখতে:
   
   ```bash
   sudo systemctl is-active apache2
   ```

9. **বুটের সময় সার্ভিস সক্রিয় আছে কিনা তা পরীক্ষা করা:**

   ```bash
   sudo systemctl is-enabled service_name
   ```

   উদাহরণস্বরূপ, Apache সার্ভার বুটের সময় সক্রিয় আছে কিনা তা দেখতে:
   
   ```bash
   sudo systemctl is-enabled apache2
   ```

10. **সার্ভিস পুনরায় আরম্ভ না করেই কনফিগারেশন পুনরায় লোড করা:**

    ```bash
    sudo systemctl daemon-reload
    ```

    যখন আপনি একটি ইউনিট ফাইল পরিবর্তন করেন এবং সিস্টেমকে জানাতে চান, তখন daemon-reload কমান্ড ব্যবহার করুন।

### লগ ফাইল দেখা

Systemd এর লগ দেখতে `journalctl` কমান্ড ব্যবহার করা হয়:

```bash
journalctl -u service_name
```

উদাহরণস্বরূপ, Apache সার্ভারের লগ দেখতে:

```bash
journalctl -u apache2
```

### সিস্টেম অবস্থা দেখা

Systemd সিস্টেমের সামগ্রিক অবস্থা দেখতে:

```bash
systemctl list-units
```

সকল উপলভ্য ইউনিট দেখতে:

```bash
systemctl list-units --all
```

### সার্ভিস রিলোড ও রিস্টার্ট

কিছু সময় আপনি সার্ভিসের কনফিগারেশন ফাইল পরিবর্তন করতে পারেন এবং সেই পরিবর্তন প্রয়োগ করতে সার্ভিস রিলোড করতে হবে।

উদাহরণস্বরূপ, Apache সার্ভার পুনরায় লোড করতে:

```bash
sudo systemctl reload apache2
```

রিস্টার্ট করার জন্য:

```bash
sudo systemctl restart apache2
```

এই ছিল systemctl এর মৌলিক ব্যবহার। এর মাধ্যমে আপনি আপনার সিস্টেমের সার্ভিস এবং ডেমন সহজেই পরিচালনা করতে পারবেন।