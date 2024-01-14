import {buildFactory} from 'ts-factory';

export interface UserProfile {
    identifier:string,
    userNumber:string,
    userName:string,
    vehicleNumber:string,
    emergencyNumber:string,
    password:string,
    // createdTime:string,
    // lastUpdatedTime:string
}

export interface ActivatedUser {
    identifier:string,
    userName:string,
    vehicleNumber: string,
    userNumber:string,
    emergencyNumber:string,
    password:string,
    }

export const buildUserProfile = buildFactory<UserProfile>({
    // id:0,
    identifier:'',
    userNumber:'',
    userName:'',
    vehicleNumber:'',
    emergencyNumber:'',
    password:'',
    // createdTime:'',
    // lastUpdatedTime:''
})