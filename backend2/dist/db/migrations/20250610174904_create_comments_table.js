"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable("comments", (table) => {
        table.increments("id").primary();
        table.text("content").notNullable();
        table.string("user_id").notNullable()
            .references("id").inTable("users").onDelete("CASCADE");
        table.integer("blog_id").notNullable()
            .references("id").inTable("blogs").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}
async function down(knex) {
    await knex.schema.dropTableIfExists("comments");
}
//# sourceMappingURL=20250610174904_create_comments_table.js.map