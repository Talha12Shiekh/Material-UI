import { makeStyles } from "@material-ui/core/styles";
import BrandImage from "../assests/brandBanner.jpg";
import teal from "@material-ui/core/colors/teal"
// import { purple } from "@material-ui/core/colors";

export const customStyles = makeStyles((theme) => ({
    headerWrapper:{
        width:"100%",
        minHeight:"90vh",
        height:"auto",
        background:`linear-gradient(to bottom right,#04303140,#00606473),url(${BrandImage})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        overflow:"hidden"
    },
    logo:{
        fontFamily: 'Creepster',
    },
    Headercontainer:{
        width:"100%",
        minHeight:"90vh",
        height:"auto",
        display:"flex",
        flexFlow:"column wrap",
        color:"#fff",
        padding:"20px",
        justifyContent:"center"
    },
    headerTitle:{
        fontSize:"4rem",
        marginBottom:theme.spacing(2),
        fontWeight:"bolder",
        [theme.breakpoints.down('sm')]: {
            fontSize:"3rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"2rem",
        marginBottom:theme.spacing(0),
        }
    },
    headerDes:{
        fontSize:"2.5rem",
        textTransform:"capitalize",
        fontWeight:"bold",
        [theme.breakpoints.down('sm')]: {
            fontSize:"1.5rem",
        }
    },
    navbar:{
        backgroundColor:theme.palette.success.dark,
    },
    buttons:{
        backgroundColor:"teal",
        marginRight: "20px",
        color:"white",
        borderColor:'white'
    },
    decorator:{
        display:"flex",
        marginTop:theme.spacing(2),
        fontWeight:"bolder",
        position:"relative",
        "&:before":{
            content:'""',
            width:"45px",
            height:"45px",
            background:"green",
            borderRadius:"50%",

        }
    },
    decoratorText:{
        lineHeight:"45px",
        position:"absolute",
        left:"25px"
    },
    arrow:{
        lineHeight:"50px",
        position:"absolute",
        left:"95px",
        animationName:"upDown",
        animationDuration:"0.7s",
        animationIterationCount:"infinite"
    },

    // creating an animation
    "@global":{
        "@keyframes upDown":{
            "0%":{
                paddingTop:"0px",
                transform:"scale(0)"
            },
            "100%":{
                paddingTop:"5px",
                transform:"scale(1)"
            }
        }
    },

    Drawer:{
        width:"250px",
        height:"100vh"
    },
    
    DrawerWrapper:{
        width:"250px",
        height:"100vh",
        backgroundColor:teal[500]
    },

    ListItem:{
        color:"white"
    }
}))