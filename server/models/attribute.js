'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attribute extends Model {
    static associate(models) {
      Attribute.belongsToMany(models.Product, {through: 'Product_Attribute', foreignKey: 'productId'})
    }
  };
  Attribute.init({
    type: {type: DataTypes.STRING, unique: 'compositeIndex'},
    value:{type: DataTypes.STRING, unique: 'compositeIndex'},
  }, {
    sequelize,
    modelName: 'Attribute',
    indexes: [
      {
        unique: true,
        fields: ['type', 'value']
      
      }
    ]
  });
  return Attribute;
};