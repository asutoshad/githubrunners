"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("../db/knex"));
class Comment {
    static async createComment(content, userId, blogId) {
        const [comment] = await (0, knex_1.default)(this.table)
            .insert({ content, userId, blogId })
            .returning('*');
        return comment;
    }
    static async getCommentsForBlog(blogId) {
        return await (0, knex_1.default)(this.table)
            .join('users', 'comments.userId', 'users.id')
            .select('comments.*', 'users.id as userId', 'users.firstName', 'users.lastName')
            .where('comments.blogId', blogId)
            .orderBy('comments.createdAt', 'asc');
    }
}
Comment.table = 'comments';
exports.default = Comment;
//# sourceMappingURL=CommentModel.js.map