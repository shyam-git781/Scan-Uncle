import * as React from 'react';
import {useParams} from 'react-router-dom';
import './HomePage.scss'
import HttpProfileRepo from "../Repositories/HttpProfileRepo.ts";
import {environment} from "../environment.ts";
import {useContext, useEffect} from "react";
import {AppContext} from "../App/AppContext.ts";
import { useNavigate } from 'react-router-dom';

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = (props) => {
       const profileRepo = new HttpProfileRepo(environment.apiBaseUrl)
       const {setUserProfile} = useContext(AppContext)
       const {qrId} = useParams();
       const history = useNavigate()

           useEffect(() => {
               if(qrId) {
                   profileRepo.fetchProfileFromCode(qrId).then(res => {
                       if (res) {
                           setUserProfile(res)
                           history(`/publicLink?qrId=${qrId}`)
                       } else {
                           history(`/createUser?qrId=${qrId}`)
                       }
                   }).catch((err) => {
                       console.log(err)
                   })
               }
    }, [qrId]);

      //  return <div style={{backgroundColor:'#CBB9FF',height:'100vh'}}>
      return <div className='main-view'>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <img className='logo' src='/images/logo.png' height= '40px' width='auto'/>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Uncle's Tag</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Unlock Premium</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active"  href="#" onClick={()=>history(`/login`)}>LogIn</a>
        </li>
        
      </ul>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className='header-logo'>
<img className='logo' src='/images/logo.png' height= '150px' width='auto'/>

</div>
<div style={{background:'#7747FF', height:'2px', width:'100%'}}></div>
<div className='welcome-class'>
<div>
<div className='welcome-font' >Welcome To Scan Uncle</div>
<div >Being responsible for the parking spaces in the community.</div>
<div > Helps to ensure vehicle safety for those who don't own the parking spaces.</div>
</div>
<img className='logo' src='/images/selfish-parking.jpeg' height= '400px' width='45%'/>

</div>
<div style={{background:'#7747FF', height:'2px', width:'100%'}}></div>

<div style={{
  justifyContent:'center',
  alignItems:'center',
  display:'flex',
  flexDirection:'row',backgroundColor:'#CBB9FF'

  }}>
    <div style={{
  fontSize:35, color:'black',
  fontWeight:'bold',marginBottom:50, marginTop:10,
  backgroundColor:'#CBB9FF'
    

  }}>
    Choose your Tag!
    </div>
  </div>
  <div style={{
  display:'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'space-evenly',backgroundColor:'#CBB9FF'

}}>
  <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width: '18rem',height:300, padding:20}}>
  <img src='/images/logo.png' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Vehicle Tag</h5>
    <p className="card-text"> Get Quick QR Code for your Vehicle to esure the safety of your vehicle.</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:'#7747FF', width:'100%'}}>Buy Now</a>
  </div>
</div>
<div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width: '18rem', height:300, padding:20}}>
  <img src='/images/logo.png' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Pet Tag</h5>
    <p className="card-text"> Get Quick QR Code for your Pets. So you to don't want to loose them.</p>
    <a href="#" className="btn btn-primary"style={{backgroundColor:'#7747FF', width:'100%'}}>Buy Now</a>
  </div>
</div>
<div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width: '18rem', height:300, padding:20}}>
  <img src='/images/logo.png' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Door Tag</h5>
    <p className="card-text">Get Quick QR Code for your doors. Manage your door bell when you are not at home.</p>
    <a href="#" className="btn btn-primary"style={{backgroundColor:'#7747FF', width:'100%'}}>Buy Now</a>
  </div>
</div>
  </div>
  <div style={{padding:70,backgroundColor:'#CBB9FF'}}>
  <div style={{flexDirection:'row', display:'flex',alignItems:'center'}}>
  <img src='/images/youtube.png' style={{width:'auto', height:80,backgroundColor:'#CBB9FF'}}/>
    <div style={{textDecoration:'underline', fontSize:30,fontWeight:'bold', marginLeft:30}}>HOW IT WORKS?</div>
  </div>
  <div style={{fontSize:20,fontWeight:'bold'}}>Certainly, Here are some features you might want to consider. </div>
  <div style={{marginTop:50,flexDirection:'row', alignItems:'center', justifyContent:'space-between', display:'flex'}}>
  <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width: '18rem', height:300, padding:20}}>
  <img src='/images/logo.png' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">One Time Purchased </h5>
    <p className="card-text">Our QR codes provide lifelong functionality. Buy the tag once, access free services indefinitely.</p>
  </div>
</div>

<div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width: '18rem', height:300, padding:20}}>
  <img src='/images/logo.png' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Emergency call </h5>
    <p className="card-text">Our QR codes provide In case of emergency, input your contact details on the tag to ensure safety assistance.</p>
  </div>
