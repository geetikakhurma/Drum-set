import React from 'react';
import './Display.css';


   const Display=({sound})=>{
        return (
             <div className="display">
                    <p> 
                        {sound}
                    </p>
            </div>
        );
    }

    export default Display;