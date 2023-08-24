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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'Users_Bank';
        this.getAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserDatabase.connection(this.TABLE_NAME)
                    .select();
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.SignUp = (newUser) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserDatabase.connection()
                    .insert(newUser)
                    .into(this.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.update = (newEdit) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser, password } = newEdit;
                yield UserDatabase.connection
                    .update({ password: password })
                    .where({ id: idUser })
                    .from(this.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserDatabase.connection
                    .delete()
                    .where(id)
                    .from(this.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.verifyUserByID = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserDatabase.connection
                    .select()
                    .where({ id })
                    .from(this.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.verifyEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserDatabase.connection
                    .select()
                    .where({ email })
                    .from(this.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.verifyCpf = (cpf) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserDatabase.connection(this.TABLE_NAME)
                    .select()
                    .where({ cpf });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getProfile = (token) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserDatabase.connection
                    .select()
                    .from(this.TABLE_NAME)
                    .where({ id: token.id });
                return result[0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserDatabase = UserDatabase;
