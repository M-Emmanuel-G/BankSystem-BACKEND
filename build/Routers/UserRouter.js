"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsRouter = void 0;
const ClientsController_1 = require("./../Controller/ClientsController");
const express_1 = __importDefault(require("express"));
exports.clientsRouter = express_1.default.Router();
const clientsController = new ClientsController_1.ClientsController();
exports.clientsRouter.get('/signup', clientsController.signup);
