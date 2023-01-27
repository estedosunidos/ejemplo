const router = require("express-promise-router")();
const { authentication1 } = require("../controller/auth");
const { sendOTP } = require("../controller/generate_OTP");

router.post("/auth", authentication1);
router.get("/otp", sendOTP);
module.exports = router;
