import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import user_routes from './handlers/user';
import products_routes from './handlers/product';
import order_routes from './handlers/order';

const app: express.Application = express()
const address: string = 'http://localhost:5000';

app.use(cors({origin:"*"}))

app.use(bodyParser.json())
user_routes(app);
products_routes(app);
order_routes(app);

app.listen(5000, function () {
    console.log(`The URL Address: ${address}`)
})