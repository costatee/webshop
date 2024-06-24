const Admins = (sequelize) => {
    return sequelize.define('Admins', {
      admin_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING(100)
      },
      email: {
        type: DataTypes.STRING(100)
      },
      password_hash: {
        type: DataTypes.STRING(255)
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
      tableName: 'admins',
      timestamps: false
    });
  };
  
  module.exports = Admins;

  