import React, { useState } from 'react';
import { AppBar, Button, Container, IconButton, Toolbar, Typography, Menu, MenuItem, CssBaseline, Grid, Paper } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Theme1 from "./Theme1";


const appbarStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        padding: theme.spacing(6)
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex'
        }
    },

}))

const Component4 = () => {
    const appClasses = appbarStyles();
    const [mobilemenu, setmobilemenu] = useState(null);
    const isMobielMenu = Boolean(mobilemenu);
    const openMobileMenu = (e) => {
        setmobilemenu(e.currentTarget);
    }
    const closeMobileMenu = () => {
        setmobilemenu(null);
    }
    const mobileMenu = (
        <Menu anchorEl={mobilemenu} id="mobile-menu" keepMounted open={isMobielMenu}>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/">Home</MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/about">About</MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/contacts">Contacts</MenuItem>
        </Menu>
    )
    return (
        <>
            <Container className={appClasses.root}>
                <AppBar color='secondary'>
                    <Toolbar>
                        <Typography variant='h6' style={{ flexGrow: 1 }}>Material UI</Typography>
                        <div className={appClasses.sectionDesktop}>
                            <Button component={Link} to="/" color='inherit'>Home</Button>
                            <Button component={Link} to="/about" color='inherit'>About</Button>
                            <Button component={Link} to="/contacts" color='inherit'>Contacts</Button>
                        </div>
                        <IconButton color='inherit' onClick={openMobileMenu}>
                            <MoreVertIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {mobileMenu}
            </Container>
            <ThemeProvider theme={Theme1}>
                <CssBaseline />
                <Container>
                    <Grid container>
                        <Grid item md={3} sm={6}>
                            <Paper elevation={5} style={{padding:7}}>
                                <Typography variant='h4'>Read docs</Typography>
                                <Typography variant='subtitle1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, hic nam cupiditate laboriosam totam accusantium quas deleniti </Typography>
                                <Button>Read more</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Component4;
