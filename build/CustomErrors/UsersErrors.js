"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfAlreadyUsed = exports.EmailAlreadyUsed = exports.PasswordNotInserted = exports.IdNotInserted = exports.TokenNotInserted = exports.NotAuthorized = exports.UserNotFound = exports.PasswordWrong = exports.EmailInvalid = exports.PasswordInvalid = exports.BodyNotInserted = void 0;
const CustomErrors_1 = require("./CustomErrors");
class BodyNotInserted extends CustomErrors_1.CustomError {
    constructor() {
        super(422, 'Todas as informações devem ser inseridas.');
    }
}
exports.BodyNotInserted = BodyNotInserted;
class PasswordInvalid extends CustomErrors_1.CustomError {
    constructor() {
        super(422, 'A senha precisa conter no minimo 6 caractéres.');
    }
}
exports.PasswordInvalid = PasswordInvalid;
class EmailInvalid extends CustomErrors_1.CustomError {
    constructor() {
        super(422, 'Formato inválido do email.');
    }
}
exports.EmailInvalid = EmailInvalid;
class PasswordWrong extends CustomErrors_1.CustomError {
    constructor() {
        super(404, 'Senha incorreta.');
    }
}
exports.PasswordWrong = PasswordWrong;
class UserNotFound extends CustomErrors_1.CustomError {
    constructor() {
        super(422, 'Usuario não encontrado..');
    }
}
exports.UserNotFound = UserNotFound;
class NotAuthorized extends CustomErrors_1.CustomError {
    constructor() {
        super(404, 'Usuário não autorizado.');
    }
}
exports.NotAuthorized = NotAuthorized;
class TokenNotInserted extends CustomErrors_1.CustomError {
    constructor() {
        super(422, 'Token nao foi inserido.');
    }
}
exports.TokenNotInserted = TokenNotInserted;
class IdNotInserted extends CustomErrors_1.CustomError {
    constructor() {
        super(422, 'O id não foi inserido.');
    }
}
exports.IdNotInserted = IdNotInserted;
class PasswordNotInserted extends CustomErrors_1.CustomError {
    constructor() {
        super(422, 'Senha não foi inserida.');
    }
}
exports.PasswordNotInserted = PasswordNotInserted;
class EmailAlreadyUsed extends CustomErrors_1.CustomError {
    constructor() {
        super(404, 'Este email já esta sendo utilizado por outra conta.');
    }
}
exports.EmailAlreadyUsed = EmailAlreadyUsed;
class CpfAlreadyUsed extends CustomErrors_1.CustomError {
    constructor() {
        super(404, 'Este cpf já esta sendo utilizado por outra conta.');
    }
}
exports.CpfAlreadyUsed = CpfAlreadyUsed;
