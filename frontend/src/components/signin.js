
import React from 'react';
;


function signin(){
    
      return (
        <>
        <div className='container'>
        <h1>Signin</h1>
  <label>
     <h5>Email</h5>
    <input type="email" name="name" />
   <h5>Password</h5>
    <input type="password" name="password"/>
  </label>
  <div className='button'> 
  <input type="button" value="Signin" />
  </div>
</div>
      </>
  
      );
    }
  
  
  

export default signin;