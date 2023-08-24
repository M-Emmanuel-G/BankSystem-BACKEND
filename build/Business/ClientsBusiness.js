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
exports.ClientsBusiness = void 0;
const ClientsDatabase_1 = require("./../Database/ClientsDatabase");
const GenerateId_1 = require("../Services/GenerateId");
class ClientsBusiness {
    constructor() {
        this.clientsDatabase = new ClientsDatabase_1.ClientsDatabase();
        this.signup = (client) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nameClient, cpf, phone, email } = client;
                if (!nameClient || !cpf || !phone || !email)
                    throw new Error("Todas as informacoes sao necessarias");
                const idClient = GenerateId_1.GenerateId.newID();
                const newClient = {
                    idClient,
                    nameClient,
                    cpf,
                    phone,
                    email
                };
                yield this.clientsDatabase.signup(newClient);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.ClientsBusiness = ClientsBusiness;
