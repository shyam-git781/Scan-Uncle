import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as React from 'react';
import {QRCodeGenerator} from "../components/QRCodeGenerator.tsx";
import {Profile} from "../components/Profile.tsx";
import {HomePage} from "../components/HomePage.tsx";
import {PublicProfile} from "../components/PublicProfile.tsx";
import {CreateUser} from "../components/CreateUser.tsx";
import { AppContext } from './AppContext.ts';
import {useState} from "react";
import {UserProfile} from "../Models/Profile.ts";
import {LoginScreen} from "../components/LoginScreen.tsx";
import {Dashboard} from "../components/Dashboard.tsx";
import {PurchaseTagComp} from "../components/PurchaseTagComp.tsx";
import {EditProfile} from "../components/EditProfile.tsx";
import {YourTags} from "../components/YourTags.tsx";
import { TagDetails } from '../components/TagDetails.tsx';

interface AppProps {

}

export const App: React.FC<AppProps> = (props) => {

    const [userProfile,setUserProfile] = useState<UserProfile>();



    return (<AppContext.Provider
      value={{
          userProfile:userProfile,
          setUserProfile:(val)=> setUserProfile(val)
      }}>
          <Router>
              <Routes>
                  {/*<Route path="/:qrId" Component={QRCodeGenerator} />*/}
                  <Route path="/" Component={HomePage} />
                  <Route path="/:qrId" Component={HomePage} />
                  <Route path="/createUser" Component={CreateUser} />
                  <Route path="/publicLink" Component={PublicProfile} />
                  <Route path="/login" Component={LoginScreen} />
                  <Route path="/dashboard" Component={Dashboard} />
                  <Route path="/purchase" Component={PurchaseTagComp} />
                  <Route path="/editProfile" Component={EditProfile} />
                  <Route path="/yourTags" Component={YourTags} />
                  <Route path="/tagDetail" Component={TagDetails} />
              </Routes>
          </Router>
      </AppContext.Provider>
      // <div className="App">
      //   <QRCodeGenerator />
      // </div>
      // <Router>
      //     <div className='full-height full-width ' data-testid='existing-user-flow'>
      //         <Routes>
      //             <Route path="/">
      //                 <QRCodeGenerator />
                  // </Route>
      //         </Routes>
      //     </div>
      // </Router>
  );
};

