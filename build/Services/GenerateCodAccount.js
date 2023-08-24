"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateCOD = void 0;
class GenerateCOD {
}
GenerateCOD.newCOD = () => {
    const number = Math.floor(Math.random() * 99999);
    const digit = Math.floor(Math.random() * 999);
    return `${number}-${digit}`;
};
exports.GenerateCOD = GenerateCOD;
