import { Box, Container, Grid,Hidden } from '@material-ui/core'
import React from 'react'
import { CardMedia, RenderSectionHeading } from '../Common components/CommonDecorator';
import { Aboutstyles } from './AboutStyles';
import AcUnit from '@material-ui/icons/AcUnit';
import PermDeviceInformation from '@material-ui/icons/PermDeviceInformation';
import Toys from '@material-ui/icons/Toys';
import Dashboard from '@material-ui/icons/Dashboard';
import aboutImage from "../assests/About.jpg";

const About = () => {
    const aclasses = Aboutstyles();
    const cardMediaText = [
      {title:"Web Development",description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veniam recusandae dolorem. Lorem ipsum dolor sit amet.",icon:<Dashboard/>,id:1},
      {title:"Graphic Designer",description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veniam recusandae dolorem. Lorem ipsum dolor sit amet.",icon:<Toys/>,id:2},
      {title:"Mobile Apps",description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veniam recusandae dolorem. Lorem ipsum dolor sit amet.",icon:<PermDeviceInformation/>,id:3},
      {title:"Marketing",description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veniam recusandae dolorem. Lorem ipsum dolor sit amet.",icon:<AcUnit/>,id:4},
    ]
  return (
    <Box className={aclasses.section}>
      <Container>
        <Grid container spacing={2}>
       
          <Grid item sm={5}>
          <Box component={Hidden} xsDown>
              <img src={aboutImage} alt="Loading..." className={aclasses.responsiveImage}/>
          </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
          { RenderSectionHeading({smallTxt :"ABOUT ME",heading:"Hello I'm Talha shiekh",description:"A self Taught developer who loves to code something that will interact majority of people in a good way"}) }
          <br />
          <Grid container style={{marginTop:"5rem"}}>
            {cardMediaText.map((element) => {
              return <Grid item key={element.id} xs={12} sm={6}>{CardMedia({
                label:element.title,Desc:element.description,Icon:element.icon
               })}</Grid>       
            })};
          </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
