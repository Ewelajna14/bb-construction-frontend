import './Map.css'
import { MapContainer, TileLayer} from 'react-leaflet'

function Map(){
    return(
        <div>
            <MapContainer center={[41.9919, -87.8242]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>

        </div>
    )
}

export default Map