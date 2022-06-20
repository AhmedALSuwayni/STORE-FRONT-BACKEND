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
const book_1 = require("../models/book");
const store = new book_1.BookStroe();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hello222");
    const books = yield store.index();
    res.json(books);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hello");
    console.log(req.params.id);
    const books = yield store.show(req.params.id);
    res.json(books);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        const books = {
            id: data.id,
            title: data.title,
            totalpages: data.totalpages,
            author: data.author,
            summary: data.summary,
        };
        const newbook = yield store.create(books);
        res.json(newbook);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield store.delete(req.body.id);
    res.json(deleted);
});
const bookRoutes = (app) => {
    app.get('/books', index);
    app.get('/books/:id', show);
    app.post('/books', create);
    app.delete('/books/:id', destroy);
};
exports.default = bookRoutes;
