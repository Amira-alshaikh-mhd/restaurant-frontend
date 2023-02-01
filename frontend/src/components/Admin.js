
import React from 'react';
import logo from './logo.jpg'
import edit from './edit.svg'
import bin from './Bin.svg'



function admin(){

      return (
        <>
        <div className='container'>
        <img src={logo} alt='logo for rest'></img>
        <label id='imgbtn' htmlFor="filePicker" >
<img id='fileimg' src={edit} alt=''></img>
       </label>
<input id="filePicker" type={"file"}></input>

        </div>
         <div className='container2'>
            <h1 className='h11'>Restaurant </h1>
            <button id='resname' type='button'><img id='editname' src={edit} alt=''></img></button>
            
            </div>
            <nav>
            <div className='wrapper'>
                <div className='navbtn'></div>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button type='submit' >category</button>
            <button>+</button>

            </div>
            </nav>

            <div className='item'>


       
      <div className='dish'>
      <button id='edit1' type='button'><img id='editname' src={edit} alt=''></img></button>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </h3>
        <b>price</b>
        <p>description description description description description description description description description description description description description</p>
        <p>spicy</p>
    </div>
    <div className='dish'>
    <button id='edit2' type='button'><img id='editname' src={edit} alt=''></img></button>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h3>
        <b>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>
    <div className='dish'>
    <button id='edit3' type='button'><img id='editname' src={edit} alt=''></img></button>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h3>
        <b>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>
    <div className='dish' >
    <button id='edit4' type='button'><img id='editname' src={edit} alt=''></img></button>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
        <b>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>







    </div>

    

            
        
      </>

      );
    }

export default admin;