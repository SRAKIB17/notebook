**নেক্সটজেএস অ্যাপ VPS-এ ডিপ্লয় করার জন্য কমান্ড এবং বর্ণনা:**

1. **VPS-এ সংযোগ করুন**  
   `ssh root@your_server_ip`  
   VPS-এ SSH মাধ্যমে লগইন করুন।

2. **Nginx ইনস্টল করুন**  
   `sudo apt update && sudo apt upgrade`  
   `sudo apt install nginx`  
   Nginx আপডেট এবং ইনস্টল করুন।

3. **ফায়ারওয়াল কনফিগার করুন**  
   `sudo ufw app list`  
   `sudo ufw allow 'Nginx HTTP'`  
   `sudo ufw allow 'Nginx HTTPS'`  
   `sudo ufw enable`  
   `sudo ufw status`  
   ফায়ারওয়াল কনফিগার করে HTTP এবং HTTPS অনুমোদন করুন।

4. **Nginx রিভার্স প্রক্সি কনফিগার করুন**  
   `sudo nano /etc/nginx/sites-enabled/nextjs.conf`  
   Nginx কনফিগারেশন ফাইল তৈরি করুন এবং সেভ করুন।

5. **Nginx পুনরায় চালু করুন**  
   `sudo service nginx restart`  
   Nginx সার্ভিস পুনরায় চালু করুন।

6. **NodeJS ইনস্টল করুন**  
   `sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg`  
   `curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg - dearmor -o /etc/apt/keyrings/nodesource.gpg`  
   `NODE_MAJOR=20`  
   `echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list`  
   `sudo apt-get update && sudo apt-get install nodejs -y`  
   NodeJS ইনস্টল করুন এবং চেক করুন।

7. **নেক্সটজেএস অ্যাপ তৈরি করুন**  
   `mkdir /var/www/nextjs`  
   `cd /var/www/nextjs`  
   `npx create-next-app@latest myapp`  
   নেক্সটজেএস অ্যাপ তৈরি করুন এবং ডেভেলপমেন্ট মোডে চালান।

8. **PM2 ইনস্টল করুন এবং অ্যাপ চালু করুন**  
   `sudo npm install -g pm2`  
   `sudo pm2 start npm --name "myapp" -- start`  
   `sudo pm2 startup`  
   `sudo pm2 save`  
   PM2 ব্যবহার করে অ্যাপ চালু করুন এবং বুটের সময় স্বয়ংক্রিয়ভাবে শুরু করুন।

9. **Certbot ইনস্টল করুন এবং SSL সার্টিফিকেট অর্জন করুন**  
   `sudo snap install core; sudo snap refresh core`  
   `sudo snap install --classic certbot`  
   `sudo ln -s /snap/bin/certbot /usr/bin/certbot`  
   `sudo certbot --nginx -d your_domain_name.com -d www.your_domain_name.com`  
   SSL সার্টিফিকেট ইনস্টল করুন এবং আপনার ডোমেইনে সেট আপ করুন।
