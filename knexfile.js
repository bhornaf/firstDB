// const dotenv = require("dotenv");
// dotenv.config();

// const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
// const DATABASE_PORT = process.env.DATABASE_PORT || "3306";
// const DATABASE_USER = process.env.DATABASE_USER || "root";
// const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "Estuarhf1993";
// const DATABASE_NAME = process.env.DATABASE_NAME || "chat";

const knexConfig = {
    client: "sqlite3", // or 'better-sqlite3'
    connection: {
        filename: "database.sqlite",
    },
    migrations: {
        tableName: "knex_migrations",
        directory: "./migrations",
    },
    seeds: {
        tableName: "knex_seeds",
        directory: "./seeds",
    },
};

module.exports = knexConfig;
