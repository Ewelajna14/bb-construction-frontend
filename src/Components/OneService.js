import {Link} from 'react-router-dom'
import "./Services.css"

function OneService({service}){
    return(
           
        <Link to="/plumbing" className='service-wrapper'>
            <h3>{service.title}</h3>
        </Link> 
             
    )
}

export default OneService