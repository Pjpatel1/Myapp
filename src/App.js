
//import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme, Globalstyles } from './comps/theme';
// import 'Photograph_Signature.ttf';
//import { GlobalStyles } from './comps/navbar.js';

const StyledApp = styled.div``;
 function App() {
  
  const [theme, setTheme] = useState('lightTheme');
  var d = new Date();
  var currentHour = d.getHours();
  console.log(currentHour);
  useEffect(() => { 
    //theme === "lightTheme" ? setTheme("darkTheme"):setTheme("lightTheme");
  

      if(currentHour >=6  && currentHour <= 15)
      {
        setTheme("lightTheme");
        console.log("hii i am working");
        console.log("codee is uploaded");
      }
      else 
      {
        setTheme("darkThme");
        console.log("hii i am also working");
      }
  });
  // while(1)
  // {
  //   themeToggler();
  //   console.log("i am while");
  //   break
  // }
 // componentDidMount(themeToggler)
  return (
      // <div className="container">
      //     <Navbar />
      //</div>
      <ThemeProvider theme = {theme === "lightTheme"? lightTheme:darkTheme}>
        <Globalstyles/>
        <StyledApp>
        <div className="all">
        <div className="lamp">
                      Clicktos
                  </div>
              <div className="background">
                
            
              
                  <div className ="slogan">
                  Everyone those who thinks innovative they're invited.
                  </div>   
                  
                  <div className='emai'>
                    <input type="email" className='em'/>
                    
                  </div>
                  <div className='butt'>
                    <button>Subscribe</button>
                    </div>
                  
                  <div className="rainbow">
                  </div>
                  
                  <div className='quote'>
                  Reading one line that encapsulates our love for photography and art is powerful<br/> and often reminds us of the importance of documenting moments with our cameras
                  </div>
                  
                  <div className='link'>
                  <i className="fa fa-instagram" aria-hidden="true" ></i>
                  <i className="fa fa-envelope"></i>
                  </div>
                  

              </div>
              
          </div>
          </StyledApp>
        </ThemeProvider>
  );
}
export default App;
