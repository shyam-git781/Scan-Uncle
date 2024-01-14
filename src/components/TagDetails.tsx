import * as React from "react";
import PhonelinkSetupTwoToneIcon from "@mui/icons-material/PhonelinkSetupTwoTone";
import './TagDetails.scss'
import {Button} from "@mui/material";
interface TagDetailsProps {

}

export const TagDetails: React.FC<TagDetailsProps> = (props) => {
return<div className={'tag-detail-container'}>
    <div >
        <div style={{fontSize:35, alignSelf:'center'}}>Your tag You control !</div>
        <div style={{fontSize:15, alignSelf:'center'}}># UP83BE5466</div>
        <div style={{fontSize:15, alignSelf:'center'}}>Hey, your tag scanned 0 times</div>
    </div>
    <div className={'item-Box'}>

        <div style={{ display:'flex',alignItems:'center',}}>
            <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF',marginRight:20}}/>
            <div>View contact Page</div>
        </div>
        <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF'}}/>
    </div>

    <div className={'item-Box'}>

        <div style={{ display:'flex',alignItems:'center',}}>
            <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF',marginRight:20}}/>
            <div>Disable Calls</div>
        </div>
        <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF'}}/>
    </div>


    <div className={'item-Box'}>

        <div style={{ display:'flex',alignItems:'center',}}>
            <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF',marginRight:20}}/>
            <div>Add Secondary number</div>
        </div>
        <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF'}}/>
    </div>

    <div className={'item-Box'}>

        <div style={{ display:'flex',alignItems:'center',}}>
            <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF',marginRight:20}}/>
            <div>Vehicle Number</div>
        </div>
        <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF'}}/>
    </div>
    <div className={'item-Box'}>

        <div style={{ display:'flex',alignItems:'center',}}>
            <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF',marginRight:20}}/>
            <div>Owner Name</div>
        </div>
        <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF'}}/>
    </div>
    <div className={'item-Box'}>

        <div style={{ display:'flex',alignItems:'center',}}>
            <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF',marginRight:20}}/>
            <div>Emergency Number</div>
        </div>
        <PhonelinkSetupTwoToneIcon style={{width:'6%',height:'6%',color:'#7747FF'}}/>
    </div>
    <Button style={{width:'100%',marginTop:'20px'}} sx={{
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
        Update Details
    </Button>
</div>

}