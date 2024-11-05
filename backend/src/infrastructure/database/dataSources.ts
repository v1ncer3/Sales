import "reflect-metadata";
import { DataSource } from "typeorm";
import { Command } from "../../domain/entities/Command";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5000,
    username: "postgres",
    password: "root",
    database: "SALES",
    entities: [Command],
    synchronize: true,
});

export const connectDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Banco de dados conectado com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados: ", error);
    }
};
