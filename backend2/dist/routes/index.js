"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogRoutes_1 = __importDefault(require("./blogRoutes"));
const commentRoutes_1 = __importDefault(require("./commentRoutes"));
const router = (0, express_1.Router)();
router.use('/api/blogs', blogRoutes_1.default);
router.use('/api/comments', commentRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map