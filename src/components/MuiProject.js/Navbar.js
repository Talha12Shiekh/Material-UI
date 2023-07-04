import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import { customStyles } from './HeaderStyles';
import { Hidden } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';


export default function ButtonAppBar({ navLinks,handleDrawerToggle }) {
    const classes = customStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" className={classes.navbar}>
                <Toolbar className={classes.navbar}>
                    <Typography variant="h4" component="h4" className={classes.logo} style={{ flexGrow: 1 }}>
                        {"GreatCoders"}
                    </Typography>
                    <Box component={Hidden} xsDown>
                        { navLinks.map((element) => {
                                return <Button className={classes.buttons} style={{ backgroundColor: teal[500], marginRight: "1rem", color: "white" }} variant='contained' key={element.id}>{element.label}</Button>
                            })
                        }
                    </Box>
                    <Box component={Hidden} smUp>
                        <IconButton color='inherit' onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
