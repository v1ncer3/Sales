import { Request, Response } from "express";
import { CommandDTO } from "../../../application/dtos/CommandDTO";
import { ICommandUseCases } from "../../../application/abstractions/ICommandUseCases";

export class CommandController {
    constructor(private commandUseCases: ICommandUseCases) {}

    async create(req: Request, res: Response) {
        try {
            const comandaData: CommandDTO = req.body;
            const comanda = await this.commandUseCases.createCommand(comandaData);
            res.status(201).json(comanda);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar comanda", error });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const comandas = await this.commandUseCases.findAllCommands();
            res.json(comandas);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar comandas", error });
        }
    }
}
