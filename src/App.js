import React, { useEffect, useState } from 'react';
import './App.css';
import DrumPad from './DrumPad/DrumPad.js'
import Display from './Display/Display.js'
import bdrum from './sounds/Bdrum.mp3';
import cowbell from './sounds/cowbell.mp3';
import crush1 from './sounds/crush-1.mp3';
import crush2 from './sounds/crush-2.mp3';
import highHatClose from './sounds/High-hat-close.mp3';
import highHatOpen from './sounds/High-hat-open.mp3';
import snare from './sounds/snare.mp3';
import tom1 from './sounds/Tom-1.mp3';
import tom2 from './sounds/Tom-2.mp3';



 const App=()=>{
    const [currentSound , setsound] = useState("");


   const play=(e, drumpad)=> {
    
        switch (e.type) { 
            
            case 'click':
                e.target.lastChild.pause();        
                e.target.lastChild.play();
                setsound(e.target.id);
            break;
            case 'keydown':
                
                drumpad.lastChild.pause();     
                drumpad.lastChild.play().catch(error => {
                    console.log(error) 
                });
                setsound(drumpad.id);
            break;
             default:
                 break;
        }    
      }
   
      useEffect(() => {
        let keypads=[];
         keypads = document.querySelectorAll('.drum-pad');
        document.addEventListener('keydown', (e) => {
           
            [...keypads].map( keypad => {
                
                if (e.key.toUpperCase() ===  keypad.textContent) {
                   
                    play( e,keypad)
                }                   
            }        
            );       
        });
    })
   
     

  
        return (
            <div  className="drum-machine">
                      
                       <h1>Drum  Set  </h1>  
                      
          <Display sound={currentSound}/>      
                <div  className="drum-pads">
                    <DrumPad play={play} sound="crush-1" DrumPadID="Q" DrumPadClass="clip" audioSrc={crush1} />
                    <DrumPad play={play} sound="crush-2" DrumPadID="W" DrumPadClass="clip" audioSrc={crush2} />
                    <DrumPad play={play} sound="cowbell" DrumPadID="E" DrumPadClass="clip" audioSrc={cowbell} />
                </div >
                <div  className="drum-pads">
                    <DrumPad play={play} sound="Bdrum" DrumPadID="A" DrumPadClass="clip" audioSrc={bdrum}/>
                    <DrumPad play={play} sound="High-hat-close" DrumPadID="S" DrumPadClass="clip" audioSrc={highHatClose}/>
                    <DrumPad play={play} sound="High-hat-open" DrumPadID="D" DrumPadClass="clip" audioSrc={highHatOpen}/>
                </div >
                <div className="drum-pads">
                    <DrumPad play={play} sound="snare" DrumPadID="Z" DrumPadClass="clip" audioSrc={snare}/>
                    <DrumPad play={play} sound="Tom-1" DrumPadID="X" DrumPadClass="clip" audioSrc={tom1}/>
                    <DrumPad play={play} sound="Tom-2" DrumPadID="C" DrumPadClass="clip" audioSrc={tom2}/>
                </div>
            </div>
        );
    }


export default App;