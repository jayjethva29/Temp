const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/sequlize');

const company_growth = sequelize.define(
  'company_growth',
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
    },
    company_id: DataTypes.INTEGER(11),
    valuation_id: DataTypes.INTEGER(11),
    gr_this_year_best: DataTypes.FLOAT,
    gr_this_year_base: DataTypes.FLOAT,
    gr_this_year_worst: DataTypes.FLOAT,
    gr_next_year_best: DataTypes.FLOAT,
    gr_next_year_base: DataTypes.FLOAT,
    gr_next_year_worst: DataTypes.FLOAT,
    gr_third_year_best: DataTypes.FLOAT,
    gr_third_year_base: DataTypes.FLOAT,
    gr_third_year_worst: DataTypes.FLOAT,
    gr_fourth_year_best: DataTypes.FLOAT,
    gr_fourth_year_base: DataTypes.FLOAT,
    gr_fourth_year_worst: DataTypes.FLOAT,
    gr_fifth_year_best: DataTypes.FLOAT,
    gr_fifth_year_base: DataTypes.FLOAT,
    gr_fifth_year_worst: DataTypes.FLOAT,
    compounded_revenue_growth_best: DataTypes.FLOAT,
    compounded_revenue_growth_base: DataTypes.FLOAT,
    compounded_revenue_growth_worst: DataTypes.FLOAT,
    risk_free_rate_best: DataTypes.FLOAT,
    risk_free_rate_base: DataTypes.FLOAT,
    risk_free_rate_worst: DataTypes.FLOAT,
    op_margin_first_year_best: DataTypes.FLOAT,
    op_margin_first_year_base: DataTypes.FLOAT,
    op_margin_first_year_worst: DataTypes.FLOAT,
    op_margin_next_year_best: DataTypes.FLOAT,
    op_margin_next_year_base: DataTypes.FLOAT,
    op_margin_next_year_worst: DataTypes.FLOAT,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = company_growth;
