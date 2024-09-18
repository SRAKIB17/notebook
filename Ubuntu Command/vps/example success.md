```bash
server {
    server_name files.allexamknowledge.com;

    location / {
        proxy_pass http://82.180.145.247:8080; # Forward requests to the application on port 8080
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
     client_max_body_size 100M;
    }

  
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/files.allexamknowledge.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/files.allexamknowledge.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = files.allexamknowledge.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name files.allexamknowledge.com;
    return 404; # managed by Certbot


}
```
