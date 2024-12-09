"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drizzle_kit_1 = require("drizzle-kit");
exports.default = (0, drizzle_kit_1.defineConfig)({
    dialect: "postgresql",
    schema: "./db",
    out: "./drizzle",
    dbCredentials: {
        host: "postgres_container",
        port: 543,
        database: "mydb",
        user: "postgres",
        password: "root",
        ssl: false,
    },
});
