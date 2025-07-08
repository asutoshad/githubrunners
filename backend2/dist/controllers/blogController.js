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
exports.getBlog = exports.getAllBlogs = exports.createBlog = void 0;
const blogService = __importStar(require("../services/BlogService"));
function getClerkUserId(req) {
    var _a;
    return (_a = req.auth) === null || _a === void 0 ? void 0 : _a.userId;
}
const createBlog = async (req, res) => {
    const { title, content } = req.body;
    const authorId = getClerkUserId(req);
    if (!title || !content || !authorId) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    try {
        const blog = await blogService.createBlogPost(title, content, authorId);
        res.status(201).json(blog);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to create blog" });
    }
};
exports.createBlog = createBlog;
const getAllBlogs = async (_req, res) => {
    try {
        const blogs = await blogService.listBlogs();
        res.json(blogs);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch blogs" });
    }
};
exports.getAllBlogs = getAllBlogs;
const getBlog = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const blog = await blogService.findBlogById(id);
        if (!blog) {
            res.status(404).json({ error: "Blog not found" });
            return;
        }
        res.json(blog);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch blog" });
    }
};
exports.getBlog = getBlog;
//# sourceMappingURL=blogController.js.map