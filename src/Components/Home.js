import MainPage from './MainPage';
import ContactForm from './ContactForm';
import Map from './Map'
import Services from './Services';


function Home(){

    return(
        <div>
            <MainPage/>
            <Services/>
            <ContactForm/>
            <Map/>
        </div>
    )
}

export default Home