</div>

<div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width: '18rem', height:300, padding:20}}>
  <img src='/images/logo.png' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Privacy</h5>
    <p className="card-text">Prioritizing your privacy! You have the control to pause or resume your QR sticker at your discretion.</p>
  </div>
</div>
<div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width: '18rem', height:300, padding:20}}>
  <img src='/images/logo.png' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Easily Accessible</h5>
    <p className="card-text">Your sticker can be scanned with your phone camera so you don’t need to download more apps in your mobile although it works on paytm and google lens as well.</p>
  </div>
</div>
  </div>
  </div>
  <div style={{padding:50,backgroundColor:'ButtonShadow'}}>
  <div style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', display:'flex',
  }}>
  
  <div style={{height:130}}>
    <div style={{fontSize:20,fontWeight:'bolder', marginBottom:10}}>Contact</div>
    <div style={{flexDirection:'row', alignItems:'center', display:'flex',marginBottom:5}}>
    <img className='logo' src='/images/contact.png' height= '20px' width='20px' style={{marginRight:5}}/>
      <div>9910993631</div>
    </div>
    <div style={{flexDirection:'row', alignItems:'center', display:'flex'}}>
    <img className='logo' src='/images/email.png' height= '20px' width='20px' style={{marginRight:5}}/>
    <div>scanUncle@gmail.com</div>
    </div>
    
  </div>
  
  <div style={{height:130}}>
    <div style={{fontSize:20,fontWeight:'bolder', marginBottom:10}}>Term And Conditions</div>
    <div style={{flexDirection:'row', alignItems:'center', display:'flex',marginBottom:5}}>
    <img className='logo' src='/images/tnc.png' height= '20px' width='20px' style={{marginRight:5}}/>
      <div>Term And Condition</div>
    </div>
    <div style={{flexDirection:'row', alignItems:'center', display:'flex'}}>
    <img className='logo' src='/images/refund.png' height= '20px' width='20px' style={{marginRight:5}}/>
    <div>Refund</div>
    </div>
    
  </div>
  <div style={{height:130}}>
    <div style={{fontSize:20,fontWeight:'bolder', marginBottom:10}}>Privacy Policy</div>
    <div style={{flexDirection:'row', alignItems:'center', display:'flex',marginBottom:5}}>
    <img className='logo' src='/images/privacy.png' height= '20px' width='20px' style={{marginRight:5}}/>
      <div>Privacy</div>
    </div>
  
    
  </div>
  <div style={{height:130}}>
    <div style={{fontSize:20,fontWeight:'bolder', marginBottom:10}}>Review Us!</div>
    <div style={{flexDirection:'row', alignItems:'center', display:'flex',marginBottom:5}}>
    <img className='logo' src='/images/rate.png' height= '20px' width='20px' style={{marginRight:5}}/>
      <div>Rate Your Experience</div>
    </div>
  
    
  </div>
  <div style={{height:130}}>
    <div style={{fontSize:20,fontWeight:'bolder', marginBottom:10}}>Business</div>
    <div style={{flexDirection:'row', alignItems:'center', display:'flex',marginBottom:5}}>
    <img className='logo' src='/images/distributor.png' height= '20px' width='20px' style={{marginRight:5}}/>
      <div>Become Our Distributor</div>
    </div>
    <div style={{flexDirection:'row', alignItems:'center', display:'flex'}}>
    <img className='logo' src='/images/career.png' height= '20px' width='20px' style={{marginRight:5}}/>
    <div>Careers</div>
    </div>
    
  </div>

  </div>
  <div style={{height:100,paddingTop:5}}>
  <img src='/images/instagram.png' style={{width:'auto',marginRight:15, height:'50px'}} alt="..."/>
  <img src='/images/facebook.png' style={{width:'auto',marginRight:15,  height:'50px'}} alt="..."/>
  <img src='/images/youtube.png' style={{width:'55px',marginRight:15,  height:'75px'}} alt="..."/>
  <img src='/images/twitter.png' style={{width:'auto',marginRight:15,  height:'50px'}} alt="..."/>
  <img src='/images/whatsapp.png' style={{width:'auto',marginRight:15,  height:'50px'}} alt="..."/>
  <img src='/images/logo.png' style={{width:'auto',marginLeft:'59%',  height:'50px'}} alt="..."/>
  </div>
<div style={{backgroundColor:'#CBB9FF', height:1}}>
</div>
<div style={{marginTop:15,justifyContent:'flex-end',
 alignSelf:'flex-end',display:'flex', flexDirection:'row', fontSize:14,fontWeight:'bolder'}}>
  <div>Copyright © 2024 ScanUncle. All rights reserved.</div>
</div>

  </div>


</div>
}