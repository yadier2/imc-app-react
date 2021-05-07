import CalculadorApp from "./components/calculador/CalculadorApp";
import Footer from "./containers/Footer";
import { Header } from "./containers/Header";
import Main from "./containers/Main";
import Copyrght from "./pages/Copyrght";
import SocialMedia from "./pages/SocialMedia";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
  
function App() {
  return (
    <Container>
    <Header title= 'Calculo de Indie de Masa Corporal'/>
    <Main>
       <CalculadorApp />
    </Main>
   <Footer>
     <SocialMedia/>
     <Copyrght/>
   </Footer>
 
    
    </Container>
  );
}

export default App;
