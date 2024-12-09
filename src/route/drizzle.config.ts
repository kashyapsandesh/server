import { defineConfig } from "drizzle-kit";
export default defineConfig({
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
