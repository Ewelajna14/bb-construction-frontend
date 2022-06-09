import OneService from "./OneService"
import data from "../data/db.json"
import {Grid} from '@mui/material'


function Services(){

    const services = data.services

    const servicesArray = services.map((service)=>{
      return(
       <OneService service={service} key={service.id}/>
      )
    })

    return(
        <Grid container spacing = {2} sx={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
           {servicesArray}
        </Grid>
    )
}

export default Services