
import React from 'react';
import './App.css';
import Signin from './Pages/signin';
import Signup from './Pages/signup';
import{ BrowserRouter, Route, Routes }from "react-router-dom";


function App() {
  return(
  <>
  
  <BrowserRouter>
<Routes>
<Route path='/users/login' exact element={<Signin/>} />
<Route path='/users/new' exact element={<Signup/>} />
</Routes>
</BrowserRouter>
    </>
  );
   
  }



export default App;
