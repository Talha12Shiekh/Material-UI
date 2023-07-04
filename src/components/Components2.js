import React, { useState, useEffect } from 'react';
import { Container, Paper, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Icons from "@material-ui/core/Icon";
import cyan from '@material-ui/core/colors/cyan';
import darkorange from '@material-ui/core/colors/amber';
import chartreuse from '@material-ui/core/colors/lime';
import Person from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import PanToolIcon from '@material-ui/icons/PanTool';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import theme from "./Theme";
import Fab from "@material-ui/core/Fab";
import axios from "axios";

const customStyles = makeStyles(theme => ({
    root: {
        width: '70vw',
        height: '30vh',
        background: theme.palette.info.dark,
        float: 'left'
    }
}))
const fabStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        background: theme.palette.grey[300],
    },
    add: {
        position: 'fixed',
        right: '5%',
        bottom: '5%'
    }
}))

const Components2 = () => {
    const classes = customStyles();
    const classesfab = fabStyles();
    const [users,setUsers] = useState([]);
    useEffect(() => {
        loadusers();
    }, [])

    const loadusers = async () => {
        const result = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(result.data);

    }
    return (
        <>
            <Container>
                <Paper component={Box} elevation={5} style={{ padding: 8 }} >
                    <Icons style={{ fontSize: 100, color: cyan[900] }}>emoji_emotions</Icons>
                    <Icons style={{ fontSize: 100, color: darkorange[900] }}>emoji_emotions</Icons>
                    <Icons style={{ fontSize: 100, color: chartreuse[900] }}>emoji_emotions</Icons>
                    <Person style={{ fontSize: 100, color: '#fff', backgroundColor: 'red', border: '2px solid black', float: 'right' }} />
                </Paper>
            </Container>
            <ThemeProvider theme={theme}>
                <Container maxWidth="sm" >
                    <Paper style={{ padding: '10px' }} component={Box} p={80}>
                        <Typography variant='h4' color='primary'>Read docs</Typography>
                        <Typography variant='subtitle1' color='secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odit, ad libero, officiis quasi aspernatur sapiente sequi voluptates dignissimos nobis commodi enim ipsum!</Typography>
                        <Button style={{ marginTop: '8px' }} variant='contained' color="secondary" size='large' endIcon={<PanToolIcon />} startIcon={<PanToolIcon />}>Read here</Button>
                        <Button style={{ marginTop: '8px', marginLeft: 9 }} variant='contained' color="primary" size='large' endIcon={<PanToolIcon />} startIcon={<PanToolIcon />}>Read Never</Button>
                    </Paper>
                </Container>
            </ThemeProvider>
            <Container className={classes.root}>
                <Paper>
                    <Typography variant='h4' component={Box} width={500} p={2}>
                        Get started
                    </Typography>
                    <Typography variant='subtitle1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus numquam, repellendus laudantium suscipit voluptatum unde amet blanditiis accusantium quas!
                    </Typography>
                </Paper>
            </Container>

            <h2 style={{ display: 'block' }}>hello bro</h2>
            <h2 style={{ display: 'block' }}>hello bro</h2>
            <h2 style={{ display: 'block' }}>hello bro</h2>
            <h2 style={{ display: 'block' }}>learning grid system</h2>
            <hr />
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={3} sm={6}>
                        <Paper component={Box} elevation={5} p={5} mt={2}>
                            <Typography variant='h4'>Read docs</Typography>
                            <Typography variant='subtitle1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, hic nam cupiditate laboriosam totam accusantium quas deleniti </Typography>
                            <Button>Read more</Button>
                        </Paper>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Box p={8} boxShadow="5">
                        <Paper>
                            <Typography variant='h4'>Read docs</Typography>
                            <Typography variant='subtitle1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, hic nam cupiditate laboriosam totam accusantium quas deleniti </Typography>
                            <Button>Read more</Button>
                        </Paper>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Paper component={Box} elevation={5} style={{ padding: '2em' }}>
                            <Typography variant='h4'>Read docs</Typography>
                            <Typography variant='subtitle1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, hic nam cupiditate laboriosam totam accusantium quas deleniti </Typography>
                            <Button>Read more</Button>
                        </Paper>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Paper component={Box} elevation={5} style={{ padding: '2em' }}>
                            <Typography variant='h4'>Read docs</Typography>
                            <Typography variant='subtitle1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, hic nam cupiditate laboriosam totam accusantium quas deleniti </Typography>
                            <Button>Read more</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Typography align='center' variant='h4'>Material UI FAB's</Typography>
            <hr />
            <Container className={classesfab.root}>
                <Fab color='secondary' variant='extended' className={classesfab.add}><AddIcon />Create User</Fab>

                <Grid container>
                    {
                        // eslint-disable-next-line array-callback-return
                        users.map((user) => {
                            <Grid item md="3">
                                <Card>
                                    <CardActionArea>
                                        <CardMedia component="img" image="https://via.placeholder.com/200x300"/>
                                        <CardContent>
                                            <Typography variant="h6">
                                                {user.title}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                {user.completed}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Components2
