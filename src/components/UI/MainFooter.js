import React from 'react'
import './MainFooter.css';


const MainFooter = (props)=>{



    return(
        <div className="MainFooter">
           
                
           
            

            <ul style={{textAlign:"left"}}>
                <li> <kbd>Shift + C </kbd> for clearing</li>
                <li><kbd>Enter / = </kbd> for Equal Operation</li>
                <li><kbd>Backspace </kbd> for Deleting </li>
            </ul>
            

        </div>
    )
}

export default MainFooter;