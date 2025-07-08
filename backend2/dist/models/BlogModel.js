"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("../db/knex"));
class Blog {
    static async createBlog(title, content, authorId) {
        const [blog] = await (0, knex_1.default)(this.table)
            .insert({ title, content, authorId })
            .returning('*');
        return blog;
    }
    static async getAllBlogs() {
        return await (0, knex_1.default)(this.table)
            .join('users', 'blogs.authorId', 'users.id')
            .select('blogs.*', 'users.id as userId', 'users.firstName', 'users.lastName')
            .orderBy('blogs.createdAt', 'desc');
    }
    static async getBlogById(id) {
        return await (0, knex_1.default)(this.table)
            .join('users', 'blogs.authorId', 'users.id')
            .select('blogs.*', 'users.id as userId', 'users.firstName', 'users.lastName')
            .where('blogs.id', id)
            .first();
    }
}
Blog.table = 'blogs';
exports.default = Blog;
//# sourceMappingURL=BlogModel.js.map