
import React from 'react';
import './Panel.css'
function PanelMessage(panel) {
  return (
    <> 
    <div className="panel-message" style={{color: panel.cor, backgroundColor: panel.background, }}> {panel.texto}
    </div>
    </>
  );
}

export default PanelMessage;
