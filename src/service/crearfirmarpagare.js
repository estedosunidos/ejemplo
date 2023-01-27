const { crearFirmarPagareCaracteres } = require("../integration/soapclient");

async function crearfirmarpagare(girador) {
  let body = {
    firmarPagareCaracteres: {
      header: {
        codigoDepositante: "",
        fecha: "",
        hora: "",
        usuario: "",
      },
      informacionFirmaPagareCaracteresDTO: {
        OTPPagare: "",
        OTPProcedimiento: "",
        archivosAdjuntos: {
          contenido: "",
          nombreArchivo: "",
        },
        clave: "",
        idDocumentoPagare: "",
        idRolFirmante: "",
        motivo: "",
        numeroDocumento: "",
        tipoDocumento: "",
      },
    },
  };
  let result = await crearFirmarPagareCaracteres(body);
  return result;
}
module.exports = { crearfirmarpagare };
