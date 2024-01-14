import * as React from "react";
interface PurchaseTagCompProps {
    
}
export const PurchaseTagComp: React.FC<PurchaseTagCompProps> = (props) => {
    return <div>
        <div className='header'>
            <img className='logo' src='/images/logo.png' height= '40px' width='auto'/>
            <div className='' style={{fontWeight:'bold',fontSize:'20px',alignSelf:'center',marginLeft:'auto',marginRight:'15px',color:'#7747FF'}}></div>
        </div>
    </div>
}