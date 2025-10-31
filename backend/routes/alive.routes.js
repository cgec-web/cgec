import { Router } from "express";
import { aliveController } from "../controllers/alive.controller.js";

const aliveRouter = Router();

aliveRouter.route("/").get(aliveController);

export { aliveRouter };
