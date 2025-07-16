import { Router } from "express";
import * as companyController from "./company.controller.js";

const compantRouter = Router();

compantRouter.post("/company", companyController.addCompany);
compantRouter.get("/company", companyController.getAll);

export default compantRouter;
