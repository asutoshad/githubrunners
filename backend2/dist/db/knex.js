"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("./knexfile"));
const knex_stringcase_1 = __importDefault(require("knex-stringcase"));
const knexStringCaseConfig = (0, knex_stringcase_1.default)(knexfile_1.default[process.env.NODE_ENV || "local"]);
const knex = (0, knex_1.default)(knexStringCaseConfig);
exports.default = knex;
//# sourceMappingURL=knex.js.map