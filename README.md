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
- `Database Name = Ahmad`
- `User Name = Ahmad`
- `user Password = 123456`
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



