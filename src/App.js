
import React, { useState } from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme, Globalstyles } from './comps/theme';
// import 'Photograph_Signature.ttf';
//import { GlobalStyles } from './comps/navbar.js';

const StyledApp = styled.div``;
 function App() {
  const [theme, setTheme] = useState('darkTheme');

  const themeToggler = () => { 
    theme === "lightTheme" ? setTheme("darkTheme"):setTheme("lightTheme");
  }
  return (
      // <div className="container">
      //     <Navbar />
      //</div>
      <ThemeProvider theme = {theme === "lightTheme"? lightTheme:darkTheme}>
        <Globalstyles/>
        <StyledApp>
        <div className="all">
              <div className="background">
            
                      <div className = "nav">
                          <span className="blog">Home</span>
                          <span className="service">service</span>
                          <span className="feature">feature</span>
                      </div>
              
                  <div class ="slogan">
                      Be Creative Stay Curious
                  </div>   
                  
                  <div class="lamp">
                      Lampros
                  </div>
                  <button onClick={() => themeToggler()}> Theme </button>
                  <div class="rainbow">
                  </div>
                  <div className='Our'>
                    We'll make your website for free because we are passionate about devloping new pages.
                    I have you liked this one.
                    it one of the best work done by me.
                  </div>
                  <div className='office'>
                  </div>
                  <div class = "plan">
                    
                  </div>
                  <div className='plan1'>We are a team of experts who love growth. 
                    Business innovation is our passion, and we want to help pu sh your company to the next level.
                    We’ll be in touch with you after signing up to discuss what you’d like to see on your new website. After you pitch us your vision, we'll handle the rest.</div>
                  <div className='link'>
                  <i class="fa fa-instagram" aria-hidden="true" ></i>
                  <i class="fa fa-envelope"></i>
                  </div>
                  

              </div>
              
          </div>
          </StyledApp>
        </ThemeProvider>
  );
}
export default App;