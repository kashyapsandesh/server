import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const pool = new Pool({
  connectionString: "postgresql://postgres:root@localhost:5432/mydb",
});
export const db = drizzle(pool);
