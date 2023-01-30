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
    <Item dish = 'Dish1' price ='Price1' description ='aaaa bbbbb ddddd cccccc dddddd gggggg eeeeeee rrrrrrrr yyyyyyyyyyyyy iiiiiiiiiii oooooooooooo  ' spicy ='○spicy ○vegan1'/>
    <Item dish = 'Dish2' price ='Price2' description ='bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' spicy ='○spicy ○vegan2'/>
    <Item dish = 'Dish3' price ='Price3' description ='ccccccccccccccccccccccccccccccccccccccccccccccc' spicy ='○spicy ○vegan3'/>
    <Item dish = 'Dish4' price ='Price4' description ='ddddddddddddddddddddddddddddddddddddddddddddddd' spicy ='○spicy ○vegan4'/>
    </div>
    </>
  );
}

export default App;
