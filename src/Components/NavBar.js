import {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'


function NavBar(){

    const [click, setClick] = useState(false)

    const showList = ()=> setClick(!click)

    return(
        <>
         <nav className='navbar'>
             <div className='brand-title'> BB Construction</div>
               <a href ="#" className='toggle-button' onClick={showList}>
                  <span className='bar'></span>
                  <span className='bar'></span>
                  <span className='bar'></span>
               </a>
               <div className={click?'navbar-links-active':'navbar-links'}>
               <ul>
                   <li>
                       <Link to ="/" className='link-item'>
                           Home
                       </Link>
                   </li>
                   <li>
                       <Link to ="/services" className='link-item'>
                           Services
                       </Link>
                   </li>
                   <li>
                       <Link to ="/contact" className='link-item'>
                           Contact
                       </Link>
                   </li>
               </ul>
               </div>

         </nav>
        </>
    )
}

export default NavBar