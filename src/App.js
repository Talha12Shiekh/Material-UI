import React from 'react';
import Drawer from './components/Drawer';
import Presistent from './components/Menu';
import PagesPagination from './components/PagesPagination';
import SteeperMui from './components/StepperMui';
import { CssBaseline,Container,Paper } from "@material-ui/core";
import Component4 from './components/Component4';
import Component2 from './components/Components2';
import Component3 from './components/Component3';
import Header from './components/MuiProject.js/Header';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const theme = createTheme();
  return (
    <div>
    {/* <Router>
    <Component4/>
    <Routes>
      <Route exact path='/' element={<Component3/>}  />
      <Route exact path='/about' element={<Component4/>}  />
      <Route exact path='/contacts' element={<Component2/>}  />
    </Routes>
    </Router> */}
    {/* <Drawer/> */}
    {/* <Presistent/> */}
    {/* <CssBaseline/>
    <Container style={{padding:4}}>
     <Paper style={{padding:'2em'}} >
      <SteeperMui/>
     </Paper>
    </Container> */}
    {/* <Component4/> */}
    {/* <Component3/> */}
    <ThemeProvider theme={theme}>
    <Header/>
    </ThemeProvider>
    </div>
  )
}

export default App;
