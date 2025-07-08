"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsForBlog = exports.createComment = void 0;
const commentService = __importStar(require("../services/CommentService"));
function getClerkUserId(req) {
    var _a;
    return (_a = req.auth) === null || _a === void 0 ? void 0 : _a.userId;
}
const createComment = async (req, res) => {
    const { content } = req.body;
    const blogId = Number(req.params.blogId);
    const userId = getClerkUserId(req);
    if (!content || !userId || !blogId) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    try {
        const comment = await commentService.createComment(content, userId, blogId);
        res.status(201).json(comment);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to create comment" });
    }
};
exports.createComment = createComment;
const getCommentsForBlog = async (req, res) => {
    const blogId = Number(req.params.blogId);
    try {
        const comments = await commentService.getCommentsForBlog(blogId);
        res.json(comments);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
};
exports.getCommentsForBlog = getCommentsForBlog;
//# sourceMappingURL=commentController.js.map