"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateId = void 0;
const uuid_1 = require("uuid");
class GenerateId {
}
GenerateId.newID = () => {
    return (0, uuid_1.v4)();
};
exports.GenerateId = GenerateId;
