"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const { TEST_TOKEN } = process.env;
describe('Test Product Endpoints', () => {
    it('Create Product', function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield request.post('/product').send({
                    "name": "Fork",
                    "price": 11,
                    "category": "wood"
                }).set('Authorization', 'Bearer ' + TEST_TOKEN);
                expect(res.status).toBe(200);
            }
            catch (error) {
                Promise.reject(new Error("Can Not Create Product"));
            }
        });
    });
    it('Show One Product', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.get('/products/1');
            expect(res.status).toBe(200);
        });
    });
    it('Show All Product', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.get('/products/');
            expect(res.status).toBe(200);
        });
    });
});
describe('Test User Endpoints', () => {
    it('Create User', function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield request.post('/signup').send({
                    "name": "Ayman",
                    "username": "Test",
                    "password": "123456"
                });
                expect(res.status).toBe(200);
            }
            catch (error) {
                Promise.reject(new Error("Can Not Create User"));
            }
        });
    });
    it('Sign In As User', function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield request.post('/signin').send({
                    "username": "endpointTest",
                    "password": "123456"
                });
                expect(res.status).toBe(200);
            }
            catch (error) {
                Promise.reject(new Error("Can Not SignIn"));
            }
        });
    });
    it('Show One User', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.get('/users/1').set('Authorization', 'Bearer ' + TEST_TOKEN);
            expect(res.status).toBe(200);
        });
    });
    it('Show All Users', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.get('/users').set('Authorization', 'Bearer ' + TEST_TOKEN);
            expect(res.status).toBe(200);
        });
    });
});
describe('Test Order Endpoints', () => {
    it('Create Order', function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield request.post('/order').send({
                    "userId": 1
                }).set('Authorization', 'Bearer ' + TEST_TOKEN);
                expect(res.status).toBe(200);
            }
            catch (error) {
                Promise.reject(new Error("Can Not Create Order"));
            }
        });
    });
    it('Add Product To an Order', function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield request.post('/order/product/add').send({
                    "orderId": "1",
                    "productId": "5",
                    "quantity": "2"
                }).set('Authorization', 'Bearer ' + TEST_TOKEN);
                expect(res.status).toBe(200);
            }
            catch (error) {
                Promise.reject(new Error("Can Not Create Order"));
            }
        });
    });
    it('Show One Order', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.get('/order/1').set('Authorization', 'Bearer ' + TEST_TOKEN);
            expect(res.status).toBe(200);
        });
    });
    it('Show All Orders', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.get('/order/').set('Authorization', 'Bearer ' + TEST_TOKEN);
            expect(res.status).toBe(200);
        });
    });
});
