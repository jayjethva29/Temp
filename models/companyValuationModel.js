const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/sequlize');

const comapanyGrowthModel = require('./comapanyGrowthModel');
const yearlyValuationOutputModel = require('./yearlyValuationOutputModel');
const valuationOutputModel = require('./valuationOutputModel');

const company_valuation = sequelize.define(
  'company_valuation',
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
    },
    company_id: DataTypes.INTEGER(11),
    type: DataTypes.ENUM('FCFFM', 'FCFFM2'),
    fiscal_year: DataTypes.INTEGER(11),
    quarter: DataTypes.ENUM('Q1', 'Q2', 'Q3', 'Q4'),
    revenues: DataTypes.FLOAT,
    operating_income_ebit: DataTypes.FLOAT,
    interest_expense: DataTypes.FLOAT,
    cost_of_equity: DataTypes.FLOAT,
    equity_book_value: DataTypes.FLOAT,
    debit_book_value: DataTypes.FLOAT,
    cash_marketable_securities: DataTypes.FLOAT,
    cross_holdings: DataTypes.FLOAT,
    minority_interests: DataTypes.FLOAT,
    outstanding_shares: DataTypes.FLOAT,
    current_stock_price: DataTypes.FLOAT,
    effective_tax_rate: DataTypes.FLOAT,
    marginal_tax_rate: DataTypes.FLOAT,
    sales_capital_ratio: DataTypes.FLOAT,
    cost_of_capital: DataTypes.FLOAT,
    stable_growth: DataTypes.FLOAT,
    capitalized_rnd: DataTypes.FLOAT,
    research_asset: DataTypes.FLOAT,
    probability_failure: DataTypes.FLOAT,
    levered_beta: DataTypes.FLOAT,
    equity_risk_premium: DataTypes.FLOAT,
    average_maturity: DataTypes.FLOAT,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

company_valuation.hasOne(comapanyGrowthModel, { foreignKey: 'valuation_id' });
comapanyGrowthModel.belongsTo(company_valuation, {
  foreignKey: 'valuation_id',
});

company_valuation.hasOne(yearlyValuationOutputModel);
yearlyValuationOutputModel.belongsTo(company_valuation);

company_valuation.hasOne(valuationOutputModel, { foreignKey: 'valuation_id' });
valuationOutputModel.belongsTo(company_valuation, {
  foreignKey: 'valuation_id',
});

module.exports = company_valuation;
