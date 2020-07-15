import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Home from './Home';
import Launch from './Launch';
import LaunchIndex from './LaunchIndex';
import LaunchShoe from './LaunchShoe';
import NotFound from './NotFound';
import { AppBar, Toolbar } from '@material-ui/core';

function App() {
  return (
    <>
      
        <AppBar position="sticky" style={{backgroundColor: "darkgrey"}}>
          <Toolbar style={{backgroundColor: "transparent", display: "flex", justifyContent: "space-around"}}>
            <Link style={{color: `mintcream`, textShadow:`0px 4px 4px rgba(0, 0, 0, 0.25)`, fontWeight: `bold`, fontSize: `32px`, textDecoration: `none`}} to="/">Home</Link>
            <Link style={{color: `mintcream`, textShadow:`0px 4px 4px rgba(0, 0, 0, 0.25)`, fontWeight: `bold`, fontSize: `32px`, textDecoration: `none`}} to="/launch">Store</Link>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="launch" element={<Launch />}>
            <Route path="/" element={<LaunchIndex />} />
            <Route path=":slug" element={<LaunchShoe />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </>
  );
}

export default App;
