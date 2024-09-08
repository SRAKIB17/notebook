To increase the Nginx client upload size limit to 100MB, you need to adjust the `client_max_body_size` directive in the Nginx configuration file. Follow these steps:

### 1. **Open the Nginx Configuration File**

You can modify the configuration file for the entire server or for a specific site.

- To edit the global configuration, open the `nginx.conf` file:

   ```bash
   sudo nano /etc/nginx/nginx.conf
   ```

- To edit the configuration for a specific site, open the site's configuration file, usually located in `/etc/nginx/sites-available/`:

   ```bash
   sudo nano /etc/nginx/sites-available/your_site
   ```

### 2. **Modify `client_max_body_size` Directive**

In the `http`, `server`, or `location` block (depending on where you want to apply the rule), add or modify the following line:

```nginx
client_max_body_size 100M;
```

For example, to apply it globally for the entire server:

```nginx
http {
    ...
    client_max_body_size 100M;
    ...
}
```

Or, to apply it for a specific location or server block:

```nginx
server {
    ...
    location /upload {
        client_max_body_size 100M;
    }
    ...
}
```

### 3. **Test the Nginx Configuration**

Always test the configuration before reloading to avoid any syntax errors:

```bash
sudo nginx -t
```

If the test is successful, you will see something like:

```bash
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 4. **Reload Nginx**

After successfully testing the configuration, reload Nginx to apply the changes:

```bash
sudo systemctl reload nginx
```

Now, the Nginx server should allow uploads up to 100MB.
