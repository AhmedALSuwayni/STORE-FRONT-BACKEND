"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./handlers/user"));
const product_1 = __importDefault(require("./handlers/product"));
const order_1 = __importDefault(require("./handlers/order"));
const app = (0, express_1.default)();
const address = 'http://localhost:5000';
app.use((0, cors_1.default)({ origin: "*" }));
app.use(body_parser_1.default.json());
(0, user_1.default)(app);
(0, product_1.default)(app);
(0, order_1.default)(app);
app.listen(5000, function () {
    console.log(`The URL Address: ${address}`);
});
exports.default = app;
