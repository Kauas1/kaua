import React from 'react';
import './welcome.css'
function Welcome(props) {
  return (
    <> 
    <article className="welcome-section">
      <h2 className="welcome-titulo" style={{color: props.cor}}>{props.texto}</h2>
      <p className="welcome-texto"  style={{color: props.cor}}>{props.subtexto}
        </p>
    </article>
    </>
  );
}

export default Welcome;
