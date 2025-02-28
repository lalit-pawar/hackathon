import { injectable } from "inversify";
import IUserService from "../Interface/IuserService";
import  {aPIRequest}  from "../DTO/allDTO";
import axios from "axios";


@injectable()
class UserService implements IUserService {
    async getFilterData(body: aPIRequest): Promise<{ allFilteredData: any[] }> {
        try {
            const apiUrl = "https://carrier-model-api.onrender.com/chat";
            const response: any = await axios.post(apiUrl, body);

            if (response?.data?.data) {
                return { allFilteredData: response.data.data };
            } else {
                return { allFilteredData: [] };
            }
        } catch (error) {
            console.error("Error in getEmployee:", error);
            return { allFilteredData: [] };
        }
    }

}

export default UserService;
