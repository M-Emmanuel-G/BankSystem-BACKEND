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
exports.AccountDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class AccountDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'Account_Bank';
        this.createAccount = (account) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idAccount, codAccount, balance, fkUser } = account;
                yield AccountDatabase.connection(this.TABLE_NAME)
                    .insert({
                    id_account: idAccount,
                    cod_account: codAccount,
                    balance,
                    fk_user: fkUser
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.updateAccount = (update) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { balance, fkUser } = update;
                yield AccountDatabase.connection(this.TABLE_NAME)
                    .update({
                    balance,
                })
                    .where({
                    fk_user: fkUser
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.deleteAccount = (codAccount) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield AccountDatabase.connection(this.TABLE_NAME)
                    .delete()
                    .where({
                    cod_account: codAccount
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getAccountById = (idAccount) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield AccountDatabase.connection(this.TABLE_NAME)
                    .select()
                    .where({
                    id_account: idAccount
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getAccountByCOD = (codAccount) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield AccountDatabase.connection(this.TABLE_NAME)
                    .select()
                    .where({
                    cod_account: codAccount
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.AccountDatabase = AccountDatabase;
