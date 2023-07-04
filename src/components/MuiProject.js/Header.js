import { Box, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import { customStyles } from './HeaderStyles';
import Navbar from "./Navbar";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { CommonDecorator } from '../Common components/CommonDecorator';
import About from './About';
import PortFolio from './PortFolio';
import Contact from './Contact';
import Fotter from './Fotter';
import Drawer from './Drawer';
const Header = () => {
  const classes = customStyles();
  const [initialstate,setinitialstate] = useState(false);
  const handleDrawerToggle = () => {
      setinitialstate(!initialstate);
  }

  const navLinks = [
    { label: "About", id: 1 },
    { label: "Contacts", id: 2 },
    { label: "Portfolio", id: 3 },
  ]
  return (
    <>
      <Box className={classes.headerWrapper}>
        <Navbar navLinks={navLinks} handleDrawerToggle={handleDrawerToggle}/>
        {/* Drawer Component  */}
        <Drawer initialstate={initialstate} navLinks={navLinks} handleDrawerToggle={handleDrawerToggle}/>
        <Box className={classes.Headercontainer}>
          <Typography variant='h4' component="h4" className={classes.headerTitle}>I'm a UI/UX Designer|</Typography>
          <Typography variant='h4' component="h4" className={classes.headerDes}>I create website and application, <br /> based on your needs</Typography>
          {
            CommonDecorator({ label: "About us", NeedIcon: true, Icon: <ArrowDownwardIcon /> })
          }
        </Box>
      </Box>
      <About />
      <PortFolio />
      <Contact />
      <Fotter />
    </>
  )
}

export default Header
