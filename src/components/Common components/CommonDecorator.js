import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import { Aboutstyles } from "../MuiProject.js/AboutStyles";
import { customStyles } from "../MuiProject.js/HeaderStyles";

export const CommonDecorator = ({label,NeedIcon,Icon,styles}) =>{
    const classes = customStyles();

   return <Box className={classes.decorator} style={styles}>
    <Typography className={classes.decoratorText} component="span">
    {label}
    </Typography>
    {NeedIcon ? <Typography className={classes.arrow} component="span">{Icon}</Typography> : null}
    </Box>
}

export const Divider = ({style}) => {
    const aclasses = Aboutstyles()
    return <div component="span" style={style} className={aclasses.divider}></div>
}

export const RenderSectionHeading = ({smallTxt,heading,description,alignCenter}) =>{
    const aclasses = Aboutstyles();
    return <Box className={aclasses.sectionContainer}>
    {CommonDecorator({label:smallTxt,NeedIcon:false, styles: alignCenter ? {width:"100px",margin:"10px auto"} : {}})}
    <Typography variant="h2"  align={alignCenter ? "center" : "left"} className={aclasses.sectionHeading}>{heading}</Typography>
    {Divider({ style:alignCenter ? {margin:"16px auto"} : {margin:"16px 0px"} })}
    <Typography variant="h6" className={aclasses.sectionDescription} align={alignCenter ? "center" : "left"} component="h6">{description}</Typography>
    </Box>
}

export const CardMedia = ({label,Desc,Icon})=>{
    const aclasses = Aboutstyles();
       return  <Grid container style={{marginTop:"1rem"}}>
            <Grid item xs={4} className={aclasses.AvatarContent}>
                <Avatar className={aclasses.avatar}>{Icon}</Avatar>
            </Grid>
            <Grid item xs={8} className={aclasses.MediaText}>
                <Typography variant="h5" component="h6" gutterBottom style={{fontWeight:"bold"}}>{label}</Typography>
                <Typography variant="body2" component="h6" gutterBottom>{Desc}</Typography>
            </Grid>
        </Grid>

}