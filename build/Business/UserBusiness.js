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
exports.UserBusiness = void 0;
const UsersErrors_1 = require("./../CustomErrors/UsersErrors");
const UsersErrors_2 = require("../CustomErrors/UsersErrors");
const Users_Database_1 = require("../Database/Users.Database");
const Authenticator_1 = require("../Services/Authenticator");
const GenerateId_1 = require("../Services/GenerateId");
class UserBusiness {
    constructor() {
        this.userDatabase = new Users_Database_1.UserDatabase();
        this.authenticator = new Authenticator_1.Authenticator();
        this.getAllUsers = (token) => __awaiter(this, void 0, void 0, function* () {
            try {
                const verifyToken = this.authenticator.getTokenData(token);
                if (!verifyToken)
                    throw new UsersErrors_2.NotAuthorized();
                const result = this.userDatabase.getAllUsers();
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.signup = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nameClient, email, password, cpf } = user;
                const verifyEmail = yield this.userDatabase.verifyEmail(email);
                const verifyCpf = yield this.userDatabase.verifyCpf(cpf);
                if (!nameClient || !email || !password)
                    throw new UsersErrors_2.BodyNotInserted();
                if (!email.includes('@'))
                    throw new UsersErrors_2.EmailInvalid();
                if (password.length < 6)
                    throw new UsersErrors_2.PasswordInvalid();
                if (verifyEmail.length === 1)
                    throw new UsersErrors_1.EmailAlreadyUsed();
                if (verifyCpf.length === 1)
                    throw new UsersErrors_1.CpfAlreadyUsed();
                const idUser = GenerateId_1.GenerateId.newID();
                const newUser = {
                    idUser,
                    nameClient,
                    email,
                    password,
                    cpf
                };
                yield this.userDatabase.SignUp(newUser);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.login = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = user;
                if (!email || !password)
                    throw new UsersErrors_2.BodyNotInserted();
                if (!email.includes('@'))
                    throw new UsersErrors_2.EmailInvalid();
                if (email.length < 6)
                    throw new UsersErrors_2.PasswordInvalid();
                const verifyEmail = yield this.userDatabase.verifyEmail(email);
                if (verifyEmail.length !== 1)
                    throw new UsersErrors_2.UserNotFound();
                if (verifyEmail[0].password !== password)
                    throw new UsersErrors_2.PasswordWrong();
                const token = this.authenticator.generateToken({ id: verifyEmail[0].id });
                return token;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.update = (newEdit, token) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser, password } = newEdit;
                const verifyToken = this.authenticator.getTokenData(token);
                if (!verifyToken)
                    throw new UsersErrors_2.NotAuthorized();
                if (!password)
                    throw new UsersErrors_2.PasswordNotInserted();
                if (password.length < 6)
                    throw new UsersErrors_2.PasswordInvalid();
                const edit = {
                    idUser,
                    password
                };
                const userExist = yield this.userDatabase.verifyUserByID(idUser);
                if (userExist.length !== 1)
                    throw new UsersErrors_2.UserNotFound();
                yield this.userDatabase.update(edit);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.remove = (removeUser, token) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser } = removeUser;
                const userExist = yield this.userDatabase.verifyUserByID(idUser);
                if (userExist.length !== 1)
                    throw new UsersErrors_2.UserNotFound();
                const verifyToken = this.authenticator.getTokenData(token);
                if (!verifyToken)
                    throw new UsersErrors_2.NotAuthorized();
                const newRemoveUser = {
                    idUser
                };
                yield this.userDatabase.remove(newRemoveUser);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getProfile = (inToken) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!inToken)
                    throw new UsersErrors_2.TokenNotInserted();
                const token = this.authenticator.getTokenData(inToken);
                if (!token)
                    throw new UsersErrors_2.NotAuthorized();
                const result = yield this.userDatabase.getProfile(token);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
