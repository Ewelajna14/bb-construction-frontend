import './NavBar2.css'
import {useState} from 'react'

function NavBar2(){

    const [click, setClick] = useState(false)

return(
   <>
   <nav>
    <a href="/">LOGO</a>
    <div>
        <ul id="navbar" className={click? "#navbar active": "#navbar"} onClick={()=>setClick(!click)}>
            <li><a className='active'
            href="/">Home</a></li>
            <li><a 
            href="/contact">Contact</a></li>
            <li><a 
            href="/">Services</a></li>
        </ul>
    </div>

    <div id="mobile">
       <i id="bar" className={click? "fas fa-times":" fas fa-bars" } onClick={()=>setClick(!click)}></i>
    </div>
   </nav>
   </>
)
}

export default NavBar2