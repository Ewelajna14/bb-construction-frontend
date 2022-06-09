function OneService({service}){
    return(
        <div>
             <h3>{service.title}</h3>
             <img src={service.img} width="400" height="300"/>
        </div>
    )
}

export default OneService