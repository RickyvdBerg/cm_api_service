const express = require('express');
const router = express.Router();
const domainCheckerController = require('../flows/domain_checker_controller');

//
// Catch all
//

router.all("*", function (req, res, next) {

    //logging or something
    next();
});

//
router.post('/domain_checker', domainCheckerController.flowDomainChecker);

module.exports = router;