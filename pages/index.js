import { Statistic, Row, Col } from 'antd';
import React, { useState } from "react"
import Head from 'next/head';
import Image from 'next/image';

import { Carousel } from 'antd';
import { Timeline } from 'antd';





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
  backgroundColor:"var(--primary-color)"
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
  const min768 = useMediaQuery('(min-width: 768px)')
  const tablet = useMediaQuery('(min-width: 600px)')
  const phone = useMediaQuery('(max-width: 600px)')
  const isTablet = useMediaQuery('(min-width: 992px)')
  const isPortrait = useMediaQuery('(orientation: portrait)')
  return (    
    <div style={{position: 'relative',backgroundColor:"var(--primary-color)"}}>
      <Head>
        <title>RIYA QURESHI</title>
        <meta name="description" content="RIYA QURESHI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
<div style={{backgroundColor:" var(--primary-color)",overflow: 'hidden',width:"100%"}}>
  <div style={{height:"540px",position: 'relative',overflow: 'hidden',width:"100%"}}>
  <svg id="visual" viewBox="0 0 1990 540" width="1990" height="540" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="304" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="1990" height="540" fill="#6600FF"></rect><g filter="url(#blur1)"><circle cx="906" cy="352" fill="#00CC99" r="675"></circle><circle cx="1747" cy="316" fill="#6600FF" r="675"></circle><circle cx="129" cy="48" fill="#00CC99" r="675"></circle><circle cx="1294" cy="204" fill="#00CC99" r="675"></circle><circle cx="780" cy="11" fill="#6600FF" r="675"></circle><circle cx="468" cy="413" fill="#00CC99" r="675"></circle></g></svg>
  <img style={{position: "absolute",right: "10%",top:"140px",width:"300px",zIndex:"200"}} src="riyadpmobg.png"/>
  <span  
        style={{color:"var(--primary-color)",
        padding:"10px",
        margin:"5%",
        height:"180px"
        ,display:"block",top:"5%",position:"absolute",left:"5%",zIndex:"22" }}>
          <h5 style={{color:"var(--primary-color)"}}>Hi, I am</h5>
          <h2 style={{fontSize:"60px",fontWeight:"100",color:"var(--primary-color)"}} >RIYA QURESHI</h2>
          <h4 style={{textAlign:"center",color:"var(--primary-color)"}}> <span className="bannertextwrapper">    </span></h4>
        </span>
    </div>
   
</div>

{isDesktopOrLaptop && isTablet||min768 ?
<div id="l1" style={{backgroundColor:"var(--primary-color)"}}>
  <h1 style={{color:"var(--font-color)",margin:"0px",padding:"20px",backgroundColor:"var(--primary-color)"}}>Gallery:</h1>
<Grid  style={{backgroundColor:"var(--primary-color)",padding:"20px"}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={4} sm={4} md={6} style={{paddingTop:"20px"}}>
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
    <Grid item xs={4} sm={4} md={6} style={{paddingTop:"20px"}}>
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
</div>
:null}
{phone||isBigScreen&&tablet ? 
        <Carousel id="l1" autoplay  style={contentStyle}>
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



  <Col id="l2" className="resizable" style={{backgroundColor:"var(--primary-color)"}}>
      <Statistic title="Experience" value={"3years"} />
      <Timeline>
        <Timeline.Item>Music Culture and Arts
Assistant Marketing Manager
Brand Tie ups for Events and E marketing</Timeline.Item>
<Timeline.Item>Engage Inc
Social Media Management for FMCG
Brands</Timeline.Item>
<Timeline.Item>Kakcho Fashion Pvt Ltd.
Marketing Executive
Handling 2 Vernacular Applications.
Fiva and Sawaal Jawab.</Timeline.Item>
        <Timeline.Item>Parity Cube Pvt.Ltd
Social Media Executive
Handling All Social Media accounts and
campaigns for 2 products, DesiDime and
Zingoy.
Facebook, Twitter, Instagram, and YouTube.</Timeline.Item>
        <Timeline.Item>Nimayate Corporate Solutions
Social Media Executive
Print and Digital Media Strategy,
and Client servicing.</Timeline.Item>
        <Timeline.Item>Cortokino- An International Shorfilm
Festival
Worked for 3 years in the festival
2019-2020-2021
Member- Subhead-Chairperson.</Timeline.Item>
      </Timeline>
      </Col>    

<Carousel autoplay className="resizable" style={{backgroundColor:"var(--primary-color)"}}>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RPtSuYtdAFg?start=389" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4_3yBGXGqfI?start=150" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dx6l8P05rB4?start=510" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wYLwQ7qwflk?start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</Carousel>

    <Contactform/>


    <Footer/>
    </div>
  )
}
export default Home;
