import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { RenderSectionHeading } from '../Common components/CommonDecorator';
import { Aboutstyles } from './AboutStyles';
import image from "../assests/5-2.jpg";
import image1 from "../assests/5-3.jpg";
import image2 from "../assests/5-4.jpg";
import image3 from "../assests/5-6.jpg";
import image4 from "../assests/5-8.jpg";
import image5 from "../assests/5-9.jpg";


const PortFolio = () => {
    const aclasses = Aboutstyles();
    const portFolioData = [
        {url:image,title:"# PortFolio",link:"",id:new Date().getTime().toString()},
        {url:image1,title:"# PortFolio",link:"",id:new Date().getTime().toString()},
        {url:image2,title:"# PortFolio",link:"",id:new Date().getTime().toString()},
        {url:image3,title:"# PortFolio",link:"",id:new Date().getTime().toString()},
        {url:image4,title:"# PortFolio",link:"",id:new Date().getTime().toString()},
        {url:image5,title:"# PortFolio",link:"",id:new Date().getTime().toString()},
    ]
  return (
    <Box className={aclasses.sectionDark} id="portfolio" >
      <Grid container style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
        <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
                smallTxt:"Portfolio",
                heading:"Let's See My Work",
                alignCenter:true
            })}
        </Grid>
      </Grid>
      <Container maxWidth="xl">
          <Grid container spacing={2}>
          {
            portFolioData.map((element) => {
               return <Grid item xs={6} sm={6} lg={4} key={element.id}>
                    <Box className={aclasses.imageContainer}>
                        <img src={element.url} alt={element.title} className={aclasses.responsiveImage}/>
                    <Box className={aclasses.overlay}>
                        <Typography className={aclasses.overlayTitle}>{element.title}</Typography>
                        <Button variant='contained'>Visit</Button>
                    </Box>
                    </Box>
                </Grid>
            })
          }
          </Grid>
      </Container>
    </Box>
  )
}

export default PortFolio
