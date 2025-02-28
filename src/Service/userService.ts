import { injectable } from "inversify";
import IUserService from "../Interface/IuserService";

import { User, UserData } from "../Entity/User";
import CareerModel from "../Entity/carriermodel";
import axios from "axios";


@injectable()
class UserService implements IUserService {
	async registerUser(body: ParameterDTO): Promise<any> {
		try {
			
		} catch (error) {
			
		}
	}

	async loginUser(body: loginDTO): Promise<any> {
		try {
			// Validate input
			
		} catch (error) {
			
		}
	}

	async modelResponse(modelRequest: ModelRequest): Promise<any> {
		try {
			
			} catch (parseError) {
			}
	
		} catch () {
			
		}
	}
	
	



export default UserService;
