import * as express from 'express';
import { authenticateToken } from '../middleware/tokenAuthentication';
import { orderStore, order } from '../models/order';

const store = new orderStore();

const Index = async (req: express.Request, res: express.Response) => {
  try {
    const order = await store.Index();
  res.json(order);
  } catch (error) {
    res.status(400);
    res.json(`rejected token ${error}`);
  }
};

const Show = async (req: express.Request, res: express.Response) => {
  try{
 const id: number = parseInt(req.params.id);
  const order = await store.Show(id);
  res.json(order);
  }catch (error) {
    res.status(400);
    res.json(error);
  }
};


const Create = async (req: express.Request, res: express.Response) => {
  const data = req.body;
  const order: order = {userId: data.userId};
  try {
    const neworder = await store.Create(order);
    res.json(neworder);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const AddProduct = async (req: express.Request, res: express.Response) => {
  const data = req.body;
  const orderId: string = data.orderId;
  const productId: string = data.productId;
  const quantity: number = data.quantity;
  try {
    const addedProduct = await store.AddProduct(quantity, orderId, productId);
    res.json(addedProduct);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const order_routes = (app: express.Application) => {
  app.get('/order',authenticateToken, Index);
  app.get('/order/:id',authenticateToken, Show);
  app.post('/order',authenticateToken, Create);
  app.post('/order/product/add',authenticateToken, AddProduct);
};

export default order_routes;