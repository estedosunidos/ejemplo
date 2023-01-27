const express =require('express');
const { urlencoded } =express;
const cors = require("cors");
require('dotenv').config();

//Rutas de la api
const decevalRouter =require('./src/router/routerauth');


//setting
const port =process.env.port
const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use("/v1",decevalRouter);



 app.listen(port,()=>{
    console.log(`server on port ${port}`);
});