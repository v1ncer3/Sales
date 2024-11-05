"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dataSources_1 = require("./dataSources");
//import usuarioRoutes from "./routes/usuarioRoutes";
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Inicialize a conexão com o banco de dados e inicie o servidor
dataSources_1.AppDataSource.initialize()
    .then(() => {
    console.log("Conectado ao banco de dados!");
    // Registre as rotas
    //app.use("/usuarios", usuarioRoutes);
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
})
    .catch((error) => console.error("Erro ao conectar ao banco de dados:", error));
