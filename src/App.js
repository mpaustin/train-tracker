import React from 'react';
import './App.css';
import Toolbar from './components/ToolBar';
import Content from './components/Content';
import Footer from './components/Footer';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <Box height='100vh' width='100%' display='flex' flexDirection='column' justifyContent='space-between' >
        <Box><Toolbar/></Box>
        <Box height='90vh'><Content/></Box>
        <Box><Footer/></Box>
      </Box>
    </div>
  );
}

export default App;
