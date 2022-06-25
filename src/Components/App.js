
import '../App.css';
import Home from './Home'
import NavBar from './NavBar';
import Footer from './Footer';
import ContactForm from './ContactForm';
import {Routes, Route} from "react-router-dom"

function App() {
   
  return (
    <div >
      <NavBar/>
      <Routes>
       <Route exact path='/' element = {<Home/>} />
       <Route exact path='contact' element ={<ContactForm/>}/>
       </Routes>
      <Footer/>
    </div>
  ); 
}

export default App;
