'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Attribute extends Model {
    static associate(models) {

    }
  };
  Product_Attribute.init({
    productId: DataTypes.STRING,
    attributeId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product_Attribute',
  },{
    indexes: [
      {
          unique: true,
          fields: ['productId', 'attributeId']
      }
    ]
});
  return Product_Attribute;
};