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
exports.AccountController = void 0;
const AccountBusiness_1 = require("./../Business/AccountBusiness");
class AccountController {
    constructor() {
        this.accountBusiness = new AccountBusiness_1.AccountBusiness();
        this.createAccount = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const idClient = req.params.idClient;
                yield this.accountBusiness.createAccount(idClient);
                res.status(200).send({ message: 'Sua conta foi criada com sucesso...' });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.updateAccount = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.deleteAccount = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.getAccountById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.getAccountByCOD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.AccountController = AccountController;
