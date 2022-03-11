import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter , Route, Routes,Router} from 'react-router-dom';
import Home from './components/screens/Home';
import Signin from './components/screens/Signin';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/signin" element={<Signin/>} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/profile" element={<Profile/>} />
    <Route exact path="/create" element={<CreatePost/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
//Error: [Home] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>