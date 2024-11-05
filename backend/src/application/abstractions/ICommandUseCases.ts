import { Command } from "../../domain/entities/Command";
import { CommandDTO } from "../dtos/CommandDTO";

export interface ICommandUseCases{
    createCommand(data: CommandDTO): Promise<Command>;
    findAllCommands(): Promise<Command[]>;
}
