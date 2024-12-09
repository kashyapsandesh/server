"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: "postgresql://postgres:root@localhost:5432/mydb",
});
exports.db = (0, node_postgres_1.drizzle)(pool);
