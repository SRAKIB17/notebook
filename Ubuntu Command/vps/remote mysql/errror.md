It seems that your MySQL installation is facing issues starting due to a missing or corrupted data directory (`/var/lib/mysql/ibdata1`). The error log suggests that MySQL is unable to find or initialize the data directory, leading to service failures.

### Possible Fixes

1. **Ensure correct permissions on MySQL data directory:**
   You've already run:

   ```bash
   sudo chown -R mysql:mysql /var/lib/mysql
   sudo chmod -R 755 /var/lib/mysql
   ```

   This is correct, but double-check that there are no missing or improperly set permissions.

2. **Re-initialize the MySQL data directory:**
   Since the error indicates the data directory is missing, you can try re-initializing it.

   ```bash
   sudo mysqld --initialize --user=mysql --datadir=/var/lib/mysql
   ```

3. **Remove corrupted MySQL installation and reinstall:**
   If re-initializing doesn’t help, you may need to completely remove MySQL and reinstall it.

   First, remove MySQL packages:

   ```bash
   sudo apt-get remove --purge mysql-server mysql-client mysql-common mysql-server-core-* mysql-client-core-*
   sudo rm -rf /etc/mysql /var/lib/mysql
   sudo apt-get autoremove
   sudo apt-get autoclean
   ```

   Then, reinstall MySQL:

   ```bash
   sudo apt-get update
   sudo apt-get install mysql-server
   ```

4. **Check for other issues in the error log:**
   Review the MySQL error log again for any additional clues:

   ```bash
   sudo cat /var/log/mysql/error.log
   ```

5. **Inspect service status and logs:**
   Check the status of the MySQL service and the detailed logs:

   ```bash
   sudo systemctl status mysql.service
   sudo journalctl -xeu mysql.service
   ```

These steps should help either fix the issue or give you more information to proceed.
