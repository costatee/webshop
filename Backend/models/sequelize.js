import { Sequelize } from 'sequelize';
import env from 'dotenv';

// Load environment variables from .env file
env.config();

// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.PG_DATABASE, // Database name from .env file
  process.env.PG_USER, // Database username from .env file
  process.env.PG_PASSWORD, // Database password from .env file
  {
    host: process.env.PG_HOST, // Database host
    port: process.env.PG_PORT, // Database port
    dialect: 'postgres', // Specify the dialect (postgres in this case)
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

export default sequelize;
