import OneService from "./OneService"
import data from "../data/db.json"

function Services(){

    const services = data.services

    const servicesArray = services.map((service)=>{
      return(
       <OneService service={service} key={service.id}/>
      )
    })

    return(
        <div>
           {servicesArray}
        </div>
    )
}

export default Services