import * as schema from "./schema"
import { drizzle } from 'drizzle-orm/postgres-js'
import { sql } from "@vercel/postgres";

export const db = drizzle(sql, { schema })