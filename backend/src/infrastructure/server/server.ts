import express from "express";
import CommandRouter  from '../server/routes/CommandRoutes';
import { connectDatabase } from "../database/dataSources";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT_ONE || process.env.PORT_TWO || 3100;

app.use(express.json());
app.use("/Sales", CommandRouter);

connectDatabase()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
})
.catch(err => console.log("Erro ao iniciar o banco de dados: ", err));
