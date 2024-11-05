import { Request, Response } from "express";
import { CommandDTO } from "../../../application/dtos/CommandDTO";
import { ICommandUseCases } from "../../../application/abstractions/ICommandUseCases";

export class CommandController {
    constructor(private commandUseCases: ICommandUseCases) {}

    async create(req: Request, res: Response) {
        try {
            const commandData: CommandDTO = req.body;
            const command = await this.commandUseCases.createCommand(commandData);
            res.status(201).json(command);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar command", error });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const commands = await this.commandUseCases.findAllCommands();
            res.json(commands);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar commands", error });
        }
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const command = await this.commandUseCases.findOne(Number(id));
            if (command) {
                res.json(command);
            } else {
                res.status(404).json({ message: "command não encontrada" });
            }
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar commands", error });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        console.log(id);
        try {
            const commands = await this.commandUseCases.delete(Number(id));
            res.json(commands);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar commands", error });
        }
    }
}
