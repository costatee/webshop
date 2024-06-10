import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize';

// Define the Sessions model
class Session extends Model {}

// Initialize the Sessions model with attributes and options
Session.init(
  {
    sid: {
      type: DataTypes.STRING(255), // Assuming VARCHAR(255)
      primaryKey: true,
    },
    sess: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    expire: {
      type: DataTypes.DATE(6), // Assuming TIMESTAMP(6)
      allowNull: false,
    },
  },
  {
    sequelize, // Pass the Sequelize instance
    modelName: 'Session', // Set the model name
    tableName: 'sessions', // Set the table name (optional, defaults to plural of model name)
    timestamps: false, // Disable timestamps (created_at, updated_at)
  }
);

// Export the Sessions model
export default Session;
