import { Router } from "express";
import UserController from "../Controller/UserController";
import { injectable } from "inversify";
@injectable()
class UserRoutes {
	private readonly router: Router;
	private readonly userController: UserController;

	constructor(userController: UserController) {
		this.router = Router();
		this.userController = userController;

		this.configureRoutes();
	}

	private configureRoutes() {
		this.router.post("/getmodelResponse", (req, res) => this.userController.getFilterData(req, res));
	}

	getRouter(): Router {
		return this.router;
	}
}

export default UserRoutes;
