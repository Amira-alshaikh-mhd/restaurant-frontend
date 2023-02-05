
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
             <div className='twobtn'>
            <button className='catagory' type='submit'  >category</button>
            <button className='delete' onclick="submit()">
              <img className='binimg' src={bin} alt='' />
            </button>
            </div>
            <div className='twobtn'>
            <button className='catagory' type='submit'  >category</button>
            <button className='delete' onclick="submit()">
              <img className='binimg' src={bin} alt='' />
            </button>
            </div>
            <div className='twobtn'>
            <button className='catagory' type='submit'  >category</button>
            <button className='delete' onclick="submit()">
              <img className='binimg' src={bin} alt='' />
            </button>
            </div>
            <div className='twobtn'>
            <button className='catagory' type='submit'  >category</button>
            <button className='delete' onclick="submit()">
              <img className='binimg' src={bin} alt='' />
            </button>
            </div>
            <div className='twobtn'>
            <button className='catagory' type='submit'  >category</button>
            <button className='delete' onclick="submit()">
              <img className='binimg' src={bin} alt='' />
            </button>
            </div> 
            <div className='twobtn'>
            <button className='catagory' type='submit'  >category</button>
            <button className='delete' onclick="submit()">
              <img className='binimg' src={bin} alt='' />
            </button>
            </div>
            <div className='twobtn'>
            <button className='catagory' type='submit'  >category</button>
            <button className='delete' onclick="submit()">
              <img className='binimg' src={bin} alt='' />
            </button>
            </div>
            <div className='twobtn'>
            <button className='catagory' type='submit'  >category</button>
            <button className='delete' onclick="submit()">
              <img className='binimg' src={bin} alt='' />
            </button>
            </div> 
            <div className='twobtn'>
            <button className='catagory' type='submit'  >category</button>
            <button className='delete' onclick="submit()">
              <img className='binimg' src={bin} alt='' />
            </button>
            </div>
            <div>
            <button className='catagory'>+</button>
            </div>

            </div>
            </nav>

            <div className='item'>


       
      <div className='dish1'>
      <div className='editbtn1'>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   </h3>
        <button id='edit1' type='button'><img id='editname' src={edit} alt=''></img></button>
        <button id='edit1' type='button'><img id='editname' src={bin} alt=''></img></button>
        </div>
        <b>price</b>
        <p>description description description description description description description description description description description description description</p>
        <p>spicy</p>
    </div>


    <div className='dish1'>
        <div className='editbtn1'>
   
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h3>
        <button id='edit1' type='button'><img id='editname' src={edit} alt=''></img></button>
        <button id='edit1' type='button'><img id='editname' src={bin} alt=''></img></button>
        </div>
        <b>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>


    <div className='dish1'>
    <div className='editbtn1'>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h3>
        <button id='edit1' type='button'><img id='editname' src={edit} alt=''></img></button>
        <button id='edit1' type='button'><img id='editname' src={bin} alt=''></img></button>
        </div>
        <b>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>


    <div className='dish1' >
    <div className='editbtn1'>
        <h3>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
        <button id='edit1' type='button'><img id='editname' src={edit} alt=''></img></button>
        <button id='edit1' type='button'><img id='editname' src={bin} alt=''></img></button>
        </div>
        <b>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>







    </div>

    

            
        
      </>

      );
    }

export default admin;