
import React from 'react';
;


function signup(){
    
      return (
        <>
        <div className='container'>
        <h1>Signup</h1>
  <label>
     <h5>Email</h5>
    <input type="email" name="name" />
   <h5>Password</h5>
    <input type="password" name="password"/>
  </label>
  <div className='signupcontainer'> 
  <input className='signup'  type="button" value="Signup" />
  </div>
</div>
      </>
  
      );
    }
  
  
  

export default signup;