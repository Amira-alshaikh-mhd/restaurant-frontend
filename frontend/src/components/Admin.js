
import React from 'react';
import logo from './logo.jpg'
import edit from './edit.svg'
import bin from './Bin.svg'



function admin(){

      return (
        <>
        {/*RESTORANT LOGO*/}
        <div className='col-1 container'>
        <img className='logo' src={logo} alt='logo for rest'></img>
        <label className='imgbtn' htmlFor="filePicker" >
<img className='fileimg' src={edit} alt=''></img>
       </label>
<input className="filePicker" type={"file"}></input>

        </div>
           {/*RESTORANT NAME */}
         <div className='col-2 container2'>
            <h1 className='h11'>Restaurant </h1>
            <button className='resname' type='button'><img className='editname' src={edit} alt=''></img></button>
            
            </div>
            {/*NAV BAR*/}
            <nav className='nav'>
            <div className='col-3 wrapper'>
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


       {/*DISH*/}
      <div className='col-4 dish1'>
      <div className='editbtn1'>
         <h3 className='h3'>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   </h3>
        <button className='edit1' type='button'><img className='editname' src={edit} alt=''></img></button>
        <button className='edit1' type='button'><img className='editname' src={bin} alt=''></img></button>
        </div>
        <b className='price'>price</b>
        <p>description description description description description description description description description description description description description</p>
        <p>spicy</p>
    </div>


    <div className='col-4 dish1'>
        <div className='editbtn1'>
   
         <h3 className='h3'>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h3>
        <button className='edit1' type='button'><img className='editname' src={edit} alt=''></img></button>
        <button className='edit1' type='button'><img className='editname' src={bin} alt=''></img></button>
        </div>
        <b className='price'>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>


    <div className='col-4 dish1'>
    <div className='editbtn1'>
         <h3 className='h3'>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h3>
        <button className='edit1' type='button'><img className='editname' src={edit} alt=''></img></button>
        <button className='edit1' type='button'><img className='editname' src={bin} alt=''></img></button>
        </div>
        <b className='price'>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>


    <div className='col-4 dish1' >
    <div className='editbtn1'>
         <h3 className='h3'>dish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
        <button className='edit1' type='button'><img className='editname' src={edit} alt=''></img></button>
        <button className='edit1' type='button'><img className='editname' src={bin} alt=''></img></button>
        </div>
        <b className='price'>price</b>
        <p>description</p>
        <p>spicy</p>
    </div>







    </div>

    

            
        
      </>

      );
    }

export default admin;