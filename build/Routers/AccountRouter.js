"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRouter = void 0;
const AccountController_1 = require("./../Controller/AccountController");
const express_1 = __importDefault(require("express"));
exports.accountRouter = express_1.default.Router();
const accountController = new AccountController_1.AccountController();
exports.accountRouter.post('/create/:idClient', accountController.createAccount);
