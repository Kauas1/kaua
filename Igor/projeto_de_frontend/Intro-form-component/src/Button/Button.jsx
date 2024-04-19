import React from 'react';
import './button.css'
function Button(Button) {
 
  return (
    <> 
      <div className="btn" >
        <input type="button" placeholder={Button.Button} style={{backgroundColor: Button.background, color: Button.cor}} value="CLAIM YOUR FREE TRIAL"/>
      </div>
    
    </>
    

    
  )
  
}

export default Button;