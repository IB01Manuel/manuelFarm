// db.config.js
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  connectionString: process.env.DATABASE_URL, // Use connectionString for DATABASE_URL
};

export default dbConfig;