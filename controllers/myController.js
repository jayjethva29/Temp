const comapanyGrowthModel = require('../models/comapanyGrowthModel');
const companyModel = require('../models/companyModel');
const companyValuationModel = require('../models/companyValuationModel');
const valuationOutputModel = require('../models/valuationOutputModel');
const yearlyValuationOutputModel = require('../models/yearlyValuationOutputModel');

exports.getCompanies = async (req, res, next) => {
  try {
    const companies = await companyModel.findAll();
    res.status(200).json({
      status: ' success',
      results: companies.length,
      data: {
        data: companies,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getCompantGrowths = async (req, res, next) => {
  try {
    const company_growth = await comapanyGrowthModel.findAll();
    res.status(200).json({
      status: ' success',
      results: company_growth.length,
      data: {
        data: company_growth,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getValuations = async (req, res, next) => {
  try {
    const company_valuation = await companyValuationModel.findAll();
    res.status(200).json({
      status: ' success',
      results: company_valuation.length,
      data: {
        data: company_valuation,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getValuationOutputs = async (req, res, next) => {
  try {
    const company_valuation_outputs = await valuationOutputModel.findAll();
    res.status(200).json({
      status: ' success',
      results: company_valuation_outputs.length,
      data: {
        data: company_valuation_outputs,
      },
    });
  } catch (err) {
    next(err);
  }
};
