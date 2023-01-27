const { ejemplo } = require("../integration/soapclient");

async function ejemplo1(girador) {
  let body = {
    NumberToWords:{
        ubiNum:526
    }
    
  };
  let result = await ejemplo(body);
  return result;
}
module.exports = { ejemplo1 };