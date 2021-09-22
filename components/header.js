import Image from 'next/image';
import React from 'react';
class Header extends React.Component {
        render(){

                if (typeof window !== "undefined") {
                        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
      
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        document.documentElement.setAttribute('data-theme', 'light');
              localStorage.setItem('theme', 'light');
        }    
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);
                      }
        
        function control(yolo)
        {if(yolo==1){
            document.getElementsByClassName("navbarlist")[0].style.backgroundColor="var(--primary-color)";
            document.getElementsByClassName("navbarlist")[0].style.opacity="1";
                document.getElementsByClassName("navbarlist")[0].style.height="300px"; 
                document.getElementsByClassName("navbarlist")[0].style.padding="50px"; 
            }
        else if(yolo==0){     
                document.getElementsByClassName("navbarlist")[0].style.height="0px";
                document.getElementsByClassName("navbarlist")[0].style.padding="0px";
            }
        }



    return (  
    <div 
    style={{width:"100%",zIndex:"2"}}
    >
    <div className="buttonsbar00" style={{justifyContent:"space-between",padding:10}}>
        <div className="logocont" style={{paddingLeft: "20px"}}>
                
                <h3 style={{color:"var(--font-color)"}}  >Riya Qureshi</h3>
        </div>
        <ul className="list" style={{display:"flex"}}>
                <li><a href="https://www.instagram.com/rrriiiyyaa/">
                        <svg className="svg" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                                <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"/>
                                <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
                                <circle cx="393.6" cy="118.4" r="17.056"/>
                        </svg>
                </a></li>
                <li><a href="https://www.linkedin.com/in/riya-qureshi-092292186/">
                        <svg className="svg"  viewBox="0 0 512 512" >
                                <path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/>
                        </svg>
                </a></li>

        </ul>
        <ul className="navbarlist">         
                    <button className="navbarbutton switchsvg exitbar" type="button" onClick={()=>control(0)}>X</button>
                    <li className="heading switchsvg" onClick="">Services</li>
                    <li className="heading switchsvg" onClick="">Scope</li>
                    <li className="heading switchsvg" onClick="">Terms</li>
                    <div className="theme-switch-wrapper">
                            <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div>
                        </label>
                        </div>
                    </ul>

    </div>
    <button className="navbarbutton switch" onClick={()=>control(1)} style={{position: "fixed",bottom: "2%",right: "2%",height:"50px",width:"50px",borderRadius:"50%",backgroundColor:"var(--bg-color)",border:"2px solid var(--secondary-color)",zIndex:"999"}}>
                <svg className="switchsvg" x="0px" y="0px" viewBox="0 0 394.971 394.971" style={{wclassNameth:"30px",height:"30px",enableBackground:"new 0 0 394.971 394.971"}} >
                <path d="M56.424,146.286c-28.277,0-51.2,22.923-51.2,51.2s22.923,51.2,51.2,51.2s51.2-22.923,51.2-51.2
                    S84.701,146.286,56.424,146.286z M56.424,227.788L56.424,227.788c-16.735,0-30.302-13.567-30.302-30.302
                    s13.567-30.302,30.302-30.302c16.735,0,30.302,13.567,30.302,30.302S73.16,227.788,56.424,227.788z"/>
                <path d="M379.298,187.037H143.151c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h236.147
                    c5.771,0,10.449-4.678,10.449-10.449S385.069,187.037,379.298,187.037z"/>
                <path d="M56.424,0c-28.277,0-51.2,22.923-51.2,51.2s22.923,51.2,51.2,51.2s51.2-22.923,51.2-51.2S84.701,0,56.424,0z
                    M56.424,81.502c-16.735,0-30.302-13.567-30.302-30.302s13.567-30.302,30.302-30.302S86.726,34.465,86.726,51.2
                    S73.16,81.502,56.424,81.502z"/>
                <path d="M143.151,61.649h236.147c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449H143.151
                    c-5.771,0-10.449,4.678-10.449,10.449S137.38,61.649,143.151,61.649z"/>
                <path d="M56.424,292.571c-28.277,0-51.2,22.923-51.2,51.2c0,28.277,22.923,51.2,51.2,51.2s51.2-22.923,51.2-51.2
                    C107.624,315.494,84.701,292.571,56.424,292.571z M86.726,343.771c0,16.735-13.567,30.302-30.302,30.302v0
                    c-16.735,0-30.302-13.567-30.302-30.302c0-16.735,13.567-30.302,30.302-30.302S86.726,327.036,86.726,343.771L86.726,343.771z"/>
                <path d="M379.298,333.322H143.151c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h236.147
                    c5.771,0,10.449-4.678,10.449-10.449S385.069,333.322,379.298,333.322z"/>
            </svg>

                                        </button>            
                    
        

                        </div>
                )
        }        
        }
export default Header;
