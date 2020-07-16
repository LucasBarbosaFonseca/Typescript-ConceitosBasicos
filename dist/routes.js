"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWord = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWord(request, response) {
    var user = CreateUser_1.default({
        name: "Lucas Barbosa Fonseca",
        email: "lufonsecabarbosa@hotmail.com",
        password: "12345",
        techs: ["NodeJs", "ReactJs", "React Native"],
    });
    return response.json(user);
}
exports.helloWord = helloWord;
