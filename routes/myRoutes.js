const router = require('express').Router();
const myController = require('../controllers/myController');

router.get('/companies', myController.getCompanies);
router.get('/company-growths', myController.getCompantGrowths);
router.get('/valuations', myController.getValuations);
router.get('/valuation-outputs', myController.getValuationOutputs);

module.exports = router;
