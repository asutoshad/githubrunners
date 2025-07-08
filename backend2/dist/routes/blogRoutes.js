"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = require("../controllers/blogController");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const router = (0, express_1.Router)();
router.post('/', (0, clerk_sdk_node_1.ClerkExpressRequireAuth)(), blogController_1.createBlog);
router.get('/', blogController_1.getAllBlogs);
router.get('/:id', blogController_1.getBlog);
exports.default = router;
//# sourceMappingURL=blogRoutes.js.map