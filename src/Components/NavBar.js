import {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'


function NavBar(){

    const [click, setClick] = useState(false)
   
    const showList = ()=> setClick(!click)
    

    const menuItems = [
        {
            title: "Plumbing",
            path: "/plumbing",
            cName: 'dropdown-link'
        },
        {
            title: "Electrician",
            path: "/electrician",
            cName: 'dropdown-link'
        },
        {
            title: "HVAC",
            path: "/hvac",
            cName: 'dropdown-link'
        },
        {
            title: "Remodeling",
            path: "/remodeling",
            cName: 'dropdown-link'
        }
    ]

    return(
        <>
             <nav className='navbar-top'>
                <div className='navbar-links-top'>
                    <ul>
                        <li className='link-item-top'>Kitchen Remodeling | </li>
                        <li className='link-item-top'>Bathroom Remodeling | </li>
                        <li className='link-item-top'>Basement Remodeling</li>
                    </ul>
                </div> 
                <div className='brand-title-top'> Call today 773-XXX-XXXX</div>
            </nav>
            

             <nav className='navbar'>
             <div className='brand-title'> BB Construction</div>
               <a href ="#" className='toggle-button' onClick={showList}>
                  <span className='bar'></span>
                  <span className='bar'></span>
                  <span className='bar'></span>
               </a>
               <div className={click?'navbar-links-active':'navbar-links'}>
               <ul className='mobile-links'>
                   <li>
                       <Link to ="/" className='link-item' onClick={() => setClick(false)}>
                           Home
                       </Link>
                   </li>
                   <li>
                       <Link to ="/contact" className='link-item' onClick={() => setClick(false)}>
                           Contact
                       </Link>
                   </li>
                   <li>
                   <div class="dropdown">
                            <button  class="dropbtn">Services
                            </button>
                            <div class="dropdown-content">
                                    {menuItems.map((item, index)=>{
                                        return (
                                            <li key={index}>
                                                <Link to={item.path} onClick={() => setClick(false)}>{item.title}</Link>
                                            </li>
                                        )
                                    })}
                            </div>
                    </div>
                   </li> 
               </ul>
               </div>
               </nav>
        </>
    )
}

export default NavBar
