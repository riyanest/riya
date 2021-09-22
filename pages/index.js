
import React, { useState } from "react"
import Head from 'next/head';
import Image from 'next/image';

import { Carousel } from 'antd';



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



import 'antd/dist/antd.css';
import dynamic from 'next/dynamic';
import Header from "../components/header";
import Contactform from "../components/contactform";
const Footer = dynamic(() => import("../components/footer"), {  ssr: false});
import useMediaQuery from '@material-ui/core/useMediaQuery';

const contentStyle = {
  padding: "30px",
  height: '550px',
  color: 'var(--font-color)',
  backgroundColor:"#01579b"

};
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});
function Home() {
  const classes = useStyles();
  const isDesktopOrLaptop = useMediaQuery('(min-width: 1200px)')
  const isBigScreen = useMediaQuery('(max-width: 768px)')
  const tablet = useMediaQuery('(min-width: 600px)')
  const phone = useMediaQuery('(max-width: 600px)')
  const isTablet = useMediaQuery('(min-width: 992px)')
  const isPortrait = useMediaQuery('(orientation: portrait)')
  return (    
    <div style={{position: 'relative'}}>
      <Head>
        <title>RIYA QURESHI</title>
        <meta name="description" content="RIYA QURESHI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
<div style={{backgroundColor:" var(--bg-color)",overflow: 'hidden',width:"100%"}}>
  <div className="yarr" style={{justifyContent: 'space-evenly'}}>

  <u  
        style={{color:"var(--font-color)",
        width:"220px",
        border:"2px solid var(--secondary-color)",
        padding:"10px",
        backgroundColor:" var(--primary-color)",
        margin:"5%",
        height:"180px"
        ,display:"block" }}>
          <h5 style={{color:"var(--font-color)"}}>Hi, I am</h5>
          <h2 style={{fontSize:"30px",color:"var(--font-color)"}} >RIYA<br/> QURESHI</h2>
          <h4 style={{textAlign:"center",color:"var(--font-color)"}}> <span className="bannertextwrapper">    </span></h4>
        </u>
  
    <img className="hovcard"
    src="./riyadp.jpeg" 
    style={{display: "block",
    borderRadius:"2%", 
      marginLeft: "10%",
      height:"540px",
      margin:"5%",
      marginRight: "0px",
      width: "320px",border:"3px solid var(--secondary-color)"}}></img>

        <ul className="hovcard"
        style={{color:"var(--font-color)",listStyleType:"none",border:"2px solid var(--secondary-color)",padding:"10px",backgroundColor:" var(--primary-color)",margin:"5%",width:"320px",borderRadius:"2%",fontSize:"18px",height:"400px",fontWeight:"100",}}>
        <li><h3 style={{fontWeight:"bold",color:"var(--font-color)",textDecoration:"underline"}}>Skills Summary</h3></li>
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


<svg id="visual" viewBox="0 0 1900 340" width="1900" height="340"version="1.1"><g stroke-width="1" strokeLinejoin="bevel"><path d="M905.9 131.3L1006.1 214.7L1014.1 89.3Z" fill="#13518e" stroke="#13518e"></path><path d="M905.9 131.3L885.9 253.7L1006.1 214.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1140.2 86.3L1045.1 0L1014.1 89.3Z" fill="#252b37" stroke="#252b37"></path><path d="M1014.1 89.3L849.9 0L905.9 131.3Z" fill="#244067" stroke="#244067"></path><path d="M1006.1 214.7L1140.2 86.3L1014.1 89.3Z" fill="#252b37" stroke="#252b37"></path><path d="M1045.1 0L849.9 0L1014.1 89.3Z" fill="#263043" stroke="#263043"></path><path d="M905.9 131.3L747.8 142.3L885.9 253.7Z" fill="#252b37" stroke="#252b37"></path><path d="M885.9 253.7L1024.1 340L1006.1 214.7Z" fill="#13518e" stroke="#13518e"></path><path d="M1006.1 214.7L1169.2 207.7L1140.2 86.3Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M1024.1 340L1169.2 207.7L1006.1 214.7Z" fill="#01579b" stroke="#01579b"></path><path d="M734.8 340L878.9 340L885.9 253.7Z" fill="#263043" stroke="#263043"></path><path d="M885.9 253.7L878.9 340L1024.1 340Z" fill="#01579b" stroke="#01579b"></path><path d="M849.9 0L747.8 142.3L905.9 131.3Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1322.4 87.3L1172.2 0L1140.2 86.3Z" fill="#244067" stroke="#244067"></path><path d="M1140.2 86.3L1172.2 0L1045.1 0Z" fill="#27364f" stroke="#27364f"></path><path d="M1024.1 340L1170.2 340L1169.2 207.7Z" fill="#212121" stroke="#212121"></path><path d="M1169.2 207.7L1322.4 87.3L1140.2 86.3Z" fill="#23262c" stroke="#23262c"></path><path d="M747.8 142.3L712.8 228.7L885.9 253.7Z" fill="#252b37" stroke="#252b37"></path><path d="M849.9 0L731.8 0L747.8 142.3Z" fill="#252b37" stroke="#252b37"></path><path d="M747.8 142.3L606.6 141.3L712.8 228.7Z" fill="#214674" stroke="#214674"></path><path d="M712.8 228.7L734.8 340L885.9 253.7Z" fill="#01579b" stroke="#01579b"></path><path d="M1170.2 340L1306.4 243.7L1169.2 207.7Z" fill="#214674" stroke="#214674"></path><path d="M1306.4 243.7L1322.4 87.3L1169.2 207.7Z" fill="#244067" stroke="#244067"></path><path d="M731.8 0L606.6 141.3L747.8 142.3Z" fill="#23262c" stroke="#23262c"></path><path d="M712.8 228.7L610.6 253.7L734.8 340Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1322.4 87.3L1323.4 0L1172.2 0Z" fill="#23262c" stroke="#23262c"></path><path d="M606.6 141.3L610.6 253.7L712.8 228.7Z" fill="#13518e" stroke="#13518e"></path><path d="M1170.2 340L1312.4 340L1306.4 243.7Z" fill="#252b37" stroke="#252b37"></path><path d="M1306.4 243.7L1448.5 129.3L1322.4 87.3Z" fill="#23262c" stroke="#23262c"></path><path d="M458.5 340L601.6 340L610.6 253.7Z" fill="#263043" stroke="#263043"></path><path d="M610.6 253.7L601.6 340L734.8 340Z" fill="#252b37" stroke="#252b37"></path><path d="M731.8 0L570.6 0L606.6 141.3Z" fill="#27364f" stroke="#27364f"></path><path d="M606.6 141.3L451.5 199.7L610.6 253.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1455.5 223.7L1448.5 129.3L1306.4 243.7Z" fill="#01579b" stroke="#01579b"></path><path d="M1322.4 87.3L1455.5 0L1323.4 0Z" fill="#263043" stroke="#263043"></path><path d="M1443.5 340L1455.5 223.7L1306.4 243.7Z" fill="#263043" stroke="#263043"></path><path d="M1579.7 0L1455.5 0L1448.5 129.3Z" fill="#244067" stroke="#244067"></path><path d="M1448.5 129.3L1455.5 0L1322.4 87.3Z" fill="#23262c" stroke="#23262c"></path><path d="M1312.4 340L1443.5 340L1306.4 243.7Z" fill="#01579b" stroke="#01579b"></path><path d="M419.5 137.3L451.5 199.7L606.6 141.3Z" fill="#263b5b" stroke="#263b5b"></path><path d="M451.5 199.7L458.5 340L610.6 253.7Z" fill="#212121" stroke="#212121"></path><path d="M570.6 0L419.5 137.3L606.6 141.3Z" fill="#01579b" stroke="#01579b"></path><path d="M451.5 199.7L320.3 340L458.5 340Z" fill="#244067" stroke="#244067"></path><path d="M570.6 0L433.5 0L419.5 137.3Z" fill="#01579b" stroke="#01579b"></path><path d="M1629.7 106.3L1579.7 0L1448.5 129.3Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M1598.7 231.7L1448.5 129.3L1455.5 223.7Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M1597.7 340L1598.7 231.7L1455.5 223.7Z" fill="#212121" stroke="#212121"></path><path d="M1443.5 340L1597.7 340L1455.5 223.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1598.7 231.7L1629.7 106.3L1448.5 129.3Z" fill="#01579b" stroke="#01579b"></path><path d="M1754.8 134.3L1629.7 106.3L1598.7 231.7Z" fill="#263043" stroke="#263043"></path><path d="M433.5 0L316.3 88.3L419.5 137.3Z" fill="#01579b" stroke="#01579b"></path><path d="M270.3 249.7L320.3 340L451.5 199.7Z" fill="#01579b" stroke="#01579b"></path><path d="M270.3 249.7L451.5 199.7L419.5 137.3Z" fill="#252b37" stroke="#252b37"></path><path d="M433.5 0L296.3 0L316.3 88.3Z" fill="#244067" stroke="#244067"></path><path d="M316.3 88.3L270.3 249.7L419.5 137.3Z" fill="#244067" stroke="#244067"></path><path d="M169.2 254.7L270.3 249.7L147.2 94.3Z" fill="#212121" stroke="#212121"></path><path d="M1755.8 240.7L1754.8 134.3L1598.7 231.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1629.7 106.3L1778.8 0L1579.7 0Z" fill="#13518e" stroke="#13518e"></path><path d="M1597.7 340L1755.8 240.7L1598.7 231.7Z" fill="#252b37" stroke="#252b37"></path><path d="M1597.7 340L1752.8 340L1755.8 240.7Z" fill="#244067" stroke="#244067"></path><path d="M147.2 94.3L270.3 249.7L316.3 88.3Z" fill="#252b37" stroke="#252b37"></path><path d="M270.3 249.7L145.2 340L320.3 340Z" fill="#13518e" stroke="#13518e"></path><path d="M1900 83.3L1778.8 0L1754.8 134.3Z" fill="#13518e" stroke="#13518e"></path><path d="M1754.8 134.3L1778.8 0L1629.7 106.3Z" fill="#263043" stroke="#263043"></path><path d="M1900 206.7L1754.8 134.3L1755.8 240.7Z" fill="#13518e" stroke="#13518e"></path><path d="M296.3 0L166.2 0L316.3 88.3Z" fill="#263b5b" stroke="#263b5b"></path><path d="M166.2 0L147.2 94.3L316.3 88.3Z" fill="#263b5b" stroke="#263b5b"></path><path d="M0 340L145.2 340L169.2 254.7Z" fill="#23262c" stroke="#23262c"></path><path d="M169.2 254.7L145.2 340L270.3 249.7Z" fill="#23262c" stroke="#23262c"></path><path d="M1900 340L1900 206.7L1755.8 240.7Z" fill="#23262c" stroke="#23262c"></path><path d="M1900 206.7L1900 83.3L1754.8 134.3Z" fill="#01579b" stroke="#01579b"></path><path d="M1900 83.3L1900 0L1778.8 0Z" fill="#244067" stroke="#244067"></path><path d="M1752.8 340L1900 340L1755.8 240.7Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M0 0L0 140.3L147.2 94.3Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M147.2 94.3L0 203.7L169.2 254.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M0 140.3L0 203.7L147.2 94.3Z" fill="#212121" stroke="#212121"></path><path d="M166.2 0L0 0L147.2 94.3Z" fill="#01579b" stroke="#01579b"></path><path d="M0 203.7L0 340L169.2 254.7Z" fill="#27364f" stroke="#27364f"></path></g></svg>
 
</div>

{isDesktopOrLaptop && isTablet ?
<Grid style={{backgroundColor:"var(--secondary-color)",padding:"20px"}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={2} sm={4} md={4}>
      <Card className="resizable" style={{width:"300px",height:"460px"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="November 2019 to March 2021💫"
                width="300"
                image="banner01.png"
                title="November 2019 to March 2021💫"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                November 2019 to March 2021💫
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" href="https://www.instagram.com/p/COvJq4_nm9u/">
                Learn More
              </Button>
            </CardActions>
          </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4} >
    <Card className="resizable" style={{width:"300px",height:"460px"}}>
            <CardActionArea>
              <CardMedia
                alt="Highlights of my day. :)"
               // width="300"
               component="video"
                src="highlights.webm"
                autoPlay
                loop
                controls
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Highlights of my day. :)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" href="https://www.instagram.com/p/COvJq4_nm9u/">
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Grid>
</Grid>
:null}
{phone||isBigScreen&&tablet ? 
        <Carousel  autoplay effect="fade" style={contentStyle}>
        <div>
        <Card className="resizable" style={{width:"300px",height:"460px"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="November 2019 to March 2021💫"
                width="300"
                image="banner01.png"
                title="November 2019 to March 2021💫"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                November 2019 to March 2021💫
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" href="https://www.instagram.com/p/COvJq4_nm9u/">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="resizable">
        <Card className="resizable" style={{width:"300px",height:"460px"}}>
            <CardActionArea>
              <CardMedia
                alt="Highlights of my day. :)"
               // width="300"
               component="video"
                src="highlights.webm"
                autoPlay
                controls
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Highlights of my day. :)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" href="https://www.instagram.com/p/COvJq4_nm9u/">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      
      
      </Carousel>
:null    }


    <Contactform/>

    <div style={{width:"100%",overflow:"hidden",height:"340"}}>
<svg id="visual" viewBox="0 0 1900 340" width="1900" height="340"version="1.1"><g stroke-width="1" strokeLinejoin="bevel"><path d="M905.9 131.3L1006.1 214.7L1014.1 89.3Z" fill="#13518e" stroke="#13518e"></path><path d="M905.9 131.3L885.9 253.7L1006.1 214.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1140.2 86.3L1045.1 0L1014.1 89.3Z" fill="#252b37" stroke="#252b37"></path><path d="M1014.1 89.3L849.9 0L905.9 131.3Z" fill="#244067" stroke="#244067"></path><path d="M1006.1 214.7L1140.2 86.3L1014.1 89.3Z" fill="#252b37" stroke="#252b37"></path><path d="M1045.1 0L849.9 0L1014.1 89.3Z" fill="#263043" stroke="#263043"></path><path d="M905.9 131.3L747.8 142.3L885.9 253.7Z" fill="#252b37" stroke="#252b37"></path><path d="M885.9 253.7L1024.1 340L1006.1 214.7Z" fill="#13518e" stroke="#13518e"></path><path d="M1006.1 214.7L1169.2 207.7L1140.2 86.3Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M1024.1 340L1169.2 207.7L1006.1 214.7Z" fill="#01579b" stroke="#01579b"></path><path d="M734.8 340L878.9 340L885.9 253.7Z" fill="#263043" stroke="#263043"></path><path d="M885.9 253.7L878.9 340L1024.1 340Z" fill="#01579b" stroke="#01579b"></path><path d="M849.9 0L747.8 142.3L905.9 131.3Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1322.4 87.3L1172.2 0L1140.2 86.3Z" fill="#244067" stroke="#244067"></path><path d="M1140.2 86.3L1172.2 0L1045.1 0Z" fill="#27364f" stroke="#27364f"></path><path d="M1024.1 340L1170.2 340L1169.2 207.7Z" fill="#212121" stroke="#212121"></path><path d="M1169.2 207.7L1322.4 87.3L1140.2 86.3Z" fill="#23262c" stroke="#23262c"></path><path d="M747.8 142.3L712.8 228.7L885.9 253.7Z" fill="#252b37" stroke="#252b37"></path><path d="M849.9 0L731.8 0L747.8 142.3Z" fill="#252b37" stroke="#252b37"></path><path d="M747.8 142.3L606.6 141.3L712.8 228.7Z" fill="#214674" stroke="#214674"></path><path d="M712.8 228.7L734.8 340L885.9 253.7Z" fill="#01579b" stroke="#01579b"></path><path d="M1170.2 340L1306.4 243.7L1169.2 207.7Z" fill="#214674" stroke="#214674"></path><path d="M1306.4 243.7L1322.4 87.3L1169.2 207.7Z" fill="#244067" stroke="#244067"></path><path d="M731.8 0L606.6 141.3L747.8 142.3Z" fill="#23262c" stroke="#23262c"></path><path d="M712.8 228.7L610.6 253.7L734.8 340Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1322.4 87.3L1323.4 0L1172.2 0Z" fill="#23262c" stroke="#23262c"></path><path d="M606.6 141.3L610.6 253.7L712.8 228.7Z" fill="#13518e" stroke="#13518e"></path><path d="M1170.2 340L1312.4 340L1306.4 243.7Z" fill="#252b37" stroke="#252b37"></path><path d="M1306.4 243.7L1448.5 129.3L1322.4 87.3Z" fill="#23262c" stroke="#23262c"></path><path d="M458.5 340L601.6 340L610.6 253.7Z" fill="#263043" stroke="#263043"></path><path d="M610.6 253.7L601.6 340L734.8 340Z" fill="#252b37" stroke="#252b37"></path><path d="M731.8 0L570.6 0L606.6 141.3Z" fill="#27364f" stroke="#27364f"></path><path d="M606.6 141.3L451.5 199.7L610.6 253.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1455.5 223.7L1448.5 129.3L1306.4 243.7Z" fill="#01579b" stroke="#01579b"></path><path d="M1322.4 87.3L1455.5 0L1323.4 0Z" fill="#263043" stroke="#263043"></path><path d="M1443.5 340L1455.5 223.7L1306.4 243.7Z" fill="#263043" stroke="#263043"></path><path d="M1579.7 0L1455.5 0L1448.5 129.3Z" fill="#244067" stroke="#244067"></path><path d="M1448.5 129.3L1455.5 0L1322.4 87.3Z" fill="#23262c" stroke="#23262c"></path><path d="M1312.4 340L1443.5 340L1306.4 243.7Z" fill="#01579b" stroke="#01579b"></path><path d="M419.5 137.3L451.5 199.7L606.6 141.3Z" fill="#263b5b" stroke="#263b5b"></path><path d="M451.5 199.7L458.5 340L610.6 253.7Z" fill="#212121" stroke="#212121"></path><path d="M570.6 0L419.5 137.3L606.6 141.3Z" fill="#01579b" stroke="#01579b"></path><path d="M451.5 199.7L320.3 340L458.5 340Z" fill="#244067" stroke="#244067"></path><path d="M570.6 0L433.5 0L419.5 137.3Z" fill="#01579b" stroke="#01579b"></path><path d="M1629.7 106.3L1579.7 0L1448.5 129.3Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M1598.7 231.7L1448.5 129.3L1455.5 223.7Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M1597.7 340L1598.7 231.7L1455.5 223.7Z" fill="#212121" stroke="#212121"></path><path d="M1443.5 340L1597.7 340L1455.5 223.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1598.7 231.7L1629.7 106.3L1448.5 129.3Z" fill="#01579b" stroke="#01579b"></path><path d="M1754.8 134.3L1629.7 106.3L1598.7 231.7Z" fill="#263043" stroke="#263043"></path><path d="M433.5 0L316.3 88.3L419.5 137.3Z" fill="#01579b" stroke="#01579b"></path><path d="M270.3 249.7L320.3 340L451.5 199.7Z" fill="#01579b" stroke="#01579b"></path><path d="M270.3 249.7L451.5 199.7L419.5 137.3Z" fill="#252b37" stroke="#252b37"></path><path d="M433.5 0L296.3 0L316.3 88.3Z" fill="#244067" stroke="#244067"></path><path d="M316.3 88.3L270.3 249.7L419.5 137.3Z" fill="#244067" stroke="#244067"></path><path d="M169.2 254.7L270.3 249.7L147.2 94.3Z" fill="#212121" stroke="#212121"></path><path d="M1755.8 240.7L1754.8 134.3L1598.7 231.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M1629.7 106.3L1778.8 0L1579.7 0Z" fill="#13518e" stroke="#13518e"></path><path d="M1597.7 340L1755.8 240.7L1598.7 231.7Z" fill="#252b37" stroke="#252b37"></path><path d="M1597.7 340L1752.8 340L1755.8 240.7Z" fill="#244067" stroke="#244067"></path><path d="M147.2 94.3L270.3 249.7L316.3 88.3Z" fill="#252b37" stroke="#252b37"></path><path d="M270.3 249.7L145.2 340L320.3 340Z" fill="#13518e" stroke="#13518e"></path><path d="M1900 83.3L1778.8 0L1754.8 134.3Z" fill="#13518e" stroke="#13518e"></path><path d="M1754.8 134.3L1778.8 0L1629.7 106.3Z" fill="#263043" stroke="#263043"></path><path d="M1900 206.7L1754.8 134.3L1755.8 240.7Z" fill="#13518e" stroke="#13518e"></path><path d="M296.3 0L166.2 0L316.3 88.3Z" fill="#263b5b" stroke="#263b5b"></path><path d="M166.2 0L147.2 94.3L316.3 88.3Z" fill="#263b5b" stroke="#263b5b"></path><path d="M0 340L145.2 340L169.2 254.7Z" fill="#23262c" stroke="#23262c"></path><path d="M169.2 254.7L145.2 340L270.3 249.7Z" fill="#23262c" stroke="#23262c"></path><path d="M1900 340L1900 206.7L1755.8 240.7Z" fill="#23262c" stroke="#23262c"></path><path d="M1900 206.7L1900 83.3L1754.8 134.3Z" fill="#01579b" stroke="#01579b"></path><path d="M1900 83.3L1900 0L1778.8 0Z" fill="#244067" stroke="#244067"></path><path d="M1752.8 340L1900 340L1755.8 240.7Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M0 0L0 140.3L147.2 94.3Z" fill="#1c4c81" stroke="#1c4c81"></path><path d="M147.2 94.3L0 203.7L169.2 254.7Z" fill="#263b5b" stroke="#263b5b"></path><path d="M0 140.3L0 203.7L147.2 94.3Z" fill="#212121" stroke="#212121"></path><path d="M166.2 0L0 0L147.2 94.3Z" fill="#01579b" stroke="#01579b"></path><path d="M0 203.7L0 340L169.2 254.7Z" fill="#27364f" stroke="#27364f"></path></g></svg>
    </div>
    <Footer/>
    </div>
  )
}
export default Home;
