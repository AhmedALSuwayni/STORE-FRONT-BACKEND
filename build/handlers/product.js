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
const product_1 = require("../models/product");
const store = new product_1.productStore();
const Index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield store.Index();
        res.json(products);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const Show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const product = yield store.Show(id);
        res.json(product);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const Product = {
        name: data.name,
        price: data.price,
        category: data.category
    };
    try {
        const newProduct = yield store.Create(Product);
        res.json(newProduct);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const products_routes = (app) => {
    app.get('/products', Index);
    app.get('/products/:id', Show);
    app.post('/product', tokenAuthentication_1.authenticateToken, Create);
};
exports.default = products_routes;
