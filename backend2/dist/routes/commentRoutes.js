"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = require("../controllers/commentController");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const router = (0, express_1.Router)();
router.post('/:blogId', (0, clerk_sdk_node_1.ClerkExpressRequireAuth)(), commentController_1.createComment);
router.get('/:blogId', commentController_1.getCommentsForBlog);
exports.default = router;
//# sourceMappingURL=commentRoutes.js.map