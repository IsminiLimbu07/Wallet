import {neon} from '@neondatabase/serverless';

import "dotenv/config";

// CREATES A SQL CONNECTION USING OUR DB URL
export const sql = neon(process.env.DATABASE_URL);

    