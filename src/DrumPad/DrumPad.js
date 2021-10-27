import React from 'react';
import './DrumPad.css';


        const DrumPad=({play ,sound, DrumPadID, DrumPadClass ,audioSrc,keyp})=>{
            return (
                <div  onClick={play} id={sound} className="drum-pad"  keyp={keyp}>
                    {DrumPadID}
                    <audio id={DrumPadID} className={DrumPadClass} src={audioSrc}></audio>
                </div>
            );
        }
      
    
export default DrumPad;