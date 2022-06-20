import * as express from 'express';
import { authenticateToken } from '../middleware/tokenAuthentication';
import { product, productStore } from '../models/product';

const store = new productStore();

const Index = async (req: express.Request, res: express.Response) => {
  try {
    const products = await store.Index();
    res.json(products);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const Show = async (req: express.Request, res: express.Response) => {
  try{
 const id: number = parseInt(req.params.id);
  const product = await store.Show(id);
  res.json(product);
  }catch (error) {
    res.status(400);
    res.json(error);
  }
};

const Create = async (req: express.Request, res: express.Response) => {
  const data = req.body;
  const Product: product = {
    name: data.name,
    price: data.price,
    category: data.category
  };
  try {
    const newProduct = await store.Create(Product);
    res.json(newProduct);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const products_routes = (app: express.Application) => {
    app.get('/products', Index);
    app.get('/products/:id', Show);
    app.post('/product',authenticateToken, Create);
  };
  
  export default products_routes;