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
Object.defineProperty(exports, "__esModule", { value: true });
const tokenAuthentication_1 = require("../middleware/tokenAuthentication");
const user_1 = require("../models/user");
const jwt = __importStar(require("jsonwebtoken"));
const store = new user_1.UserStore();
const Index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield store.Index();
        res.json(users);
    }
    catch (error) {
        res.status(400);
        res.json(`rejected token ${error}`);
    }
});
const Show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield store.Show(req.params.id);
        res.json(user);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    const user = {
        name: data.name,
        username: data.username,
        password: data.password
    };
    try {
        const newUser = yield store.Create(user);
        const token = jwt.sign({ name: newUser.name }, process.env.TOKEN_SECRET + "");
        res.json({ idToken: token });
    }
    catch (error) {
        res.status(400);
        res.json(error + "for The user: " + user);
    }
});
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    const userinput = {
        username: data.username,
        password: data.password
    };
    try {
        const user = yield store.Authntication(userinput);
        if (user === null) {
            res.json('You Need To Sign up First');
        }
        else {
            const token = jwt.sign({ name: user.name }, process.env.TOKEN_SECRET + "");
            res.json({ idToken: token });
        }
    }
    catch (error) {
        res.status(401);
        res.json({ error });
    }
});
const DecodedToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(res.locals.decoded.user);
});
const user_routes = (app) => {
    app.get('/users', tokenAuthentication_1.authenticateToken, Index);
    app.get('/users/:id', tokenAuthentication_1.authenticateToken, Show);
    app.post('/signin', signin);
    app.post('/signup', Create);
    app.get("/user/decoded", tokenAuthentication_1.authenticateToken, DecodedToken);
};
exports.default = user_routes;
