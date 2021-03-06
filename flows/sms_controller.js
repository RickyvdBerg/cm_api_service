const sms = require('../actions/send_sms');

module.exports = {
    sendSMS(req, res) {
        let json = req.body;

        sms.sendSMS(json.token, json.content, json.to, json.from).then((bool) => {
            console.log(bool);
            if (bool) {
                console.log(bool);
                res.status(200);
                res.send({
                    "Message": "SMS send out"
                });
            }
            else{
                console.log(bool);
                res.status(0);
            }
        });
    }
};