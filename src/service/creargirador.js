const { creacionGiradoresCodificados } = require("../integration/soapclient");

async function crearGirador(girador) {
  let body = {
    crearGiradorDTO: {
      correoElectronico: "",
      cuentaGirador: "",
      fkIdClasePersona: "",
      fkIdTipoDocumento: "",
      fkIdCiudadDomicilio: "",
      fkIdDepartamentoDomicilio_Nat: "",
      fkIdPaisDomicilio_Nat: "",
      identificacionEmisor: "",
      nombresNat_Nat: "",
      numeroDocumento: "",
      primerApellido_Nat: "",
      segundoApellido_Nat: "",
    },
    header: {
      codigoDepositante: "",
      fecha: "",
      hora: "",
      usuario: "",
    },
  };
  let result = await creacionGiradoresCodificados(body);
  return result;
}
module.exports = { crearGirador };
