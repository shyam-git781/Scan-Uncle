// import React, {Dispatch, SetStateAction} from 'react';
import {UserProfile} from '../Models/Profile.ts';
import React, {Dispatch, SetStateAction} from "react";

export interface AppContextState {
    userProfile?:UserProfile,
    setUserProfile:Dispatch<SetStateAction<UserProfile>>,

}

export const AppContext = React.createContext<AppContextState>({
    userProfile:undefined,
    setUserProfile:() => {
    }
})