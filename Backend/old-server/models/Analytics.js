const Analytics = (sequelize) => {
    return sequelize.define('Analytics', {
      analytics_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER
      },
      action: {
        type: DataTypes.STRING(100)
      },
      product_id: {
        type: DataTypes.INTEGER
      },
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      tableName: 'analytics',
      timestamps: false
    });
  };
  
  module.exports = Analytics;
  