import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     :root {
          --white: #FFFFFF;
          --bg-shade: #006A71; 
          --bg-shade-008965: #008965;
          --bg-shade-004082: #004082;
          --bcx-blue: #344E94;
          --bcx-green: #79BA4E;
          --bg-blue: #013163;
          --bg-gray: #00000099;
          --bg-gray-light: #00000033;
          --bg-blue-dark: #001B374A;
          --bg-white-two: #FFFFFFE6;
          --bg-disabled: #FFFFFF85;
          --bg-shadow: #00000029;
          --bg-shadow-light: #707070;
          --bg-shadow-dark: #00000040;
          --bg-pink: #ba4e8b;
          --bg-purple: #a64d9a;
          --bg-purple-dark: #944db7;


          --regular: 400;
          --light: 300;
          --extraBold: 800;
          --medium: 500;
     }    

     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
     }

     body {
          -webkit-font-smoothing: antialiased;
          display: flex;
          justify-content: center;
     }

     button {
          cursor: pointer;
     }
`;
