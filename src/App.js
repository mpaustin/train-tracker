import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <Box height='100vh' width='100%' display='flex' flexDirection='column' justifyContent='space-between' >
        <Toolbar/>
        <Content/>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
