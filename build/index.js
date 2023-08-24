"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRouter_1 = require("./Routers/UserRouter");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/clients', UserRouter_1.clientsRouter);
app.listen(3004, () => {
    console.log(`SERVER IS RUNNING IN LOCALHOST:3003`);
});
