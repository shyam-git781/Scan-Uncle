import * as React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import './PublicProfile.scss'
import {Button, FormControlLabel} from "@mui/material";
import Radio from '@mui/material/Radio';
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../App/AppContext.ts";
import HttpProfileRepo from "../Repositories/HttpProfileRepo.ts";
import {environment} from "../environment.ts";

interface PublicProfileProps {

}
export const PublicProfile: React.FC<PublicProfileProps> = (props) => {
 const {userProfile,setUserProfile} = useContext(AppContext)
 const profileRepo = new HttpProfileRepo(environment.apiBaseUrl)
 const history = useNavigate()
 const query = new URLSearchParams(useLocation().search);

 const [noParking,setNoParking] = useState(false)
 const [lightOn,setLightOn] = useState(false)
 const [towed,setTowed] = useState(false)
 const [windowOpen,setWindowOpen] = useState(false)
 const [petInside,setPetInside] = useState(false)
 const [damaged,setDamaged] = useState(false)
 const [flatTire,setFlatTire] = useState(false)

 useEffect(() => {
  if(query.has('qrId') && userProfile === undefined){
   profileRepo.fetchProfileFromCode(query.get('qrId')).then(res => {
    if (res) {
     setUserProfile(res)
     history(`/publicLink?qrId=${query.get('qrId')}`)
    } else {
     history(`/createUser?qrId=${query.get('qrId')}`)
    }
   })
  }
 }, []);

 const radioToggled = (type:string) => {
   if(type==='noParking'){
    setNoParking(true)
    setLightOn(false)
    setTowed(false)
    setWindowOpen(false)
    setPetInside(false)
    setDamaged(false)
    setFlatTire(false)
   }else if(type==='lightOn'){
    setNoParking(false)
    setLightOn(true)
    setTowed(false)
    setWindowOpen(false)
    setPetInside(false)
    setDamaged(false)
    setFlatTire(false)
   }else if(type==='towed'){
    setNoParking(false)
    setLightOn(false)
    setTowed(true)
    setWindowOpen(false)
    setPetInside(false)
    setDamaged(false)
    setFlatTire(false)
   }else if(type==='windowOpen'){
    setNoParking(false)
    setLightOn(false)
    setTowed(false)
    setWindowOpen(true)
    setPetInside(false)
    setDamaged(false)
    setFlatTire(false)
   }else if(type==='petInside'){
    setNoParking(false)
    setLightOn(false)
    setTowed(false)
    setWindowOpen(false)
    setPetInside(true)
    setDamaged(false)
    setFlatTire(false)
   }else if(type==='damaged'){
    setNoParking(false)
    setLightOn(false)
    setTowed(false)
    setWindowOpen(false)
    setPetInside(false)
    setDamaged(true)
    setFlatTire(false)
   }else if(type==='flatTire'){
    setNoParking(false)
    setLightOn(false)
    setTowed(false)
    setWindowOpen(false)
    setPetInside(false)
    setDamaged(false)
    setFlatTire(true)
   }else{
    setNoParking(false)
    setLightOn(false)
    setTowed(false)
    setWindowOpen(false)
    setPetInside(false)
    setDamaged(false)
    setFlatTire(false)
   }

 }
 
 return <div className='container-public-profile'>
  <div className='header'>
   <img className='logo' src='/images/logo.png' height= '40px' width='auto'/>
   <div className='' style={{fontWeight:'bold',fontSize:'20px',alignSelf:'center',marginLeft:'auto',marginRight:'15px',color:'#7747FF'}}>{userProfile !== undefined && userProfile.vehicleNumber}</div>
  </div>
   <div className='background-color-purple' style={{color:'white', height:'35px',justifyContent:'center',display:'flex', margin:'15px', alignItems:'center', fontWeight:'bold'}}>Get in touch with the owner of the vehicle, please!!</div>
   <div style={{marginLeft:'15px',marginRight:'15px',color:'gray'}}>Please choose the reason for contacting the user.</div>
   <div className='all-items'>
    <div className='item-container'>
     <div className='item-view'>
      <img className='item-logo' src='/images/no-parking.png' height= '30px' width='30px'/>

      <FormControlLabel
          value="start"
          control={<Radio checked={noParking}/>}
          onChange={()=> radioToggled('noParking')}
          label="Your vehicle is in no parking zone."
          labelPlacement="start"
          style={{width:'100%',marginRight:'1px', justifyContent :'space-between'}}
      />
     </div>

    </div>
    <div className='item-container'>
     <div className='item-view'>
      <img className='item-logo' src='/images/car-light.png' height= '30px' width='30px'/>

      <FormControlLabel
          value="start"
          control={<Radio checked={lightOn}/>}
          onChange={()=> radioToggled('lightOn')}
          label="Your vehicle lights are on."
          labelPlacement="start"
          style={{width:'100%',marginRight:'1px', justifyContent :'space-between'}}
      />
     </div>

    </div>
    <div className='item-container'>
     <div className='item-view'>
      <img className='item-logo' src='/images/tow.png' height= '30px' width='30px'/>

      <FormControlLabel
          value="start"
          control={<Radio checked={towed}/>}
          onChange={()=>radioToggled('towed')}
          label="Your vehicle is towed."
          labelPlacement="start"
          style={{width:'100%',marginRight:'1px', justifyContent :'space-between'}}
      />
     </div>

    </div><div className='item-container'>
    <div className='item-view'>
     <img className='item-logo' src='/images/car-door.png' height= '30px' width='30px'/>

     <FormControlLabel
         value="start"
         control={<Radio checked={windowOpen}/>}
         onChange={()=>radioToggled('windowOpen')}
         label="Windows of your vehicle are open."
         labelPlacement="start"
         style={{width:'100%',marginRight:'1px', justifyContent :'space-between'}}
     />
    </div>

   </div><div className='item-container'>
    <div className='item-view'>
     <img className='item-logo' src='/images/pet-taxi.png' height= '30px' width='30px'/>

     <FormControlLabel
         value="start"
         control={<Radio checked={petInside}/>}
         onChange={()=>radioToggled('petInside')}
         label="Your pet is inside the car."
         labelPlacement="start"
         style={{width:'100%',marginRight:'1px', justifyContent :'space-between'}}
     />
    </div>

   </div><div className='item-container'>
    <div className='item-view'>
     <img className='item-logo' src='/images/vehicle.png' height= '30px' width='30px'/>

     <FormControlLabel
         value="start"
         control={<Radio checked={damaged}/>}
         onChange={()=>radioToggled('damaged')}
         label="Your vehicle has damaged by someone."
         labelPlacement="start"
         style={{width:'100%',marginRight:'1px', justifyContent :'space-between'}}
     />
    </div>

   </div>
    <div className='item-container'>
     <div className='item-view'>
      <img className='item-logo' src='/images/flat-tire.png' height= '30px' width='30px'/>

      <FormControlLabel
          value="start"
          control={<Radio checked={flatTire}/>}
          onChange={()=>radioToggled('flatTire')}
          label="Your vehicle has a flat tire."
          labelPlacement="start"
          style={{width:'100%',marginRight:'1px', justifyContent :'space-between'}}
      />
     </div>
    </div>
   </div>
   <div className="footer">
    <div style={{display:'flex',justifyContent:'space-between',marginTop:'1%',marginBottom:'5px'}}>
     <Button sx={{
      backgroundColor: 'green', // Custom background color (e.g., 'red')
      color: '#fff', // Custom text color
      '&:hover': {
       backgroundColor: 'green', // Custom hover background color
      },
     }}      style={{height:'45px',width:'48%',marginLeft:'1%'}}
             className='ba'
             variant="contained"
             color="secondary" onClick={()=> {document.location.href = "tel:9910993631"}}>
      Call
     </Button>
     <Button sx={{
      backgroundColor: 'green', // Custom background color (e.g., 'red')
      color: '#fff', // Custom text color
      '&:hover': {
       backgroundColor: 'green', // Custom hover background color
      },
     }} style={{height:'45px',width:'48%',marginRight:'1%'}} className='' variant="contained" color="secondary"
             onClick={()=> {document.location.href = "sms:9910993631?body=Hello%20there!"}}>
      Message
     </Button>
    </div>
    <div style={{marginTop:'auto',display:'flex',justifyContent:'space-between',marginBottom:'5px'}}>
     <Button sx={{
      backgroundColor: '#f44336', // Custom background color (e.g., 'red')
      color: '#fff', // Custom text color
      '&:hover': {
       backgroundColor: '#d32f2f', // Custom hover background color
      },
     }} style={{height:'45px',width:'48%',marginLeft:'1%'}} className='' variant="contained" color="secondary"
             onClick={()=> {document.location.href = "tel:9910993631"}}>
      Emergency
     </Button>
     <Button sx={{
      backgroundColor: '#7747FF', // Custom background color (e.g., 'red')
      color: '#fff', // Custom text color
      '&:hover': {
       backgroundColor: '#7747FF', // Custom hover background color
      },
     }} style={{height:'45px',width:'48%',marginRight:'1%'}} className='' variant="contained" color="secondary">
      Buy yours tag
     </Button>
    </div>
   </div>

 </div>
}