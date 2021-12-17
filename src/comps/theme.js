import { createGlobalStyle } from 'styled-components';
export const lightTheme = {
    body: "#E2E2E2",
    fontcolor: "#363537",
    
  };
  
export const darkTheme = {
    body: '#363537',
    fontcolor: '#FAFAFA',
    
  };

export const Globalstyles = createGlobalStyle`
      
    body {
        background-color: ${props => props.theme.body};
      } 
`;

   