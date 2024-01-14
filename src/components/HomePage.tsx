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

       return <div style={{backgroundColor:'#CBB9FF',height:'100vh'}}>
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
          <a className="nav-link active"  href="#">LogIn</a>
        </li>
        
      </ul>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div style={{fontSize:50,  backgroundColor:'white',padding:'2%', justifyContent:'space-between', alignItems:'center',display:'flex'}}>
<div>
<h1 >Welcome To Scan Uncle</h1>
<h5 >Being responsible for the parking spaces in the community.</h5>
<h5 > who don't owns the parking spaces, helps to ensure the vehical safety</h5>
</div>
<img className='logo' src='/images/Parkedcar.png' height= '400px' width='auto'/>

</div>


</div>
}