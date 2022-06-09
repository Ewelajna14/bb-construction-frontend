import OneService from "./OneService"
import {useEffect, useState} from 'react'

function Services(){

    const [services, setServices] = useState([])

    useEffect(()=>{
    fetch("http://localhost:4000/services")
    .then((r)=>r.json())
    .then((data)=>setServices(data))
    }, [])

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