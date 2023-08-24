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
exports.UserController = void 0;
const UserBusiness_1 = require("../Business/UserBusiness");
class UserController {
    constructor() {
        this.userBusiness = new UserBusiness_1.UserBusiness();
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                const result = yield this.userBusiness.getAllUsers(token);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nameClient, email, password, cpf } = req.body;
                const user = {
                    nameClient,
                    email,
                    password,
                    cpf
                };
                const token = yield this.userBusiness.signup(user);
                res.status(200).send({ message: 'Usuario criado com sucesso...', token });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = {
                    email,
                    password
                };
                const token = yield this.userBusiness.login(user);
                res.status(200).send({ message: 'Login Realizado com sucesso', token });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                const idUser = req.params.idUser;
                const { password } = req.body;
                const newEdit = {
                    idUser,
                    password
                };
                yield this.userBusiness.update(newEdit, token);
                res.status(200).send('Your password has been updated successfully');
            }
            catch (error) {
                res.status(200).send(error.message || error.mysql);
            }
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                const { idUser } = req.params;
                const removeUser = {
                    idUser
                };
                yield this.userBusiness.remove(removeUser, token);
                res.status(200).send('The user has been removed successfully');
            }
            catch (error) {
                res.status(200).send(error.message || error.mysql);
            }
        });
        this.getProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const inToken = req.headers.authorization;
                const result = yield this.userBusiness.getProfile(inToken);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.UserController = UserController;
