<h1 align="center">COOCH BEHAR GOVERNMENT ENGINEERING COLLEGE</h1>

![CGEC Demo Design](/frontend/public/demo-design.png)

### For contributors

```bash

git clone https://github.com/cgec-web/cgec.git
cd cgec
git branch <developer-name>
git checkout <developer-name>

# After changes
git add .
git commit -m "Commit messages"
git push origin <developer-name> # don't try to push into 'main' branch

```

## Run this app locally

### Step 1 (Clone the project)

```bash
    # Open terminal (e.g bash)
    git clone https://github.com/cgec-web/cgec.git
    cd cgec
    touch .env # create a .env file
```

### Step : 2 (Setup .env file)

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

### Step 3 : (Build the project)

```shell
npm run build
```

### Step 4 : (Start the app)

```shell
npm run start
```
