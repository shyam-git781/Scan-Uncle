import * as React from "react";
import {Button, TextField} from "@mui/material";
import './EditProfile.scss'
interface EditProfileProps {

}

export const EditProfile: React.FC<EditProfileProps> = (props) => {
return <div className='edit-container'>
    <div style={{backgroundColor:''}}>
        <div className='header'>
        <img className='logo' src='/images/logo.png' height= '40px' width='auto'/>
        {/*<div className='' style={{fontWeight:'bold',fontSize:'20px',alignSelf:'center',marginLeft:'auto',marginRight:'15px',color:'#7747FF'}}>*/}
        {/*</div>*/}
    {/*</div>*/}
    </div>
        <div className='input-container'>
        <TextField className='text-field'
            // error={user.userVehicleNumber.length < 11}
            //        helperText={(user.userVehicleNumber.length < 10 && activateClick) ? 'Required valid vehicle number.' : ''}
                   value={''}
                   required={true}
            // onChange={(e=> setUser(prevState => {
            //     return {
            //         ...prevState,
            //         userVehicleNumber: e.target.value.toUpperCase()
            //     }
            // }))}
                   label="Full Name" />
            <TextField className='text-field'
                // error={user.userVehicleNumber.length < 11}
                //        helperText={(user.userVehicleNumber.length < 10 && activateClick) ? 'Required valid vehicle number.' : ''}
                       value={''}
                       required={true}
                // onChange={(e=> setUser(prevState => {
                //     return {
                //         ...prevState,
                //         userVehicleNumber: e.target.value.toUpperCase()
                //     }
                // }))}
                       label="Email" />
            <TextField className='text-field'
                // error={user.userVehicleNumber.length < 11}
                //        helperText={(user.userVehicleNumber.length < 10 && activateClick) ? 'Required valid vehicle number.' : ''}
                       value={''}
                       required={true}
                // onChange={(e=> setUser(prevState => {
                //     return {
                //         ...prevState,
                //         userVehicleNumber: e.target.value.toUpperCase()
                //     }
                // }))}
                       label="Contact Number" />
            <TextField className='text-field'
                // error={user.userVehicleNumber.length < 11}
                //        helperText={(user.userVehicleNumber.length < 10 && activateClick) ? 'Required valid vehicle number.' : ''}
                       value={''}
                       required={true}
                // onChange={(e=> setUser(prevState => {
                //     return {
                //         ...prevState,
                //         userVehicleNumber: e.target.value.toUpperCase()
                //     }
                // }))}
                       label="Emergency Contact" />
            <TextField className='text-field'
                // error={user.userVehicleNumber.length < 11}
                //        helperText={(user.userVehicleNumber.length < 10 && activateClick) ? 'Required valid vehicle number.' : ''}
                       value={''}
                       required={true}
                // onChange={(e=> setUser(prevState => {
                //     return {
                //         ...prevState,
                //         userVehicleNumber: e.target.value.toUpperCase()
                //     }
                // }))}
                       label="State" />
            <TextField className='text-field'
                // error={user.userVehicleNumber.length < 11}
                //        helperText={(user.userVehicleNumber.length < 10 && activateClick) ? 'Required valid vehicle number.' : ''}
                       value={''}
                       required={true}
                // onChange={(e=> setUser(prevState => {
                //     return {
                //         ...prevState,
                //         userVehicleNumber: e.target.value.toUpperCase()
                //     }
                // }))}
                       label="City" />
            <TextField className='text-field'
                // error={user.userVehicleNumber.length < 11}
                //        helperText={(user.userVehicleNumber.length < 10 && activateClick) ? 'Required valid vehicle number.' : ''}
                       value={''}
                       required={true}
                // onChange={(e=> setUser(prevState => {
                //     return {
                //         ...prevState,
                //         userVehicleNumber: e.target.value.toUpperCase()
                //     }
                // }))}
                       label="Pincode" />
            <TextField className='text-field'
                // error={user.userVehicleNumber.length < 11}
                //        helperText={(user.userVehicleNumber.length < 10 && activateClick) ? 'Required valid vehicle number.' : ''}
                       value={''}
                       required={true}
                // onChange={(e=> setUser(prevState => {
                //     return {
                //         ...prevState,
                //         userVehicleNumber: e.target.value.toUpperCase()
                //     }
                // }))}
                       label="Address" />
            <Button style={{width:'88%',marginTop:'20px'}} sx={{
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
                Save profile
            </Button>
        </div>
</div>
</div>
}