
import React from 'react';

import './Form.css'
function Form(form) {

  return (
    <> 
    <section className="All-form">
    
      <div className="form" >
        <input type="text" placeholder={form.dados} className="texto"/>
      </div>
      
    </section>
    </>
    

    
  )
  
}

export default Form;
