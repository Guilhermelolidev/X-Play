import { Screen } from './components/Screen';
import { GlobalStyle } from './styles/global';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
   const navigate = useNavigate();

   useEffect(() => {
      navigate('/home');
   }, [navigate]);

   return (
      <>
         <GlobalStyle />
         <Screen />
      </>
   );
}

export default App;
