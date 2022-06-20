# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index `/products` [GET]
- Read `/products/:id` [GET]
- Create `/products` [POST] [token required]

#### Users
- Index `/users` [GET] [token required]
- Show `/users/:id` [GET] [token required]
- Signin `/users/signin` [POST] 
- Create `/users/signup` [POST]

#### Orders
- Index `/orders` [GET] [token required]
- Read `/orders/:id` [GET] [token required]
- Create `/orders/create` [POST] [token required]
- Add Product `/orders/:id` [POST] [token required]

## Data Shapes 
#### Users
- id : serialized
- name : varchar
- username : varchar
- password : varchar

| Column | Type |
| --- | --- |
| id | integer |
| name | varchar |
| username | varchar |
| password | varchar |

#### Products
- id : serialized
- name : varchar
- price : integer
- category : varchar

| Column | Type |
| --- | --- |
| id | integer |
| name | varchar |
| price | integer |
| category | varchar |

#### Orders
- id : serialized
- user_id : FOREGIN KEY

| Column | Type |
| --- | --- |
| id | integer |
| user_id | integer |

#### OrderItems
- id : serialized
- quantity : integer
- orderid : FOREGIN KEY
- productid : FOREGIN KEY

| Column | Type |
| --- | --- |
| id | integer |
| quantity | integer |
| orderid | integer |
| productid | integer |
