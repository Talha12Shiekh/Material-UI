import { createTheme } from '@material-ui/core/styles';
import amber from "@material-ui/core/colors/amber";
import deepPurple from "@material-ui/core/colors/deepPurple";

const theme = createTheme({
    typography:{
        fontFamily:[
            "Dancing Script",
            "sans-serif"
        ],
        fontSize:18,
        fontWeightBold:[
            "700"
        ],
        h4:{
            fontFamily:"Inconsolata",
            fontSize:"6.2rem"
        },
        spacing:"10"
    },
    palette:{
        primary: {
            main:amber[900]
        },
        secondary:deepPurple,
    }
});

export default theme;