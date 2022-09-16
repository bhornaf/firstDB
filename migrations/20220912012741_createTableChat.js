/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("chat", (table) => {
        table.increments("id").primary();
        table.string("email").notNullable();
        table.string("message").notNullable();
        table.integer("likes").notNullable();
        table.dateTime("date").notNullable(knex.fn.now());
        table.string("socket_id").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("chat");
};
