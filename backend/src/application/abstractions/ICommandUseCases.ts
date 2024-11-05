import { Command } from "../../domain/entities/Command";
import { CommandDTO } from "../dtos/CommandDTO";

export interface ICommandUseCases{
    createCommand(data: CommandDTO): Promise<Command>;
    findAllCommands(): Promise<Command[]>;
    findOne(id: number): Promise<Command | null>;
    delete(id: number): Promise<void>;
}
