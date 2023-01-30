import React from 'react';
import logo from './logo.jpg'


function Home(){

      return (
        <>
        <img src={logo} alt='logo for rest'></img><br></br>
        
        
            <h1>Restaurant</h1>
            <nav>
            <div className='wrapper'>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>


            </div>
            </nav>

            <div className='item'>



      <div className='dish'>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
        <b>price</b>
        <p>description description description description description description description description description description description description description</p>
        <p>spicy</p>
    </div>
    <div className='dish'>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
        <b>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>
    <div className='dish'>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
        <b>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>
    <div className='dish'>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
        <b>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>







    </div>

    

            
        
      </>

      );
    }

export default Home;