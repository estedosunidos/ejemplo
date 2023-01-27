const { generateOTP } = require("../util/js/generate_OTP");
module.exports = {
  sendOTP: function (req, res) {
    const OTP = generateOTP();
    console.log(OTP);
    if (OTP) {
      return res.status(200).send({ otp: OTP });
    } else {
      return res.status(500).send();
    }
  },
};
