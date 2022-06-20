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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStore = void 0;
const database_1 = __importDefault(require("../database"));
class orderStore {
    Index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const sql = `SELECT * FROM orders`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Can Not Get The Orders The Error Is : ${error}`);
            }
        });
    }
    Show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const sql = `SELECT orders.id,orders.user_id,OrderItems.productId,OrderItems.quantity FROM
                  "orders" INNER JOIN OrderItems ON orders.id=OrderItems.orderid WHERE orders.id=$1;`;
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Can Not Get The Product ${id} The Error Is : ${error}`);
            }
        });
    }
    Create(o) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const sql = 'INSERT INTO orders (user_id) VALUES($1) RETURNING *';
                const result = yield conn.query(sql, [o.userId]);
                const order = result.rows[0];
                conn.release();
                return order;
            }
            catch (error) {
                throw new Error(`Can Not Create The Order The Error Is :${error}`);
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const sql = `DELETE FROM orders WHERE id=${id}`;
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql);
                const order = result.rows[0];
                conn.release();
                return order;
            }
            catch (error) {
                throw new Error(`Can Not Delete The Order ${id} The Error Is :${error}`);
            }
        });
    }
    AddProduct(quantity, orderId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const sql = `INSERT INTO  OrderItems(quantity, orderid,productid) VALUES($1,$2,$3) RETURNING *;`;
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [quantity, orderId, productId]);
                const order = result.rows[0];
                conn.release();
                return order;
            }
            catch (error) {
                throw new Error(`Can Not Add The Product ${productId} To The Order ${orderId} The Error Is :${error}`);
            }
        });
    }
}
exports.orderStore = orderStore;
