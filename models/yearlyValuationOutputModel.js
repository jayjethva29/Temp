const { Sequelize, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../utils/sequlize');

const yearly_valuation_output = sequelize.define('yearly_valuation_output', {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
  },
  valuation_id: DataTypes.INTEGER(11),
  valuation_output_id: INTEGER(11),
  case: DataTypes.STRING(100),
  company_id: DataTypes.INTEGER(11),
  field_name: DataTypes.STRING(255),
  base_year: DataTypes.FLOAT,
  year_1: DataTypes.FLOAT,
  year_2: DataTypes.FLOAT,
  year_3: DataTypes.FLOAT,
  year_4: DataTypes.FLOAT,
  year_5: DataTypes.FLOAT,
  year_6: DataTypes.FLOAT,
  year_7: DataTypes.FLOAT,
  year_8: DataTypes.FLOAT,
  year_9: DataTypes.FLOAT,
  year_10: DataTypes.FLOAT,
  terminal: DataTypes.FLOAT,
  display_order: INTEGER(2),
});

module.exports = yearly_valuation_output;
