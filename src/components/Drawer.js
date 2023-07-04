import React, { useState } from 'react';

// =========================== For swipable drawer just change drawer into swipeAbleDrawer ==============

// =========================== For cliped drawer just change the variant of drawer permanent and add z-index greater than the drawer into appbar and add tollbar into the list items==============

import { AppBar, Button,IconButton,Toolbar,Typography,CssBaseline,List,ListItem,ListItemText, Divider,Hidden} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import SwipeableDrawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Menubar from "@material-ui/icons/Menu";

const drawerWidth = 250;

const styleClasses = makeStyles((theme)=>({
    menuButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    title:{
        marginRight:'auto'
    },
    content:{
        padding:theme.spacing(5)
    },
    drawerClass:{
        width:drawerWidth
    },
    appbar:{
        // zIndex:theme.zIndex.drawer + 1
        [theme.breakpoints.up("sm")]:{
            width:`calc(100% - ${drawerWidth}px)`
        }
    },
    root:{
        [theme.breakpoints.up("sm")]:{
            paddingLeft:drawerWidth,
        }
    }
}));
const Drawer = () => {
    const customClasses = styleClasses();
    const [open,setopen] = useState(false);

    // for responsive drawer
    const drawerItems = (<List disablePadding className={customClasses.drawerClass}>
    <Divider/>
    <ListItem button>
        <ListItemText primary="Home"></ListItemText>
    </ListItem>
    <ListItem button>
        <ListItemText primary="About"></ListItemText>
    </ListItem>
    <ListItem button>
        <ListItemText primary="Contacts"></ListItemText>
    </ListItem>
    <ListItem button>
        <ListItemText primary="Services"></ListItemText>
    </ListItem>
</List>);
  return (
    <div className={customClasses.root}>
      <CssBaseline/>
      <Hidden smUp implementation='css'>
          <SwipeableDrawer open={open} onClose={()=>setopen(false)}>
          <Toolbar/>
          {drawerItems}
          </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
          <SwipeableDrawer open={open} onClose={()=>setopen(false)} variant="permanent">
          <Toolbar/>
          {drawerItems}
          </SwipeableDrawer>
      </Hidden>
      <AppBar position='fixed' color='secondary' className={customClasses.appbar}>
          <Toolbar>
            <IconButton
            onClick={()=> setopen(true)}
             edge="start"
             className={customClasses.menuButton}
             color="inherit">
                <Menubar/>
             </IconButton>
             <Typography variant='h6' className={customClasses.title}>Talha shiekh</Typography>
             <Button variant='outlined' color='inherit'>Login</Button>
          </Toolbar>
      </AppBar>
      <main className={customClasses.content}>
      <Toolbar/>
        <Typography variant='h2' gutterBottom  align="center">New React js Features</Typography>
        <Typography  align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti voluptas repudiandae, enim alias possimus sed ipsa consequatur, laudantium qui, ex exercitationem voluptates rerum? Maiores impedit laboriosam quibusdam labore excepturi perspiciatis consectetur, tempora vitae debitis nisi. Totam hic, reiciendis eius reprehenderit inventore quae eaque aliquid eligendi odio sint, optio fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis et deleniti illo quidem, cum error. Optio excepturi quasi id!
        </Typography>
      </main>
    </div>
  )
}

export default Drawer
