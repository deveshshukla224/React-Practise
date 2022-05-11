import React from 'react';
import logo2 from '../images/reactjs-icon 2.png'
function Content(){
    return(
      <div className="content-parent-div">
         <h1>Fun Facts About React</h1>
            <ul>
              <li> Was first released in 2013 </li>
              <li> Was originally created by Jordan Walke</li>
              <li> Has well over 100K stars on GitHub </li>
              <li> Is maintained by Facebook </li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
          <img src={logo2} alt='logo2' id='logo2'/>
      </div>
    )
  }

export default Content;