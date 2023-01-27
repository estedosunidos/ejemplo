const { ejemplo } = require("../integration/soapclient");

async function ejemplo1(girador) {
  let body = {
    NumberToWords:{
        ubiNum:100
    }
    
  };
  let result = await ejemplo(body);
  return result;
}
module.exports = { ejemplo1 };