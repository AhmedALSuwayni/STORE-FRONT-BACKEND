"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokenAuthentication_1 = require("../middleware/tokenAuthentication");
const order_1 = require("../models/order");
const store = new order_1.orderStore();
const Index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield store.Index();
        res.json(order);
    }
    catch (error) {
        res.status(400);
        res.json(`rejected token ${error}`);
    }
});
const Show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const order = yield store.Show(id);
        res.json(order);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const order = { userId: data.userId };
    try {
        const neworder = yield store.Create(order);
        res.json(neworder);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const AddProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const orderId = data.orderId;
    const productId = data.productId;
    const quantity = data.quantity;
    console.log(orderId, productId, quantity);
    try {
        const addedProduct = yield store.AddProduct(quantity, orderId, productId);
        res.json(addedProduct);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const order_routes = (app) => {
    app.get('/order', tokenAuthentication_1.authenticateToken, Index);
    app.get('/order/:id', tokenAuthentication_1.authenticateToken, Show);
    app.post('/order', tokenAuthentication_1.authenticateToken, Create);
    app.post('/order/product/add', tokenAuthentication_1.authenticateToken, AddProduct);
};
exports.default = order_routes;
