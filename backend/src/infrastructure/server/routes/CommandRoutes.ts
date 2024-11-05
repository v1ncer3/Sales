import { Router } from "express";
import { CommandController } from '../../http/controllers/CommandController';
import { CommandUseCases } from "../../../domain/use-cases/CommandUseCases";
import { CommandRepository } from "../../ImplRepositories/CommandRepository";

const CommandRouter = Router();
const commandRepository = new CommandRepository();
const commandUseCases = new CommandUseCases(commandRepository);
const commandController = new CommandController(commandUseCases);

CommandRouter.post("/Commands", (req, res) => commandController.create(req, res));
CommandRouter.get("/Commands", (req, res) => commandController.findAll(req, res));

export default CommandRouter;
