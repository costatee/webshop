import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

const Translations = sequelize.define('translations', {
      translation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      key: {
        type: DataTypes.STRING(255)
      },
      language_code: {
        type: DataTypes.STRING(10)
      },
      value: {
        type: DataTypes.TEXT
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
      tableName: 'translations',
      timestamps: false
});

  
export { Translations };
  