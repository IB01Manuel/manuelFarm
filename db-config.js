// db.config.js
import dotenv from "dotenv";
dotenv.config();

// Determine connection method based on environment
const getDbConfig = () => {
  // Production/Render environment
  if (process.env.DATABASE_URL) {
    return {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    };
  }
  
  // Local development environment
  return {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'manuelFarm',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT) || 5432,
    ssl: false
  };
};

const dbConfig = getDbConfig();
export default dbConfig;