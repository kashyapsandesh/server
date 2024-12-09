import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const pool = new Pool({
  connectionString: "postgresql://postgres:root@postgres_container:5433/mydb",
});
export const db = drizzle(pool);
