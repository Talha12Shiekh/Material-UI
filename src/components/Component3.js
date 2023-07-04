import React, { useState } from 'react';
import { Container, Grid, Button, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia, CardHeader, Avatar, IconButton, Paper, TextField, Box, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Checkbox, Switch, List, ListItem, ListItemText, ListItemIcon, Divider, Collapse } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import purple from '@material-ui/core/colors/purple';
import Favorite from '@material-ui/icons/Favorite';
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
const customStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '120vh',
        backgroundColor: theme.palette.grey[200],
        paddingTop: theme.spacing(5),
    }
}));
const textFieldStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '120vh',
        backgroundColor: theme.palette.secondary.main,
        paddingTop: theme.spacing(5),
    }
}));
const RadioButtonStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '40vh',
        backgroundColor: theme.palette.warning.main,
        paddingTop: theme.spacing(5),
    }
}));
const CheckBoxStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '35vh',
        backgroundColor: theme.palette.info.main,
        paddingTop: theme.spacing(5),
    }
}));
const SwitchStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '40vh',
        backgroundColor: theme.palette.info.light,
        paddingTop: theme.spacing(5),
    }
}));
const ListStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: purple[600],
        paddingTop: theme.spacing(5),
        position: 'relative'
    },
    sidebar: {
        position: 'absolute',
        width: '350px',
        height: '100%',
        left: '0',
        top: '0',
        borderRadius: 0,
        boxShadow: 4
    },
    nestedItem: {
        paddingLeft: theme.spacing(8),
    }
}));
const menuStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.secondary.main,
        paddingTop: theme.spacing(5),
    }
}))


