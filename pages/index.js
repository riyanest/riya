
import React, { useState } from "react"
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import cortobanner from "../public/banner01.png";
import avatars from "../public/banner.png";
import 'antd/dist/antd.css';
import {List,Carousel} from 'antd';  
import dynamic from 'next/dynamic';
import Header from "../components/header";
import Contactform from "../components/contactform";
const Footer = dynamic(() => import("../components/footer"), {  ssr: false});


const contentStyle = {
  height: '400px',
  color: 'var(--font-color)',
  backgroundColor:"#c62368"

};
function Home() {

  return (    
    <div style={{position: 'relative'}}>
      <Head>
        <title>RIYA QURESHI</title>
        <meta name="description" content="RIYA QURESHI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
<div style={{backgroundColor:" var(--bg-color)",overflow: 'hidden',width:"100%"}}>
  <div className="yarr">
  
    <img className="hovcard"
    src="./riyadp.jpeg" 
    style={{display: "block",
    borderRadius:"2%", 
      marginLeft: "10%",
      height:"540px",
      margin:"5%",
      marginRight: "0px",
      width: "320px",border:"3px solid var(--secondary-color)"}}></img>

        <u  
        style={{color:"var(--font-color)",position:"absolute",top:"0%",left:"10%",marginTop:"150px" }}>
          <h5 style={{color:"var(--font-color)"}}>Hi, I am</h5>
          <h2 style={{fontSize:"30px",color:"var(--font-color)"}} >RIYA<br/> QURESHI</h2>
          <h4 style={{textAlign:"center",color:"var(--font-color)"}}> <span className="bannertextwrapper">    </span></h4>
        </u>


        <ul className="hovcard"
        style={{listStyleType:"none",border:"2px solid var(--secondary-color)",padding:"10px",backgroundColor:" var(--primary-color)",margin:"5%",width:"320px",borderRadius:"2%",fontSize:"18px",height:"400px",fontWeight:"100",}}>
        <li><h3 style={{fontWeight:"bold",textDecoration:"underline"}}>Skills Summary</h3></li>
        <li>Marketing</li>
        <li>Social Media Management</li>
        <li>Organization</li>
        <li>Events</li>
        <li>Interpersonal Skills</li>
        <li>Brand Tie ups</li>
        <li>Management</li>
        <li>Skills Summary Photoshop</li>
        <li>CorelDraw</li>
        <li>Video Editing</li>
        <li>Coordination</li>
        </ul>        







  </div>

  <svg id="visual" viewBox="0 0 1990 340" width="1990" height="340"  version="1.1"><rect x="0" y="0" width="1990" height="340" fill="var(--bg-color)"></rect><path d="M0 110L33.2 102.8C66.3 95.7 132.7 81.3 199 76.3C265.3 71.3 331.7 75.7 398 86.2C464.3 96.7 530.7 113.3 597 121.3C663.3 129.3 729.7 128.7 796 128.7C862.3 128.7 928.7 129.3 995 119C1061.3 108.7 1127.7 87.3 1194 87.3C1260.3 87.3 1326.7 108.7 1393 109.5C1459.3 110.3 1525.7 90.7 1592 89.5C1658.3 88.3 1724.7 105.7 1791 118C1857.3 130.3 1923.7 137.7 1956.8 141.3L1990 145L1990 341L1956.8 341C1923.7 341 1857.3 341 1791 341C1724.7 341 1658.3 341 1592 341C1525.7 341 1459.3 341 1393 341C1326.7 341 1260.3 341 1194 341C1127.7 341 1061.3 341 995 341C928.7 341 862.3 341 796 341C729.7 341 663.3 341 597 341C530.7 341 464.3 341 398 341C331.7 341 265.3 341 199 341C132.7 341 66.3 341 33.2 341L0 341Z" fill="#eb8686"></path><path d="M0 120L33.2 122.7C66.3 125.3 132.7 130.7 199 144.7C265.3 158.7 331.7 181.3 398 184.5C464.3 187.7 530.7 171.3 597 167.5C663.3 163.7 729.7 172.3 796 178.2C862.3 184 928.7 187 995 180.2C1061.3 173.3 1127.7 156.7 1194 150.7C1260.3 144.7 1326.7 149.3 1393 150.3C1459.3 151.3 1525.7 148.7 1592 149.2C1658.3 149.7 1724.7 153.3 1791 149C1857.3 144.7 1923.7 132.3 1956.8 126.2L1990 120L1990 341L1956.8 341C1923.7 341 1857.3 341 1791 341C1724.7 341 1658.3 341 1592 341C1525.7 341 1459.3 341 1393 341C1326.7 341 1260.3 341 1194 341C1127.7 341 1061.3 341 995 341C928.7 341 862.3 341 796 341C729.7 341 663.3 341 597 341C530.7 341 464.3 341 398 341C331.7 341 265.3 341 199 341C132.7 341 66.3 341 33.2 341L0 341Z" fill="#e16978"></path><path d="M0 187L33.2 196.5C66.3 206 132.7 225 199 224C265.3 223 331.7 202 398 203.5C464.3 205 530.7 229 597 228.7C663.3 228.3 729.7 203.7 796 195.5C862.3 187.3 928.7 195.7 995 201.8C1061.3 208 1127.7 212 1194 215.8C1260.3 219.7 1326.7 223.3 1393 229.2C1459.3 235 1525.7 243 1592 237.7C1658.3 232.3 1724.7 213.7 1791 201.8C1857.3 190 1923.7 185 1956.8 182.5L1990 180L1990 341L1956.8 341C1923.7 341 1857.3 341 1791 341C1724.7 341 1658.3 341 1592 341C1525.7 341 1459.3 341 1393 341C1326.7 341 1260.3 341 1194 341C1127.7 341 1061.3 341 995 341C928.7 341 862.3 341 796 341C729.7 341 663.3 341 597 341C530.7 341 464.3 341 398 341C331.7 341 265.3 341 199 341C132.7 341 66.3 341 33.2 341L0 341Z" fill="#d54a6f"></path><path d="M0 275L33.2 273C66.3 271 132.7 267 199 265C265.3 263 331.7 263 398 269C464.3 275 530.7 287 597 289.7C663.3 292.3 729.7 285.7 796 276C862.3 266.3 928.7 253.7 995 257.2C1061.3 260.7 1127.7 280.3 1194 282C1260.3 283.7 1326.7 267.3 1393 263.2C1459.3 259 1525.7 267 1592 274.2C1658.3 281.3 1724.7 287.7 1791 291.2C1857.3 294.7 1923.7 295.3 1956.8 295.7L1990 296L1990 341L1956.8 341C1923.7 341 1857.3 341 1791 341C1724.7 341 1658.3 341 1592 341C1525.7 341 1459.3 341 1393 341C1326.7 341 1260.3 341 1194 341C1127.7 341 1061.3 341 995 341C928.7 341 862.3 341 796 341C729.7 341 663.3 341 597 341C530.7 341 464.3 341 398 341C331.7 341 265.3 341 199 341C132.7 341 66.3 341 33.2 341L0 341Z" fill="#c62368"></path></svg>
 
</div>
      <Carousel autoplay style={contentStyle}>
        <div>
          <span style={contentStyle}></span>
        </div>
        <div>
          <span style={contentStyle}></span>
        </div>
        <div>
          <span style={contentStyle}></span>
        </div>
        <div>
          <span style={contentStyle}></span>
        </div>
      </Carousel>

    <Contactform/>

    <div style={{width:"100%",overflow:"hidden",height:"340"}}>
      <svg id="visual" viewBox="0 0 1990 340" width="1990" height="340"  version="1.1"><rect x="0" y="0" width="1990" height="340" fill="var(--primary-color)"></rect><path d="M0 180L41.5 181.2C83 182.3 166 184.7 249 178.2C332 171.7 415 156.3 497.8 147.7C580.7 139 663.3 137 746.2 133.3C829 129.7 912 124.3 995 129.5C1078 134.7 1161 150.3 1244 149.3C1327 148.3 1410 130.7 1492.8 133C1575.7 135.3 1658.3 157.7 1741.2 161.8C1824 166 1907 152 1948.5 145L1990 138L1990 0L1948.5 0C1907 0 1824 0 1741.2 0C1658.3 0 1575.7 0 1492.8 0C1410 0 1327 0 1244 0C1161 0 1078 0 995 0C912 0 829 0 746.2 0C663.3 0 580.7 0 497.8 0C415 0 332 0 249 0C166 0 83 0 41.5 0L0 0Z" fill="#e1d8cb"></path><path d="M0 137L41.5 129.8C83 122.7 166 108.3 249 114.8C332 121.3 415 148.7 497.8 149.7C580.7 150.7 663.3 125.3 746.2 120C829 114.7 912 129.3 995 136.7C1078 144 1161 144 1244 149.3C1327 154.7 1410 165.3 1492.8 162.3C1575.7 159.3 1658.3 142.7 1741.2 129.7C1824 116.7 1907 107.3 1948.5 102.7L1990 98L1990 0L1948.5 0C1907 0 1824 0 1741.2 0C1658.3 0 1575.7 0 1492.8 0C1410 0 1327 0 1244 0C1161 0 1078 0 995 0C912 0 829 0 746.2 0C663.3 0 580.7 0 497.8 0C415 0 332 0 249 0C166 0 83 0 41.5 0L0 0Z" fill="#dbb498"></path><path d="M0 66L41.5 73C83 80 166 94 249 94C332 94 415 80 497.8 78.5C580.7 77 663.3 88 746.2 98.2C829 108.3 912 117.7 995 116.2C1078 114.7 1161 102.3 1244 101.3C1327 100.3 1410 110.7 1492.8 108.8C1575.7 107 1658.3 93 1741.2 92C1824 91 1907 103 1948.5 109L1990 115L1990 0L1948.5 0C1907 0 1824 0 1741.2 0C1658.3 0 1575.7 0 1492.8 0C1410 0 1327 0 1244 0C1161 0 1078 0 995 0C912 0 829 0 746.2 0C663.3 0 580.7 0 497.8 0C415 0 332 0 249 0C166 0 83 0 41.5 0L0 0Z" fill="#d98c75"></path><path d="M0 35L41.5 35C83 35 166 35 249 42.2C332 49.3 415 63.7 497.8 70C580.7 76.3 663.3 74.7 746.2 72.2C829 69.7 912 66.3 995 64.7C1078 63 1161 63 1244 69.7C1327 76.3 1410 89.7 1492.8 90.7C1575.7 91.7 1658.3 80.3 1741.2 72.3C1824 64.3 1907 59.7 1948.5 57.3L1990 55L1990 0L1948.5 0C1907 0 1824 0 1741.2 0C1658.3 0 1575.7 0 1492.8 0C1410 0 1327 0 1244 0C1161 0 1078 0 995 0C912 0 829 0 746.2 0C663.3 0 580.7 0 497.8 0C415 0 332 0 249 0C166 0 83 0 41.5 0L0 0Z" fill="#d45e65"></path><path d="M0 57L41.5 51.8C83 46.7 166 36.3 249 37C332 37.7 415 49.3 497.8 49.5C580.7 49.7 663.3 38.3 746.2 30.2C829 22 912 17 995 22.7C1078 28.3 1161 44.7 1244 53.7C1327 62.7 1410 64.3 1492.8 62.2C1575.7 60 1658.3 54 1741.2 45C1824 36 1907 24 1948.5 18L1990 12L1990 0L1948.5 0C1907 0 1824 0 1741.2 0C1658.3 0 1575.7 0 1492.8 0C1410 0 1327 0 1244 0C1161 0 1078 0 995 0C912 0 829 0 746.2 0C663.3 0 580.7 0 497.8 0C415 0 332 0 249 0C166 0 83 0 41.5 0L0 0Z" fill="#c62368"></path></svg>
    </div>
    <Footer/>
    </div>
  )
}
export default Home;
