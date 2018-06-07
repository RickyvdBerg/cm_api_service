var httpRequest = require('../actions/http_request');
var numberValidation = require('../actions/number_validation');
var sendSms = require('../actions/send_sms');

module.exports = {
    flowDomainChecker(req, res) {
        let json = req.body;
        httpRequest.isUp(json.url).then((bool) => {
            if (bool) {
                numberValidation.validateNumer(json.phoneNumber, json.token).then((bool) => {
                    if (bool) {
                        sendSms.sendSms(json.token, json.message, json.phoneNumber, json.from);         
                    }
                });
            }
        });
    }
}