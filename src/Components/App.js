
import '../App.css';
import Home from './Home'
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import Footer from './Footer';
import {Routes, Route} from "react-router-dom"
import ContactForm from './ContactForm';
import Plumbing_page from './pages/plumbing';
import Electrician_page from './pages/electrician';
import Hvac_page from './pages/hvac';
import Remodeling_page from './pages/remodeling';



function App() {

  return (
    <div>
      <NavBar2/>
      <Routes>
       <Route exact path='/' element = {<Home/>} />
       <Route exact path='contact' element ={<ContactForm/>}/>
       <Route exact path='plumbing' element ={<Plumbing_page/>}/>
       <Route exact path='electrician' element ={<Electrician_page/>}/>
       <Route exact path='hvac' element ={<Hvac_page/>}/>
       <Route exact path='remodeling' element ={<Remodeling_page/>}/>
       </Routes>
      <Footer/>
    </div>
  ); 
}

export default App;

