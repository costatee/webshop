const Inventory = (sequelize) => {
    return sequelize.define('Inventory', {
      inventory_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      product_id: {
        type: DataTypes.INTEGER
      },
      quantity_available: {
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
      tableName: 'Inventory',
      timestamps: false
    });
  };
  
  module.exports = Inventory;
  