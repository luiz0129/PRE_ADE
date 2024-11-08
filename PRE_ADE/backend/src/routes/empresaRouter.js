import { Router } from "express";
import { getEmpresa } from "../controllers/empresaControllers.js"

const router = Router();

router.get("/", getEmpresa);

export default router;