import * as React from "react";
import './Dashboard.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBoxTwoTone';
import PauseCircleTwoToneIcon from '@mui/icons-material/PauseCircleTwoTone';
import PhonelinkSetupTwoToneIcon from '@mui/icons-material/PhonelinkSetupTwoTone';
import SellTwoToneIcon from '@mui/icons-material/TurnedInTwoTone';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import PetsTwoToneIcon from '@mui/icons-material/Pets';
import {Button} from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import {useNavigate} from "react-router-dom";
interface DashboardProps {

}
export const Dashboard: React.FC<DashboardProps> = (props) => {
      const history = useNavigate()

      const profileClicked = () => {
            history('/editProfile')
      }

      return <div className='container-dashboard'>
            <div className='header' style={{fontSize:'22px',fontWeight:'bold',color:'white',paddingTop:'20px'}}>
                  {/*<div className='logo'>Dashboard</div>*/}
                  <img className='logo' src='/images/logo.png' height= '70px' width='auto'/>
                  {/*<div className='' style={{fontWeight:'bold',fontSize:'20px',alignSelf:'center',marginLeft:'auto',marginRight:'15px',color:'#7747FF'}}></div>*/}
                  {/*<AccountCircleIcon style={{width:'80px',height:'80px', alignSelf:'center',borderRadius:'40px',marginTop:'10px'}}/>*/}
                  <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginTop:'20px',color:'#7747FF'}}><VerifiedIcon style={{marginRight:'10px'}}/>
                  <div style={{alignSelf:'center',alignItems:'center'}}>
                        9910993631 </div>
                  </div>
            </div>
            <div className='profile-sub'>
                  <div className='category' onClick={()=> profileClicked()}> <AccountBoxIcon style={{width:'100%',height:'80%',color:'#7707FF !important'}}/> Profile</div>
                  <div className='category' onClick={()=> history('/yourTags')}><PauseCircleTwoToneIcon style={{width:'100%',height:'80%',color:'#7747FF'}}/>Pause Tag</div>
                  <div className='category' ><PhonelinkSetupTwoToneIcon style={{width:'70%',height:'80%',color:'#7747FF'}}/><br/>How to setup</div>
                  <div className='category' onClick={()=> history('/yourTags')}><SellTwoToneIcon style={{width:'70%',height:'80%',color:'#7747FF'}}/><br/>Your Tags</div>
                  <div className='category'><AddBusinessTwoToneIcon style={{width:'70%',height:'80%',color:'#7747FF'}}/><br/>Business Card</div>
                  <div className='category'><PetsTwoToneIcon style={{width:'70%',height:'80%',color:'#7747FF'}}/><br/>Pet Tag</div>
            </div>
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
                  Logout
            </Button>

      </div>
}