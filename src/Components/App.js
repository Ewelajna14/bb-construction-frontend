
import '../App.css';
import Home from './Home'
import NavBar from './NavBar';
import Footer from './Footer'
import {Routes, Route} from "react-router-dom"

function App() {
   
  return (
    <div >
      <NavBar/>
      <Routes>
       <Route exact path='/' element = {<Home/>} />
       </Routes>
      <Footer/>
    </div>
  ); 
}

export default App;
