import { Box, IconButton, Typography } from '@material-ui/core'
import { ArrowUpward, Favorite } from '@material-ui/icons';
import React from 'react'
import { Aboutstyles } from './AboutStyles';

const Fotter = () => {
    const Fclasses = Aboutstyles();
    let year = new Date();
    return (
        <Box className={Fclasses.footerContainer}>
        <IconButton className={Fclasses.IconButton}>
            <ArrowUpward/>
        </IconButton>
        <Typography variant='h5' component="h4" align="center" justify="center" color="inherit">Developed and designed by Talha Shiekh <Favorite style={{color:"red"}}/> Copyright &copy; reserved {year.getFullYear()} </Typography>
        </Box>
    )
}

export default Fotter
