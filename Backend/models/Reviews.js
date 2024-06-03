const Review = (sequelize) => {
    return sequelize.define('Review', {
      review_id: {
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
      rating: {
        type: DataTypes.INTEGER
      },
      comment: {
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
      tableName: 'Reviews',
      timestamps: false
    });
  };
  
  module.exports = Review;
  