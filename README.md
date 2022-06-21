# Storefront Backend Project

## Prepare env
- add a `.env` file in the root directory 
```
POSTGRES_HOST=localhost
POSTGRES_DB=ahmed
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123456
TEST_DB=test_db
ENVI=dev
BCRYPT_PASSWORD=AHMED-CRYPTING
SALT_ROUND=10
TOKEN_SECRET=AHMEDToken
```

## Set up

### Setup The database
By using `Postgresql` Creating database
You Can download Postgresql from this link and choose the operating system desired https://www.postgresql.org/download/
#### For WiN:  https://www.postgresql.org/download/windows/
#### For Linux:  https://www.postgresql.org/download/linux/
#### For MacOS:  https://www.postgresql.org/download/macosx/
Create Database and User with these Name And Password:
- `Database Name = Ahmad`
- `User Name = Ahmad`
- `user Password = 123456`
- `command: GRANT ALL PRIVILEGES ON DATABASE Ahmad TO Ahmad`
### Migration To Create The Tables
- `npm install` to install all dependencies
- `npx db-migrate up` to create the tables

## Ports
- Database Port:
`5432`
- Backend Port:
`5000`

## Start the app
- `npm run start` to start the app and get access via http://localhost:5000/



