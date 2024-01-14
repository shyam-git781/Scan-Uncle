import * as React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import HttpProfileRepo from "../Repositories/HttpProfileRepo.ts";
import {environment} from "../environment.ts";
import {useContext, useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import {buildUserProfile} from "../Models/Profile.ts";
import {AppContext} from "../App/AppContext.ts";
import './CreateUser.scss'
interface CreateUserProps {

}
export const CreateUser: React.FC<CreateUserProps> = (props) => {
    // const {qrId} = useParams();
    const profileRepo = new HttpProfileRepo(environment.apiBaseUrl)
    const [user,setUser] = useState(buildUserProfile())
    const query = new URLSearchParams(useLocation().search);
    const history = useNavigate()
    const {userProfile,setUserProfile} = useContext(AppContext)
    const [activateClick,setActivateClick] = useState(false)

    // useEffect(() => {
    //     profileRepo.fetchProfileFromCode(qrId).then(res=>{
    //         if(res){
    //             setUserProfile(res)
    //             history('/publicLink')
    //         }else {
    //             history(`/createUser?qrId=${qrId}`)
    //         }
    //     })
    // }, [qrId]);

    const activateClicked = () => {
        setActivateClick(true)
    if(query.has('qrId') && user.vehicleNumber.length > 9 || user.userNumber.length > 9 || user.password.length > 7){
       const tempObj = user
             tempObj.identifier = query.get('qrId')
        profileRepo.activateUser(tempObj).then(res=>{
            setUserProfile(user)
            history(`/publicLink?qrId=${query.get('qrId')}`)
            console.log(res)
        })
    }

}

    return(<div className='d-flex container-home'>
        <div className='d-flex sign-up-container'>
            <div className='header'>
                <img className='logo' src='/images/logo.png' height= '60' width='auto'/>
                <div className='div'>
                    <div className='map-tag' style={{color:'#7747FF'}}> Activate Your Tag</div>
                </div>
            </div>
            <div className='form-container'>
                <TextField className='text-field'
                           // error={user.userVehicleNumber.length < 11}
                           helperText={(user.vehicleNumber.length < 10 && activateClick) ? 'Required valid vehicle number.' : ''}
                           value={user.vehicleNumber}
                           required={true}
                           onChange={(e=> setUser(prevState => {
                               return {
                                   ...prevState,
                                   vehicleNumber: e.target.value.toUpperCase()
                               }
                           }))}
                           label="Vehical Number" />
                <TextField className='text-field'
                           value={user.userName}
                           required={false}
                           onChange={(e=> setUser(prevState => {
                               return {
                                   ...prevState,
                                   userName: e.target.value
                               }
                           }))}
                           label="Owner Name" />
                <TextField className='text-field'
                           // error={user.userNumber.length < 1}
                           helperText={(user.userNumber.length < 10 && activateClick) ? 'Required vaild contact number.' : ''}
                           value={user.userNumber}
                           required={true}
                           type={'number'}
                           onChange={(e=> setUser(prevState => {
                               return {
                                   ...prevState,
                                   userNumber: e.target.value
                               }
                           }))}
                           label="Contact Number" />
                <TextField className='text-field'
                           value={user.emergencyNumber}
                           required={false}
                           type={'number'}
                           onChange={(e=> setUser(prevState => {
                               return {
                                   ...prevState,
                                   emergencyNumber: e.target.value
                               }
                           }))}
                           label="Emergency Number" />
                <TextField className='text-field'
                           // error={user.password.length < 8}
                           helperText={(user.password.length < 8 && activateClick) ? 'Minimum 8 chars required.' : ''}
                           value={user.password}
                           required={true}
                           onChange={(e=> setUser(prevState => {
                               return {
                                   ...prevState,
                                   password: e.target.value
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
                        onClick={()=> activateClicked()}>
                    Activate
                </Button>
            </div>
        </div>
    </div>)

}