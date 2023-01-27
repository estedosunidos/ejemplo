const otpGenerator = require("otp-generator");
function generateOTP() {
  const OTP = otpGenerator.generate(6, { digits: true, specialChars: false });
  return OTP;
}
module.exports = { generateOTP };

// The OTP_LENGTH is a number, For my app i selected 10.
// The OTP_CONFIG is an object that looks like
