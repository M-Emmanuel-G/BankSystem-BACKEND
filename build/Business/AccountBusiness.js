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
exports.AccountBusiness = void 0;
const UsersErrors_1 = require("./../CustomErrors/UsersErrors");
const AccountDatabase_1 = require("../Database/AccountDatabase");
const GenerateCodAccount_1 = require("../Services/GenerateCodAccount");
const GenerateId_1 = require("../Services/GenerateId");
class AccountBusiness {
    constructor() {
        this.accountDatabse = new AccountDatabase_1.AccountDatabase();
        this.createAccount = (fkUser) => __awaiter(this, void 0, void 0, function* () {
            const idAccount = GenerateId_1.GenerateId.newID();
            const codAccount = GenerateCodAccount_1.GenerateCOD.newCOD();
            try {
                const newAccount = {
                    idAccount,
                    codAccount,
                    balance: 0,
                    fkUser
                };
                yield this.accountDatabse.createAccount(newAccount);
            }
            catch (error) {
            }
        });
        this.updateAccount = (update) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { balance, fkUser } = update;
                if (!balance)
                    throw new UsersErrors_1.BodyNotInserted();
                const newUpdate = {
                    balance,
                    fkUser
                };
                yield this.accountDatabse.updateAccount(newUpdate);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.deleteAccount = () => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getAccountById = () => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getAccountByCOD = () => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.AccountBusiness = AccountBusiness;
