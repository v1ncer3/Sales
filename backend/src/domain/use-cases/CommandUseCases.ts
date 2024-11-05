import { IComandaRepository } from "../IRepositories/IComandaRepository";
import { CommandDTO } from "../../application/dtos/CommandDTO";
import { Command } from "../entities/Command";
import { ICommandUseCases } from '../../application/abstractions/ICommandUseCases';

export class CommandUseCases implements ICommandUseCases{
    constructor(private comandaRepository: IComandaRepository) {}

    async createCommand(data: CommandDTO): Promise<Command> {
        return await this.comandaRepository.create(data);
    }

    async findAllCommands(): Promise<Command[]> {
        return await this.comandaRepository.findAll();
    }

    async findOne(id: number): Promise<Command | null> {
        return await this.comandaRepository.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.comandaRepository.delete(id);
    }
}