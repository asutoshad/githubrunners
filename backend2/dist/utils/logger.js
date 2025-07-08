"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const { combine, timestamp, printf, errors } = winston_1.format;
const logDir = path_1.default.join(__dirname, "../logs");
if (!fs_1.default.existsSync(logDir)) {
    fs_1.default.mkdirSync(logDir, { recursive: true });
}
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});
const logger = (0, winston_1.createLogger)({
    level: "info",
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), logFormat),
    transports: [
        new winston_1.transports.File({
            filename: path_1.default.join(logDir, "error.log"),
            level: "error",
            options: { flags: 'a' },
        }),
        new winston_1.transports.File({
            filename: path_1.default.join(logDir, "combined.log"),
            options: { flags: 'a' },
        }),
    ],
});
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston_1.transports.Console({ format: winston_1.format.simple() }));
}
exports.default = logger;
//# sourceMappingURL=logger.js.map