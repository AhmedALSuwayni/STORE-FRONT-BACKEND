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
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt = __importStar(require("bcrypt"));
const { BCRYPT_PASSWORD, SALT_ROUND } = process.env;
class UserStore {
    Authntication(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = 'SELECT id,name,username,password FROM users WHERE username=$1;';
            const result = yield conn.query(sql, [user.username]);
            conn.release();
            if (result.rows.length) {
                const resUser = result.rows[0];
                if (bcrypt.compareSync(user.password + BCRYPT_PASSWORD, resUser.password)) {
                    console.log(resUser);
                    return resUser;
                }
            }
            return null;
        });
    }
    Index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM users;';
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Can Not Get Users The Error Is : ${error}`);
            }
        });
    }
    Show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const sql = `SELECT * FROM users WHERE id=$1;`;
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Can Not Get The User By ID: ${id} The Error Is : ${error}`);
            }
        });
    }
    Create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const sql = 'INSERT INTO users (name,username, password) VALUES($1,$2,$3) RETURNING *';
                const hash = bcrypt.hashSync(u.password + BCRYPT_PASSWORD, parseInt(SALT_ROUND));
                const result = yield conn.query(sql, [u.name, u.username, hash]);
                const user = result.rows[0];
                conn.release();
                return user;
            }
            catch (error) {
                throw new Error(`Can Not Create User By Name: ${u.username} The Error Is : ${error}`);
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `DELETE FROM users WHERE id=$1`;
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                const user = result.rows[0];
                conn.release();
                return user;
            }
            catch (error) {
                throw new Error(`Can Not Delete The User By ID: ${id} The Error Is : ${error}`);
            }
        });
    }
    Update(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `UPDATE users set name=$1 WHERE id=$2 RETURNING *;`;
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [name, id]);
                const user = result.rows[0];
                conn.release();
                return user;
            }
            catch (error) {
                throw new Error(`Can Not Update User Name At ID: ${id} The Error Is : ${error}`);
            }
        });
    }
}
exports.UserStore = UserStore;
