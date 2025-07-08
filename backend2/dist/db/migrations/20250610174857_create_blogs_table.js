"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable("blogs", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.text("content").notNullable();
        table.string("author_id").notNullable()
            .references("id").inTable("users").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}
async function down(knex) {
    await knex.schema.dropTableIfExists("blogs");
}
//# sourceMappingURL=20250610174857_create_blogs_table.js.map