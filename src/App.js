import React from 'react';
import './App.css';
import Toolbar from './components/ToolBar';
import Content from './components/Content';
import Footer from './components/Footer';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

const useStyles = makeStyles({
    theme: {
        backgroundColor: '#808080',
    }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box height='100vh' width='100%' display='flex' flexDirection='column' justifyContent='space-between' >
        <Box className={classes.theme} ><Toolbar/></Box>
          <Switch>
            <Route 
              exact
              path={'/'}
            >
              <Redirect to={'/workouts'}/>
            </Route>
            <Route
              path={'/workouts'}
            >
              <Box height='90vh' margin='30px 25% 30px' ><Content/></Box>
            </Route>
            <Route
              path={'/login'}
            >
              Login
            </Route>
            <Route
              path={'/test'}
            >
              Test
            </Route>
          </Switch>
        <Box className={classes.theme} ><Footer/></Box>
      </Box>
    </div>
  );
}

export default App;
