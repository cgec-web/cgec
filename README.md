<h1 align="center">COOCH BEHAR GOVERNMENT ENGINEERING COLLEGE</h1>

![CGEC Demo Design](/frontend/public/demo-design.png)

### For contributors

```bash

git clone https://github.com/cgec-web/cgec.git
git branch <developer-name>
git checkout <developer-name>

# After changes
git add .
git commit -m "Commit messages"
git push origin <developer-name> # don't try to push into 'main' branch

```

### Setup .env file

```bash
# PORT

PORT=6969

# Database Configuration
MONGODB_URI = mongodb://xxxxxxxxxx
DB_NAME = cgec-admin
# AUTHENTICATION TOKEN

ACCESS_TOKEN_SECRET = xxx-xxx-ABC
ACCESS_TOKEN_EXPIRY = 1d
REFRESH_TOKEN_SECRET = xxx-xxx-xxx
REFRESH_TOKEN_EXPIRY = 10d


# GMAIL APP PASSWORD

GMAIL_ADDRESS = xxx
GMAIL_APP_PASSWORD = xxx
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```
