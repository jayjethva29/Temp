const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/sequlize');

const valuation_output = sequelize.define(
  'valuation_output',
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
    },
    valuation_id: DataTypes.INTEGER(11),
    company_id: DataTypes.INTEGER(11),
    case: DataTypes.STRING(50),
    terminal_cash_flow: DataTypes.FLOAT,
    terminal_cost_of_capital: DataTypes.FLOAT,
    terminal_value: DataTypes.FLOAT,
    pv_terminal_value: DataTypes.FLOAT,
    pv_cf_over_next_yr: DataTypes.FLOAT,
    sum_of_pv: DataTypes.FLOAT,
    probability_of_failiure: DataTypes.FLOAT,
    proceeds_if_firm_fail: DataTypes.FLOAT,
    operating_assets: DataTypes.FLOAT,
    debt: DataTypes.FLOAT,
    minority_interests: DataTypes.FLOAT,
    cash_plus: DataTypes.FLOAT,
    non_operating_assets: DataTypes.FLOAT,
    value_of_equity: DataTypes.FLOAT,
    value_of_options: DataTypes.FLOAT,
    common_stock_equity: DataTypes.FLOAT,
    estimated_share: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    price_percent: DataTypes.FLOAT,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = valuation_output;
