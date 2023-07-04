import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown"
import Translate from "@material-ui/icons/Translate"
import { useState } from 'react';
import addImage from "../components/assests/ad.jpg";
import { Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Hidden, Paper, TextField } from '@material-ui/core';
import { useEffect } from 'react';


const flexgrowStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    margin: {
        marginRight: theme.spacing(2)
    },
    padding: {
        padding: theme.spacing(5)
    }
}));

const languages = ["English", "Urdu", "Punjabi", "Hindi"]

export default function ButtonAppBar() {
    const growClasses = flexgrowStyles();

    const HandleOpen = (e) => {
        setopen(e.target);
    }

    const Handleselect = (index) => {
        setselctedIndex(index);
        HandleClose();
    }
    const HandleClose = () => setopen(false);

    const [open, setopen] = useState(null);
    const [selctedIndex, setselctedIndex] = useState(null);
    const [showAd, setshowAd] = useState(false);


    useEffect(()=>{
        const interval = setTimeout(openAd,3000);
return ()=>{
    clearInterval(interval);
}
    },[])

    const openAd = ()=> setshowAd(true);
    const CloseAd = ()=> setshowAd(false);

    return (
        <>
            <Box className={growClasses.root}>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={growClasses.margin}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" className={growClasses.root}>
                            News
                        </Typography>
                        <Button color="inherit" startIcon={<Translate />} endIcon={<KeyboardArrowDown />} onClick={HandleOpen} variant="outlined">{languages[selctedIndex] || "language"}</Button>
                        <Menu open={Boolean(open)} onClose={HandleClose} anchorEl={open}>
                            {
                                languages.map((item, index) => (
                                    <MenuItem onClick={() => Handleselect(index)}>{item}</MenuItem>
                                ))
                            }
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <Container className={growClasses.padding}> */}
            {/* <CssBaseline/>
            {/* ONLY ka matlab hai sirf us screen main nai dikhay ga  */}
            {/* UP xs ya sm  kay meaning hai sirf us screen main ya us sai zyada main ni dikhay ga */}
            {/* DOWN xs ya sm  kay meaning hai sirf us screen main ya us sai chotay main ni dikhay ga */}
            {/* <Hidden>
            <Paper style={{width:'90%',textAlign:'center',padding:3,margin:'0 auto'}}>
                <Typography variant='h4'>Talha shiekh</Typography>
            </Paper>
            </Hidden> */}
            {/* </Container> */}
            <Dialog open={showAd} onClose={CloseAd}>
                <Box style={{width:'300px',padding:'1em',textAlign:'center'}}>
                    <img src={addImage} style={{width:'60%'}} alt="bag" />
                    <Typography style={{fontWeight:700,marginTop:10}}>Enter your phone number below and avail 10% off on your first order.</Typography>
                    <Typography gutterBottom variant="caption" color="textPrimary">Enter your phone number below</Typography>
                    <TextField  variant='outlined' margin='dense' fullWidth placeholder="Enter Your Full Name" label="Enter Your Full Name"/>
                    <TextField  variant='outlined' margin='dense' fullWidth placeholder="Enter Your phone Number" label="Enter Your phone Number"/>
                    <Button onClick={CloseAd} variant='contained' color='primary' fullWidth>Submit</Button>
                </Box>
            </Dialog>
            <div className='App'>
                <Box style={{ padding: 3, textAlign: "center" }}>
                    <div className="content">
                        <Typography variant='h1' align='center'>Travel Laptop Backpack</Typography>
                        <Typography variant='body1' style={{ margin: '20px 0' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad obcaecati eligendi veniam vero rem quasi nisi, expedita dolor, atque iste perferendis, animi eveniet. Quod libero deleniti, qui illum autem accusantium suscipit voluptatem esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed autem esse corrupti. Adipisci at facere, nobis consequatur aspernatur incidunt tempora impedit! Nisi inventore eum iste delectus numquam, explicabo provident dolores?
                        </Typography>
                    </div>
                </Box>
            </div>
            <Container>
                {/* disableBackdropClick is used for preventing it close on clicking outside the dialog */}

            </Container>
        </>
    );
}
