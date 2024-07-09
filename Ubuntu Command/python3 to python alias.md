### 01: As suggested in comments, you could create an alias as follows:

```bash
alias python='python3"
```


by adding it to the `~/.bashrc` file at the end of this file, exiting and reloading it in the current terminal using the next command: `~/.bashrc`

### 02: **Or using linking:**

As you can see below, my python points to python2, python2 points to python2.7.
To achieve the same, use:

```bash
sudo ln -s /usr/bin/python2.7/usr/bin/python2
sudo ln -s /usr/bin/python2 /usr/bin/python
```

If you want python pointing to 3rd version, you could use the same, but the last command should be:

```bash
sudo ln -s /usr/bin/python3 /usr/bin/python
```