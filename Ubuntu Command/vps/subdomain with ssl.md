To configure Nginx to serve the site `files.allexamknowledge.com` and forward traffic to the application running on `http://82.180.145.247:8080`, you can set up a reverse proxy. Below is an example Nginx configuration for this setup.

### Step 1: Install Nginx

If Nginx is not installed on your server, you can install it using the following command (for Ubuntu/Debian):

```bash
sudo apt update
sudo apt install nginx
```

### Step 2: Configure Nginx

1. **Navigate to the Nginx configuration folder**:

   ```bash
   cd /etc/nginx/sites-available
   ```

2. **Create a configuration file for your subdomain**:

   ```bash
   sudo nano /etc/nginx/sites-available/files.allexamknowledge.com
   ```

3. **Add the following configuration**:

```nginx
server {
    listen 80;
    server_name files.allexamknowledge.com;

    location / {
        proxy_pass http://82.180.145.247:8080; # Forward requests to the application on port 8080
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Serve static files if available in /var/www/files.allexamknowledge.com/static
    location /static/ {
        alias /var/www/files.allexamknowledge.com/static/;
    }

    # Handle 404 error
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
```

### Step 3: Enable the Configuration

1. **Create a symbolic link** to enable the site configuration:

   ```bash
   sudo ln -s /etc/nginx/sites-available/files.allexamknowledge.com /etc/nginx/sites-enabled/
   ```

2. **Test the Nginx configuration** for syntax errors:

   ```bash
   sudo nginx -t
   ```

3. **Reload Nginx** to apply the new configuration:

   ```bash
   sudo systemctl reload nginx
   ```

### Step 4: Set Up Firewall (Optional)

If you have a firewall enabled, make sure that HTTP (port 80) is allowed:

```bash
sudo ufw allow 'Nginx HTTP'
```

### Step 5: Access the Site

- Now, when users visit `http://files.allexamknowledge.com`, Nginx will forward the requests to `http://82.180.145.247:8080`.
- If you have static files served from a directory on your server, those will be accessible under `/static`.

### Optional: Add SSL (Let's Encrypt)

If you want to secure the site with SSL, you can use Let's Encrypt:

1. **Install Certbot**:

   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Obtain and install an SSL certificate**:

   ```bash
   sudo certbot --nginx -d files.allexamknowledge.com
   ```

3. **Follow the prompts** to complete the SSL setup.

After obtaining the certificate, Nginx will automatically redirect HTTP to HTTPS for your domain.
