import {aPIRequest} from "../DTO/allDTO";
interface IUserService {
	getFilterData(body: aPIRequest): Promise<{allFilteredData : any[]}>;
	// chatHistory (body : Request) : Promise <{chatHistory : any{}}>;
}

export default IUserService;