const Component3 = () => {
    const classes = customStyles();
    const Fieldclasses = textFieldStyles();
    const Radioclasses = RadioButtonStyles();
    const Checkclasses = CheckBoxStyles();
    const switchclasses = SwitchStyles();
    const menuClasses = menuStyles();
    const Listclasses = ListStyles();
    const [gender, setgender] = useState("male");
    const [open, setopen] = useState(false);
    const [remember, setremember] = useState(false);
    const [autoplay, setautoplay] = useState(false);
    const handleChange = (e) => {
        setgender(e.target.value)
    }
    const handRadio = (e) => {
        setremember(e.target.checked)
    }
    const handleautoplay = (e) => {
        setautoplay(e.target.checked);
    }
    return (
        <>
            <Container className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item md={3}>
                        <Card variant='outlined'>
                            <CardHeader
                                avatar={<Avatar style={{ background: 'red', color: 'white' }}
                                    action={
                                        <IconButton>emoji_emotions</IconButton>
                                    }>
                                    &#128128;</Avatar>}
                                title="Talha shiekh"
                                subheader="Posted on 11 Aug 2020" />
                            <CardActionArea>
                                <CardMedia component="img" image="https://source.unsplash.com/random/480x480/?webdevelopment" />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>Web Developement</Typography>
                                    <Typography gutterBottom variant="subtitle1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, dicta!</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button color='secondary' style={{ marginTop: '5px' }} variant="contained">Read More</Button>
                            </CardActions>

                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card variant='outlined'>
                            <CardHeader avatar={<Avatar style={{ background: 'red', color: 'white' }}>&#128128;</Avatar>} title="Talha shiekh" subheader="Posted on 11 Aug 2020" />
                            <CardActionArea>
                                <CardMedia component="img" image="https://source.unsplash.com/random/480x480/?icons" />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>Post title</Typography>
                                    <Typography gutterBottom variant="subtitle1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, dicta!</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button color='secondary' style={{ marginTop: '5px' }} variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card variant='outlined'>
                            <CardHeader avatar={<Avatar style={{ background: 'red', color: 'white' }}>&#128128;</Avatar>} title="Talha shiekh" subheader="Posted on 11 Aug 2020" />
                            <CardActionArea>
                                <CardMedia component="img" image="https://source.unsplash.com/random/480x480/?designing" />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>Post title</Typography>
                                    <Typography gutterBottom variant="subtitle1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, dicta!</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button color='secondary' style={{ marginTop: '5px' }} variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card variant='outlined'>
                            <CardHeader avatar={<Avatar style={{ background: 'red', color: 'white' }}>&#128514;</Avatar>} title="Talha shiekh" subheader="Posted on 11 Aug 2020" />
                            <CardActionArea>
                                <CardMedia component="img" image="https://source.unsplash.com/random/480x480/?cricket" />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>Post title</Typography>
                                    <Typography gutterBottom variant="subtitle1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, dicta!</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button color='secondary' style={{ marginTop: '5px' }} variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <hr />
            <hr />
            <Container className={Fieldclasses.root}>
                <Paper style={{ width: '30%', margin: '0 auto', marginBottom: '5em', padding: '2em' }}>
                    <Typography variant='h5'>Create new account</Typography>
                    <Box component="form" style={{ marginTop: '1em' }}>
                        <TextField
                            fullWidth
                            placeholder='Enter your first name'
                            margin='normal'
                            variant='outlined'
                            color='secondary'
                            label="First Name"
                            // helperText="Enter your first name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleRoundedIcon color='secondary' />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            fullWidth
                            placeholder='Enter your last name'
                            margin='normal'
                            variant='outlined'
                            color='secondary'
                            label="Last Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleRoundedIcon color='secondary' />
                                    </InputAdornment>
                                )
                            }} />
                        <TextField
                            fullWidth
                            placeholder='Enter your message'
                            margin='normal'
                            variant='outlined'
                            color='secondary'
                            label="Your message"
                            multiline
                            minRows={4}
                            helperText="Minimun 140 characters"
                        />
                    </Box>

                    <Box sx={{ marginTop: '12em' }}>
                        <Button variant='contained' size='large' color='secondary' fullWidth>Sign up</Button>
                    </Box>
                </Paper>
            </Container>
            <hr />
            <hr />
            <Container className={Radioclasses.root}>
                <Paper component={Box} style={{ width: '30%', padding: '2em', margin: '0 auto' }}>
                    <Box component="form">
                        <FormControl value={gender}>
                            <FormLabel>Choose your gender</FormLabel>
                            <RadioGroup onChange={handleChange} row>
                                <FormControlLabel label="Male" control={<Radio color='primary' />} value="male"></FormControlLabel>
                                <FormControlLabel label="Female" control={<Radio color='primary' />} value="female"></FormControlLabel>
                                <FormControlLabel label="Other" control={<Radio color='primary' />} value="other"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Paper>
            </Container>
            <hr />
            <hr />
            <Container className={Checkclasses.root}>
                <Paper component={Box} style={{ width: '30%', padding: '2em', margin: '0 auto' }}>
                    <Box component="form">
                        <FormControl>
                            <FormControlLabel label="Keep me remember" control={<Checkbox onChange={handRadio} icon={<FavoriteBorderIcon />} checkedIcon={<Favorite />} checked={remember} />} />
                        </FormControl>
                    </Box>
                </Paper>
            </Container>
            <hr />
            <hr />
            <Container className={switchclasses.root}>
                <Paper
                    component={Box}
                    style={{ width: '30%', margin: '0 auto', padding: '2em', backgroundColor: autoplay ? 'black' : 'white', color: autoplay ? 'white' : 'black' }}>
                    <FormControlLabel label={autoplay ? "Dark mode enabled" : "Light mode enabled"} control={<Switch onChange={handleautoplay} />} />
                </Paper>
            </Container>
            <hr />
            <hr />
            <Container className={Listclasses.root}>
                <Paper className={Listclasses.sidebar}>
                    <List disablePadding>
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={<Typography color='secondary' variant='h5'>Gettting Started</Typography>} secondary="Start application" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Components" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Components API" />
                        </ListItem>
                        <ListItem button onClick={() => { setopen(!open) }}>
                            <ListItemIcon>
                                <AccountCircleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Styles" />
                        </ListItem>
                        <Collapse in={open}>
                            <List disablePadding>
                                <ListItem button className={Listclasses.nestedItem}>
                                    <ListItemText>Nested List 1</ListItemText>
                                </ListItem>
                                <ListItem button className={Listclasses.nestedItem}>
                                    <ListItemText>Nested List 2</ListItemText>
                                </ListItem>
                                <ListItem button className={Listclasses.nestedItem}>
                                    <ListItemText>Nested List 3</ListItemText>
                                </ListItem>
                                <ListItem button className={Listclasses.nestedItem}>
                                    <ListItemText>Nested List 4</ListItemText>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Paper>
            </Container>
            <hr />
            <hr />
            <hr />
        </>
    )
}

export default Component3
