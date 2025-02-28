import { Request, Response } from "express";
import { injectable } from "inversify";
import UserService from "../Service/userService";
@injectable()
class UserController {
	private userService: UserService;

	constructor(userService: UserService) {
		this.userService = userService;
	}

	async register(req: Request, res: Response): Promise<void> {
		try {
			
		} catch (error: any) {
			
		}
	}

	async login(req: Request, res: Response): Promise<void> {
		try {
			
		} catch (error: any) {
			
		}
	}


	async modelResponse(req: Request, res: Response): Promise<void> {
		try {
			
		} catch (error: any) {
			
		}
	}
}

export default UserController;
