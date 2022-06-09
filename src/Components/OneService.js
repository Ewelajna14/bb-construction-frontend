import {Grid} from '@mui/material'
import "./OneService.css"

function OneService({service}){
    return(
            <Grid item xs={3}>
             <div className='service-wrapper'>
             <h3>{service.title}</h3>
             <img src={service.img} width="400" height="300"/>
             </div>
             </Grid>
    )
}

export default OneService