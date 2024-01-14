import * as React from "react";
import './YourTags.scss'
import { SliderComponent } from "./Common/SliderComponenet";
interface YourTagsProps {

}
export const YourTags: React.FC<YourTagsProps> = (props) => {

    return <div className='tag-container'>
        <div className='sub-cont'>
            <div className='header'>
                <img className='logo' src='/images/logo.png' height='40px' width='auto'/>
                {/*<div className='' style={{fontWeight:'bold',fontSize:'20px',alignSelf:'center',marginLeft:'auto',marginRight:'15px',color:'#7747FF'}}>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
            <div style={{display:'flex'
                ,justifyContent:'center'
                ,fontWeight:'bold'
                ,fontSize:'20px', marginTop:'15px',paddingBottom:'20px',borderBottom:'0.5px grey solid'}}>Manage your tags!
            </div>
            <div className='header-cell'>
                <div className='vehicle-number'>Mapped Vehicle</div>
                {/*<div className='active-label'>Active</div>*/}
                <div className='toggle'> Paused</div>
            </div>
            <div className='tag-cell'>
                <div className='vehicle-number'>1. UP83 BE 5466</div>
                {/*<div className='active-label'>Active</div>*/}
                <div className='toggle'><SliderComponent defaultChecked={true}
                                                         classNames='margin-top-6'
                                                         changeHandler={(e)=> {
                                                         }}
                                                         testId='get-quotes-slider'
                /></div>
            </div>
            <div className='tag-cell-sec'>
                <div className='vehicle-number'>2. UP83 BE 5466</div>
                {/*<div className='active-label'>Active</div>*/}
                <div className='toggle'><SliderComponent defaultChecked={true}
                                                         classNames='margin-top-6'
                                                         changeHandler={(e)=> {
                                                         }}
                                                         testId='get-quotes-slider'
                /></div>
            </div>
            <div className='tag-cell'>
                <div className='vehicle-number'>3. UP83 BE 5466</div>
                {/*<div className='active-label'>Active</div>*/}
                <div className='toggle'><SliderComponent defaultChecked={true}
                                                         classNames='margin-top-6'
                                                         changeHandler={(e)=> {
                                                         }}
                                                         testId='get-quotes-slider'
                /></div>
            </div>
            <div className='tag-cell-sec'>
                <div className='vehicle-number'>4. UP83 BE 5466</div>
                {/*<div className='active-label'>Active</div>*/}
                <div className='toggle'><SliderComponent defaultChecked={true}
                                                         classNames='margin-top-6'
                                                         changeHandler={(e)=> {
                                                         }}
                                                         testId='get-quotes-slider'
                /></div>
            </div>
        </div>
    </div>
}