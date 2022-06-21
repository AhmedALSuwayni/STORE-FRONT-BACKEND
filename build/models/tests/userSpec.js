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
const user_1 = require("../user");
const store = new user_1.UserStore();
describe("Check The Respone in User Module", () => {
    it("Creating New User", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield store.Create({
            name: 'Ahmad',
            username: 'AhmadSw',
            password: '123456'
        });
        expect(res).toBeDefined;
    }));
    it("Checking Show User", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '4';
        const res = yield store.Show(id);
        expect(res).toBeDefined;
    }));
    it("Checking All Users", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield store.Index();
        expect(res).toBeDefined;
    }));
});
