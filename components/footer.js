function Footer(props) {
    return (  
        <div id="footer">

        <div className="fcontent resizable yarr">

                <div id="contact-us" className="cardlayout" >
                        <ul className="list ">
                                <li>
                                <h1 id="logofont">Riya Qureshi</h1>
                                </li>
                                <li className="softbox">
                                    Mumbai, Maharashtra, India
                                </li>
                                <li className="softbox"> 
                                        <a>riyaq1511@gmail.com</a><br/>
                                </li>
                        </ul>
                        <ul  style={{display:"flex",justifyContent: "center",listStyleType:"none"}}>
                                <li><a href="https://www.instagram.com/rrriiiyyaa/">
                                        <svg className="svg"x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                                                <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"/>
                                                <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
                                                <circle cx="393.6" cy="118.4" r="17.056"/>
                                        </svg>
                                </a></li>

                                <li><a href="https://www.linkedin.com/in/riya-qureshi-092292186">
                                        <svg className="svg" viewBox="0 0 512 512" >
                                                <path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/>
                                        </svg>
                                </a></li>
                        </ul>
                </div>

                <div id="quicklinks" className="cardlayout">
                        <ul className="list">
                                <h2 className="logofont">Quick Links</h2><br/>
                                <li><a id="flink" href="">Home</a></li><br/>
                                <li><a id="flink" href="">Services</a></li><br/>
                                <li><a id="flink" href="">Scope</a></li><br/>
                        </ul>
                </div>

                <div id="support" className="cardlayout">
                        <ul className="list">
                                <h2 className="logofont">Support</h2><br/>
                                <li><a id="flink" href="">Chat-with-us</a></li><br/>
                                <li><a id="flink" href="">Terms</a></li><br/>
                                <li><a id="flink" href="">Site-map</a></li><br/>    
                                <li><a id="flink" href="">About-us</a></li><br/>                            
                        </ul>
                </div>

        </div>
        <div id="verticalline"></div>
        <div >
                <div className="copywright " style={{padding:"20px"}}>2020Riya Qureshi All rights reserved </div>
        </div>
</div>
    )
}
export default Footer;
