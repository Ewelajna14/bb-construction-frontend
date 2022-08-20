
import '../App.css';
import Home from './Home'
import NavBar from './NavBar';
import Footer from './Footer';
import {Routes, Route} from "react-router-dom"
import ContactForm from './ContactForm';
import Plumbing_page from './pages/plumbing';



function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
       <Route exact path='/' element = {<Home/>} />
       <Route exact path='contact' element ={<ContactForm/>}/>
       <Route exact path='plumbing' element ={<Plumbing_page/>}/>
       </Routes>
      <Footer/>
    </div>
  ); 
}

export default App;

