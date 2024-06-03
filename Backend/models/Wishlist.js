// Import Sequelize and the sequelize instance
import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

const Wishlist = sequelize.define('wishlist', {
      wishlist_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER
      },
      product_id: {
        type: DataTypes.INTEGER
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      tableName: 'wishlist',
      timestamps: false
});

export { Wishlist };

