import React ,{useState,useEffect}from 'react';
import { Container ,Box,CssBaseline, Grid, Card, CardContent, Typography} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";

const PagesPagination = () => {
  const [page,setpage] = useState(1);
  const [posts,setposts] = useState([]);
  const loadPosts = async ()=>{
    const res = await axios.get(`http://localhost:3001/posts?_page=${page}`);
    setposts(res.data);
  }

  useEffect(()=>{
loadPosts();
// eslint-disable-next-line
  },[page])
  return (
    <div className='app'>
    <CssBaseline/>
      <Container component={Box} style={{padding:'3px 0'}}>
      <Grid container spacing={3}>
        {
          posts.map((post) =>{
          return  <Grid item sm={3} key={post.id} >
        <Card style={{height:300}}>
        <CardContent>
          <Typography>{post.id},{post.title}</Typography>
          <Typography>{post.content}</Typography>
        </CardContent>
        </Card>
            </Grid>
          })
        }
      </Grid>
        <Pagination 
      count={10} 
      color="secondary" 
      variant="outlined" 
      shape="rounded" 
      style={{display:'flex',justifyContent:'center',margin:'3rem 0'}}
      // showFirstButton // to show button that when clicked takes you to the first page
      // showLastButton // to show button that when clicked takes you to the last page
      // hideNextButton // hide next button
      // hidePrevButton // hide previous button
      defaultPage={page} // which page should be default
      onChange={(event,value)=> setpage(value)}
      />
      </Container>
    </div>
  )
}

export default PagesPagination
