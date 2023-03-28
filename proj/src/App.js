import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/footer';
//import items from './components/data.js';
import Singletour from './components/Singletour/Singletour';
import Post from './components/Post/Post.js';
import Update from './components/Update/Update.js';



function App() {
  
  return (
    
    <Router>
        <Navbar />
        
        
        <Routes>

           <Route path='/' element={<Home />} />
           <Route path='/tour' element={<Main/>} />
           <Route path='/tour/tour/:id' element={<Singletour />} />
           <Route path='/post' element={<Post />} />
           <Route path='/editpost' element={<Update />} />
        </Routes>
     
        <Footer />

    </Router>
    
    
    
      
    
  );
}

export default App;
