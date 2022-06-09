
import "./OneService.css"

function OneService({service}){
    return(
           
             <div className='service-wrapper'>
             <h3>{service.title}</h3>
             <img src={service.img} width="400" height="300"/>
             </div>
    )
}

export default OneService