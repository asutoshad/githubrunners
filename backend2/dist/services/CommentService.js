"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsForBlog = exports.createComment = void 0;
const CommentModel_1 = __importDefault(require("../models/CommentModel"));
const createComment = (content, userId, blogId) => {
    return CommentModel_1.default.createComment(content, userId, blogId);
};
exports.createComment = createComment;
const getCommentsForBlog = (blogId) => {
    return CommentModel_1.default.getCommentsForBlog(blogId);
};
exports.getCommentsForBlog = getCommentsForBlog;
//# sourceMappingURL=CommentService.js.map