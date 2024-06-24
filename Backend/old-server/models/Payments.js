const Payments = (sequelize) => {
    return sequelize.define('Payments', {
      payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      order_id: {
        type: DataTypes.INTEGER
      },
      payment_method: {
        type: DataTypes.STRING(100)
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2)
      },
      transaction_id: {
        type: DataTypes.STRING(255)
      },
      payment_date: {
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
      tableName: 'Payments',
      timestamps: false
    });
  };
  
  module.exports = Payments;
  