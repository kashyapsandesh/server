import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./db",
  out: "./drizzle",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    database: "mydb",
    user: "postgres",
    password: "root",
    ssl: false,
  },
});
