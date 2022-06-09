function OneService({service}){
    return(
        <div>
            <h3>{service.title}</h3>
             <img src={service.img} />
        </div>
    )
}

export default OneService