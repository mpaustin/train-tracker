import React from 'react';
import './App.css';
import ToolBar from './components/Toolbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    theme: {
        backgroundColor: '#808080',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      margin: '30px 25% 30px',
    },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      TEST
      {/* <Box height='100vh' width='100%' display='flex' flexDirection='column' justifyContent='space-between' >
        <Box className={classes.theme} ><ToolBar/></Box>
        <Box className={classes.content}><Content/></Box>
        <Box className={classes.theme} ><Footer/></Box>
      </Box> */}
    </div>
  );
}

export default App;
