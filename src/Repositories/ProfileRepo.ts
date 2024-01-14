import {UserProfile} from "../Models/Profile.ts";

export default interface ProfileRepo {
    fetchProfileFromCode(code:string): Promise<UserProfile>
}