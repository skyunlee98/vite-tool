"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sub_1 = require("./sub");
const a = 10;
const sum = (a, b) => a + b;
const b = (0, sub_1._sum)(1, 5);
function greeting(user) {
    return `${user}님 반갑습니다 :)`;
}
