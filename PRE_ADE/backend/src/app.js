import express, { request, response } from "express"
import cors from 'cors'

import conn from "./config/conn.js";
import Empresa from "./models/empresaModel.js";
import Usuario from "./models/usuarioModel.js";
import Publicacao from "./models/usuarioModel.js";
import Curtida from "./models/curtidaModel.js";

import EmpresaRouter from "./routes/empresaRouter.js"
import PublicacaoRouter from "./routes/publicacaoRouter.js"

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

conn
.sync()//{force:true}
.then()
.catch((error)=> console.log(error));

app.use("/api/empresa", EmpresaRouter)
app.use("/api/publicacoes", PublicacaoRouter)

app.use((request, response) => {
    response.status(404).json({msg: "Rota não encontrada"});
});

export default app;