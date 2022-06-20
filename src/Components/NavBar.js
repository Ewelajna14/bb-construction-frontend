import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Grid} from '@mui/material'
import './NavBar.css'


function NavBar(){

    const [click, setClick] = useState(false)

    const showList = ()=> setClick(!click)

    return(
        <>
             <Grid container spacing = {2}>

             <Grid item xs={12}>
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
             </Grid>

             <Grid item xs={12}>
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
                       <Link to ="/services" className='link-item-services'>
                           Services
                           <div className='services-dropdown-content'>
                               <Link to ="/">Plumbing</Link>
                               <Link to ="/">Electrician</Link>
                               <Link to ="/">HVAC</Link>
                               <Link to ="/"> Remodeling</Link>
                           </div>
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
               </Grid>
               </Grid>
        </>
    )
}

export default NavBar