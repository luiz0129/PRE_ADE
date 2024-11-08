
import { Router } from "express";
import { getAll } from "../controllers/publicacaoControllers.js"

const router = Router();

router.get("/", getAll);

export default router;