import { Command } from "../entities/Command";

export interface IComandaRepository {
    create(data: Partial<Command>): Promise<Command>;
    findAll(): Promise<Command[]>;
}
