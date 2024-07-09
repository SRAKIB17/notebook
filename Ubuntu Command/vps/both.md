To use Nginx as a reverse proxy for your Next.js application (example.com) and to handle API requests (api.example.com) along with file uploads, follow these steps on your VPS server:

### Step 1: Install Nginx

If Nginx is not already installed on your server, you can install it using the package manager:

```bash
sudo apt update
sudo apt install nginx
```

### Step 2: Configure Nginx for Next.js (example.com)

1. **Create a Configuration File**:

Create a new configuration file for your site under Nginx's sites-available directory. Replace `example.com` with your actual domain:

```bash
sudo nano /etc/nginx/sites-available/example.com
```

2. **Configure Nginx**:

Use the following configuration as a template. Make sure to replace `example.com`, `api.example.com`, and file paths as per your setup:

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

3. **Enable the Site**:

Create a symbolic link from sites-available to sites-enabled to enable your site:

```bash
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```

4. **Test Nginx Configuration**:

Ensure there are no syntax errors in your configuration file:

```bash
sudo nginx -t
```

5. **Restart Nginx**:

Apply the changes by restarting Nginx:

```bash
sudo systemctl restart nginx
```

### Step 3: Configure Nginx for API (api.example.com)

Repeat similar steps for configuring Nginx for your API (assuming it handles file uploads):

1. **Create Configuration File**:

Create a new configuration file for `api.example.com`:

```bash
sudo nano /etc/nginx/sites-available/api.example.com
```

2. **Configure Nginx**:

Use a configuration like this for your API, assuming it listens on a different port or path:

```nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:YOUR_API_PORT; # Replace with your API server address
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        # Adjust other proxy settings as needed
    }

    # Add additional configurations as needed
}
```

3. **Enable the Site**:

Create a symbolic link and enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/api.example.com /etc/nginx/sites-enabled/
```

4. **Test and Restart Nginx**:

Test the configuration and restart Nginx as before:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

### Step 4: Configure SSL/TLS (Optional but Recommended)

For security, consider configuring SSL/TLS certificates using Let's Encrypt for both `example.com` and `api.example.com` to enable HTTPS.

### Final Notes

- Ensure your Next.js application runs on `localhost:3000` or adjust the `proxy_pass` directive accordingly.
- Replace placeholders (`example.com`, `api.example.com`, `YOUR_API_PORT`) with actual values relevant to your setup.
- Monitor Nginx logs (`/var/log/nginx/`) for troubleshooting or security audits.

By following these steps, you'll have Nginx set up as a reverse proxy to handle requests for both your Next.js application and your API, providing efficient routing and potentially improving security and performance.