/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("products", (table) => {
        table.increments("id").primary().notNullable();
        table.string("title").notNullable();
        table.decimal("price").notNullable();
        table.string("thumbnail").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("products");
};
