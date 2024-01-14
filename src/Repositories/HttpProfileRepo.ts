import ProfileRepo from "./ProfileRepo.ts";
import {buildUserProfile, UserProfile} from "../Models/Profile.ts";
import axios from "axios";

export default class HttpProfileRepo implements ProfileRepo {
    private apiBaseUrl: string;

    constructor(apiBaseUrl: string) {
        this.apiBaseUrl = apiBaseUrl;
    }
    async fetchProfileFromCode(code: string): Promise<UserProfile> {
        return axios.get(`${this.apiBaseUrl}/getMappedUser?identifier=${code}`).then(response => response.data);
    }

    async activateUser(user:UserProfile){
        return axios.post(
            `${this.apiBaseUrl}/activateUser`,
            user,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => response.data)
    }

}