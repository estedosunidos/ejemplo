const { login1 } = require("../../config/enviroment");
const { ejemplo1 } = require("../service/ejemplo");
const axios = require("axios");
module.exports = {
  authentication1: async function (req, res) {
    var credenciales = req.body;
    console.log(credenciales);
    axios
      .post(
        `${login1}`,
        {
          correo: credenciales.correo,
          password: credenciales.password,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(async (respuesta) => {
        console.log("reponse",respuesta)
        if (respuesta.statusText !== "OK") {
          return res.status(500);
        } else {
          let resultado = await ejemplo1(true);
          if (resultado.statusText !== "OK") {
            return res
              .status(200)
              .send({ ubiNum: resultado.NumberToWordsResult });
          } else {
            return res.status(500).send({ mensaje: "hay un error" });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
