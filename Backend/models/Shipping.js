import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

const Shipping = sequelize.define('shipping', {
      shipping_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      order_id: {
        type: DataTypes.INTEGER
      },
      address: {
        type: DataTypes.TEXT
      },
      city: {
        type: DataTypes.STRING(100)
      },
      country: {
        type: DataTypes.STRING(100)
      },
      postal_code: {
        type: DataTypes.STRING(20)
      },
      tracking_number: {
        type: DataTypes.STRING(100)
      },
      shipping_date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      delivery_date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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
      tableName: 'Shipping',
      timestamps: false
});

export { Shipping };