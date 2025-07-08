"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBlogById = exports.listBlogs = exports.createBlogPost = void 0;
const BlogModel_1 = __importDefault(require("../models/BlogModel"));
const createBlogPost = (title, content, authorId) => {
    return BlogModel_1.default.createBlog(title, content, authorId);
};
exports.createBlogPost = createBlogPost;
const listBlogs = () => {
    return BlogModel_1.default.getAllBlogs();
};
exports.listBlogs = listBlogs;
const findBlogById = (id) => {
    return BlogModel_1.default.getBlogById(id);
};
exports.findBlogById = findBlogById;
//# sourceMappingURL=BlogService.js.map