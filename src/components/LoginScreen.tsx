import * as React from "react";
import './HomePage.scss'
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {buildUserProfile} from "../Models/Profile.ts";
import { useNavigate } from "react-router-dom";

interface LoginScreenProps {

}
export const LoginScreen: React.FC<LoginScreenProps> = (props) => {
    const [user,setUser] = useState(buildUserProfile())
    const [activateClick,setActivateClick] = useState(false)
    const history = useNavigate()

      const logInClicked = () => {
            history('/dashboard')
      }
      const singInClicked = () => {
        history('/createUser')
  }
    return <div className='d-flex container-home'>
        <div className='d-flex sign-up-container'>
            <div className='header' style={{marginTop:'100px'}}>
                <img className='logo' src='/images/logo.png' height= '60' width='auto'/>
                <div className='div' onClick={()=>singInClicked()}>
                    <div className='map-tag' style={{color:'#7747FF'}}> Sign In</div>
                </div>
            </div>
            <div className='form-container'>
                <TextField className='text-field'
                    // error={user.userVehicleNumber.length < 11}
                           helperText={(user.vehicleNumber.length < 10 && activateClick) ? '' : ''}
                           value={user.vehicleNumber}
                           required={true}
                           onChange={(e=> setUser(prevState => {
                               return {
                                   ...prevState,
                                   vehicleNumber: e.target.value.toUpperCase()
                               }
                           }))}
                           label="Contact Number" />
                <TextField className='text-field'
                           value={user.userName}
                           required={true}
                           onChange={(e=> setUser(prevState => {
                               return {
                                   ...prevState,
                                   userName: e.target.value
                               }
                           }))}
                           label="Password" />
                <Button sx={{
                    backgroundColor: '#7747FF', // Custom background color (e.g., 'red')
                    color: '#fff', // Custom text color
                    '&:hover': {
                        backgroundColor: '#7747FF', // Custom hover background color
                    },
                }}      className='text-field'
                        variant="contained"
                        color="secondary"
                    // disabled={(user.userVehicleNumber.length < 10 || user.userNumber.length<10 || user.password.length < 8)}
                        onClick={()=> logInClicked()}
                    >
                    Login
                </Button>
                <Button sx={{
                    backgroundColor: '#7747FF', // Custom background color (e.g., 'red')
                    color: '#fff', // Custom text color
                    '&:hover': {
                        backgroundColor: '#7747FF', // Custom hover background color
                    },
                }}      className='text-field'
                        variant="contained"
                        color="primary"
                    // disabled={(user.userVehicleNumber.length < 10 || user.userNumber.length<10 || user.password.length < 8)}
                    //     onClick={()=> activateClicked()}
                >
                    Forgot Password
                </Button>
            </div>
            <div style={{display:'flex', flexDirection:'column',marginTop:'auto', width:'100%'}}>
            <div style={{color:'gray', marginBottom:'8px',marginLeft:'4px'}}>If you want to login, Buy Scan Uncle Tag first.</div>
            <Button style={{marginTop:'auto'}} sx={{
                backgroundColor: '#7747FF', // Custom background color (e.g., 'red')
                color: '#fff', // Custom text color
                '&:hover': {
                    backgroundColor: '#7747FF', // Custom hover background color
                },
            }}      className='text-field'
                    variant="contained"
                    color="primary"
                // disabled={(user.userVehicleNumber.length < 10 || user.userNumber.length<10 || user.password.length < 8)}
                //     onClick={()=> activateClicked()}
            >
                Buy your tag
            </Button>
            </div>
        </div>
    </div>
}