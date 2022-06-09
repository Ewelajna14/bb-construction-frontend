
import '../App.css';
import {Routes, Route} from "react-router-dom"
import NavBar from './NavBar';
import MainPage from './MainPage';
import ContactForm from './ContactForm';
import Map from './Map'
import Services from './Services';


function App() {
  return (
    <div >
      <NavBar/>
      <MainPage/>
      <Services/>
      <ContactForm/>
      <Map/>
    </div>
  ); 
}

export default App;
