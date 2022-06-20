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
const product_1 = require("../product");
const store = new product_1.productStore();
describe("Check The Respone in Product Module", () => {
    it("Creating New Product", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield store.Create({
            name: 'Spoon',
            price: 20,
            category: 'iron'
        });
        expect(res).toBeTrue;
    }));
    it("Checking All Products", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield store.Index();
        expect(res).toBeDefined;
    }));
});
