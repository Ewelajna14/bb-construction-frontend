
import '../App.css';
import {Routes, Route} from "react-router-dom"
import NavBar from './NavBar';
import MainPage from './MainPage';
import ContactForm from './ContactForm';
import Map from './Map'


function App() {
  return (
    <div >
      <NavBar/>
      <MainPage/>
      <ContactForm/>
      <Map/>
    </div>
  ); 
}

export default App;
