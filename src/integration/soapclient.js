const soap = require("soap");
const urlgiradorcodificador = process.env.wsdlgiradorcodificado;
const urlpagare = process.env.wsdlpagarecodificado;
const urlfirmapagare = process.env.wsdlfirmarpagare;
const urlejemplo = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL";
const wsdlOptions = {
  wsdl_headers: {
    connection: "keep-alive",
  },
};


async function creacionGiradoresCodificados(args) {
  return new Promise((resolve, reject) => {
    soap.createClient(urlgiradorcodificador, wsdlOptions, (err, client) => {
      if (err) {
        reject(err);
      } else {
        client.creacionGiradoresCodificados(args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}
async function crearPagareCodificadoDane(args) {
  return new Promise((resolve, reject) => {
    soap.createClient(urlpagare, wsdlOptions, (err, cliente) => {
      if (err) {
        reject(err);
      } else {
        cliente.crearPagareCodificadoDane(args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}
async function crearFirmarPagareCaracteres(args) {
  return new Promise((resolve, reject) => {
    soap.createClient(urlfirmapagare, wsdlOptions, (err, cliente) => {
      if (err) {
        reject(err);
      } else {
        cliente.crearFirmarPagareCaracteres(args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}
async function ejemplo(args) {
  return new Promise((resolve, reject) => {
    soap.createClient(urlejemplo, wsdlOptions, (err, cliente) => {
        if (err) {
          reject(err);
        } else {
          cliente.NumberToWords(args.NumberToWords, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
  });
}

module.exports = {
  creacionGiradoresCodificados,
  crearPagareCodificadoDane,
  crearFirmarPagareCaracteres,
  ejemplo,
};
