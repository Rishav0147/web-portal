import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Footer } from './component/footer/Footer';
import { Footerdown } from './component/footerdown/Footerdown';
import { Ad } from './component/ad/Ad';
import { Testinomial } from './component/testinomial/Testinomial'
import { End } from './component/end/End'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
function App() {
  return (
    <>
    <Router>
   <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    
    
    </Routes>
    <Footer/>
    <Footerdown/>
    <Ad/>
    <Testinomial/>
    <End/>
    </Router>
    
    
  
    
 
    

   </>
  );
}

export default App;
