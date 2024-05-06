import React from 'react';
import './button.css'
function Button(Button) {
 
  return (
    <> 
      <div className="btn" >
        <input className="botao" type="button" placeholder={Button.Button} style={{backgroundColor: Button.background, color: Button.cor, borderRadius: Button.borda, }} value="1"/>
        <input className="botao" type="button" placeholder={Button.Button} style={{backgroundColor: Button.background, color: Button.cor, borderRadius: Button.borda, }} value="2"/>
        <input className="botao" type="button" placeholder={Button.Button} style={{backgroundColor: Button.background, color: Button.cor, borderRadius: Button.borda, }} value="3"/>
        <input className="botao" type="button" placeholder={Button.Button} style={{backgroundColor: Button.background, color: Button.cor, borderRadius: Button.borda, }} value="4"/>
        <input className="botao" type="button" placeholder={Button.Button} style={{backgroundColor: Button.background, color: Button.cor, borderRadius: Button.borda, }} value="5"/>

      </div>
    
    </>
    

    
  )
  
}

export default Button;