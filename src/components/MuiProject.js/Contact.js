import { Box, Container, Grid, Hidden,Button } from '@material-ui/core'
import React, { useState } from 'react';
import teal from "@material-ui/core/colors/teal"
import { RenderSectionHeading } from '../Common components/CommonDecorator';
import { Aboutstyles } from './AboutStyles';
import aboutImage from "../assests/contactus.jpg";
import { RenderInputText } from './FormComponent';

const Contact = () => {
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [message,setmessage] = useState("");
  const [entry,setentry] = useState([]);
  const aclasses = Aboutstyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email) {
      const newEntry = {key:new Date().getTime().toString(),name:name,email:email};
      setentry([...entry,newEntry]);
      setname("");
      setemail("");
       console.log({name:name,email:email,message:message})
    }else{
      alert("please fill all the credentials")
    }
  }

  return (
    <Box className={aclasses.section} style={{ backgroundColor: teal[800] }}>
      <Container>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img src={aboutImage} alt="Loading..." className={aclasses.responsiveImage} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} style={{marginBottom:"1rem"}}>
              {RenderSectionHeading({ smallTxt: "CONTACT ME", heading: "Seems ineteresting", description: "Got my portfolio seen then feel free to contact me for your future projects" })}
              <br />
              <Grid container style={{ marginTop: "5rem" }} direction="row" display="flex" justifyContent='center' alignItems="center">
                <Grid item xs={12} sm={10} style={{marginBottom:"1rem"}}>
                {RenderInputText({label:"firstName",name:"firstName",value:name,onChange:(e) => setname(e.target.value)})}
                </Grid>
                <Grid item xs={12} sm={10} style={{marginBottom:"1rem"}}>
                {RenderInputText({label:"Email",name:"email",value:email,onChange:(e) => setemail(e.target.value)})}
                </Grid>
                <Grid item xs={12} sm={10}>
                {RenderInputText({label:"Enter your message",name:"messages",multiline:true,rows:5,value:message,onChange:(e) => setmessage(e.target.value)})}
                </Grid>
                <Grid item xs={12} sm={8} style={{ marginTop: "1rem",color:"white",backgroundColor:"forestgreen" }}>
                      <Button variant="outlined" type='submit' fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

export default Contact
