
import '../App.css';
import Home from './Home'
import NavBar from './NavBar';
import Footer from './Footer';
import {Routes, Route} from "react-router-dom"
import MainPage from './MainPage';
import ContactForm from './ContactForm';
import Map from './Map'
import Services from './Services';

function App() {

  return (
    <div>
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

//   <Route exact path='contact' element ={<ContactForm/>}/>