// src/index.ts
import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./dataSources";
//import usuarioRoutes from "./routes/usuarioRoutes";

const app = express();
const port = 3000;

app.use(express.json());

// Inicialize a conexão com o banco de dados e inicie o servidor
AppDataSource.initialize()
  .then(() => {
    console.log("Conectado ao banco de dados!");

    // Registre as rotas
    //app.use("/usuarios", usuarioRoutes);

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Erro ao conectar ao banco de dados:", error));
