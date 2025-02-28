import { Request, Response } from "express";
import { injectable } from "inversify";
import UserService from "../Service/userService";
@injectable()
class UserController {
	private userService: UserService;

	constructor(userService: UserService) {
		this.userService = userService;
	}

	async getFilterData(req: Request, res: Response): Promise<void> {
		try {
			const response = await this.userService.getFilterData(req.body);

			if (response != null) {
				res.status(200).json(response);
			} else {
				console.error("Data not found");
				res.status(404).json("Error in Registering USer");
			}
		} catch (error: any) {
			console.error("Error in processing", error);
			res.status(500).json("Internal Server Error");
		}
	}

	
}

export default UserController;
