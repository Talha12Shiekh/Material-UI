import React from 'react';
import { SwipeableDrawer,ListItem,ListItemText,Box ,List} from '@material-ui/core';
import { customStyles } from "./HeaderStyles";


const Drawer = ({ initialstate,navLinks, handleDrawerToggle }) => {
  const Dclasses = customStyles();
  return (
    <>
      <SwipeableDrawer
        anchor='left'
        open={initialstate}
        onClose={handleDrawerToggle}
        className={Dclasses.Drawer}
      >
        <Box className={Dclasses.DrawerWrapper}>
              <List style={{paddingTop:"30px"}}>
              {navLinks && navLinks.map((element) => ( 
               <ListItem key={element.id} button className={Dclasses.ListItem}>
                  <ListItemText>{element.label}</ListItemText>
                </ListItem>
              ))}
              </List>
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default Drawer
