const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/sequlize');
const companyValuationModel = require('../models/companyValuationModel');
const comapanyGrowthModel = require('../models/comapanyGrowthModel');

const company = sequelize.define(
  'company',
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
    },
    ticker: DataTypes.STRING(100),
    name: DataTypes.STRING(255),
    incorporation_country: DataTypes.STRING(255),
    valuation_currency: DataTypes.STRING(50),
    sector_id: DataTypes.INTEGER(11),
    industry_id: DataTypes.INTEGER(11),
    created_at: DataTypes.DATE,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

company.hasOne(companyValuationModel, { foreignKey: 'company_id' });
companyValuationModel.belongsTo(company, { foreignKey: 'company_id' });

module.exports = company;
