import './Footer.css'

function Footer(){
    return(
        <div className="main-footer">
          <div className="container">
             <div className="row">
               {/*Column1 */}
               <div className='col'>
                <h4>BB Construction</h4>
                <hr/>
                <ul className='list-unstyled'>
                   <li>Contractor Chicago Remodeling</li>
                   <li>Plumbing Services</li>
                   <li>Electrician Services</li>
                   <li>Handyman</li>
                </ul>
               </div>
               {/*Column2 */}
               <div className='col'>
               <h4>Contact Us</h4>
               <hr/>
                <ul className='list-unstyled'>
                   <li>Call us</li>
                   <li>773-xxx-xxx</li>
                   <li>email</li>
                   <li>pbogdan</li>
                </ul>
               </div>
               {/*Column3 */}
               <div className='col'>
               <h4>BB Construction</h4>
               <hr/>
                <ul className='list-unstyled'>
                   <li>Chicago</li>
                   <li>Suburbs</li>
                </ul>
               </div>
             </div>
             <hr/>
             <div className='row-bottom'>
              <p className='col-sm'>
                &copy;{new Date().getFullYear()} BBConstruction INC| All right reserved
              </p>
             </div>
          </div>
        </div>
    )
}

export default Footer