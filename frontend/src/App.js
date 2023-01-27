import React from 'react';
import './App.css';
import Home from './components/Home';
import Item from './components/Item';
import Main from './components/Main';

function App() {
  return (
    <>
    <Home />
    <div className='main'>
    <Main />
    <Item />
    <Item />
    <Item />
    <Item />
    </div>
    </>
  );
}

export default App;
