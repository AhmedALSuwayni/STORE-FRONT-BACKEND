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
exports.productStore = void 0;
const database_1 = __importDefault(require("../database"));
class productStore {
    Index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM products;';
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Can Not Get Products The Error Is : ${error}`);
            }
        });
    }
    Show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const sql = `SELECT * FROM products WHERE id=$1;`;
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Can Not Get Product ${id} The Error Is : ${error}`);
            }
        });
    }
    Create(p) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const sql = 'INSERT INTO products(name, price,category) VALUES($1, $2, $3) RETURNING *;';
                const result = yield conn.query(sql, [p.name, p.price, p.category]);
                const product = result.rows[0];
                conn.release();
                return product;
            }
            catch (error) {
                throw new Error(`Can Not Create product (${p.name}): ${error}`);
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const sql = `DELETE FROM products WHERE id=$1`;
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                const product = result.rows[0];
                conn.release();
                return product;
            }
            catch (error) {
                throw new Error(`Can Not Delete Product ${id}The Error Is : ${error}`);
            }
        });
    }
    Update(name, price, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const sql = `UPDATE products set name=$1 ,price=$2 WHERE id=$3 RETURNING *;`;
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [name, price, id]);
                const product = result.rows[0];
                conn.release();
                return product;
            }
            catch (error) {
                throw new Error(`Can Not Update Product ${id} The Error Is : ${error}`);
            }
        });
    }
}
exports.productStore = productStore;
