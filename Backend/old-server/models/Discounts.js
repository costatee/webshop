const Discounts = (sequelize) => {
    return sequelize.define('Discounts', {
      discount_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      code: {
        type: DataTypes.STRING(50)
      },
      type: {
        type: DataTypes.STRING(50)
      },
      value: {
        type: DataTypes.DECIMAL(10, 2)
      },
      expiry_date: {
        type: DataTypes.DATE
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
      tableName: 'Discounts',
      timestamps: false
    });
  };
  
  module.exports = Discounts;
  