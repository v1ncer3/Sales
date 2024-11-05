import { AppDataSource } from "../database/dataSources";
import { Command } from "../../domain/entities/Command";
import { IComandaRepository } from "../../domain/IRepositories/IComandaRepository";

export class CommandRepository implements IComandaRepository {
    private comandaRepository = AppDataSource.getRepository(Command);

    async create(data: Partial<Command>): Promise<Command> {
        const comanda = this.comandaRepository.create(data);
        return await this.comandaRepository.save(comanda);
    }

    async findAll(): Promise<Command[]> {
        return await this.comandaRepository.find();
    }
}
