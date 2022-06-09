import OneService from "./OneService"
import data from "../data/db.json"
import './Services.css'


function Services(){

    const services = data.services

    const servicesArray = services.map((service)=>{
      return(
       <OneService service={service} key={service.id}/>
      )
    })

    return(
       <div className="services-container">
           {servicesArray}
        </div>
    )
}

export default Services