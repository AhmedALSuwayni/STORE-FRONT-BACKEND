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
const order_1 = require("../order");
const store = new order_1.orderStore();
describe("Check The Respone in Order Module", () => {
    it("Creating New Order", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield store.Create({
            userId: '1'
        });
        expect(res).toBeDefined;
    }));
    it("Add Product To Order ", () => __awaiter(void 0, void 0, void 0, function* () {
        const orderId = 1;
        const productId = '1';
        const quantity = '5';
        const res = yield store.AddProduct(orderId, productId, quantity);
        expect(res).toBeDefined;
    }));
    it("Checking All Orders", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield store.Index();
        expect(res).toBeDefined;
    }));
});
