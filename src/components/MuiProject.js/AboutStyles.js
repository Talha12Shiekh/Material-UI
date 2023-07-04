import teal from "@material-ui/core/colors/teal"
import {  lightBlue } from '@material-ui/core/colors';
import { makeStyles } from "@material-ui/core";

export const Aboutstyles = makeStyles((theme) => ({
    section:{
        backgroundColor: teal[500],
        // backgroundColor: theme.palette.success.main,
        padding:theme.spacing(10),
    },
    divider:{
        width:"65px",height:"4px", backgroundColor:"limegreen",borderRadius:"25px"
    },
    responsiveImage:{
        width:"100%",
        margin:"auto"
    },

    sectionContainer:{
        padding:theme.spacing(1),
        color:"#fff",
    },
    
    sectionHeading:{
        margin:theme.spacing(2,0),
        fontWeight:"bold"
    },
    
    sectionDescription:{
        fontWeight:"bold"
    },

    AvatarContent:{
        display:"flex",
        flexFlow:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    avatar:{
        backgroundColor:"teal",
        color:"#fff",
        padding:"8px",
        border:"1px solid white"
    },

    MediaText:{
        color:"#fff"
    },

    sectionDark:{
        backgroundColor:teal[600],
        padding:theme.spacing(10)
    },

    imageContainer:{
        position:"relative",
        "&:hover $overlay":{
            opacity:1
        }
    },

    overlay:{
        position:"absolute",
        width:"100%",
        height:"100%",
        top:0,
        left:0,
        backgroundColor:lightBlue[500],
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        opacity:0,
        transition:"0.7s"
    },

    overlayTitle:{
        fontSize:"2rem",
        marginBottom:"1rem",
        [theme.breakpoints.down("xs")]:{
            fontSize:"1.2rem"
        }
    },

    footerContainer:{
        backgroundColor:theme.palette.success.dark,
        color:"#fff",
        padding:theme.spacing(2),
        position:"relative",
        height:"6vh"
    },

    IconButton:{
        position:"absolute",
        right:5,
        top:-25,
        color:"#fff",
        backgroundColor:teal[800],
        border:"1px solid white"
    }

}));

 