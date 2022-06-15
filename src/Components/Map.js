import './Map.css'
import { MapContainer, TileLayer, Polygon} from 'react-leaflet'

function Map(){

    const polyline = [
        [42.28, -87.84],
        [42.27, -87.91],
        [42.24, -88.02],
        [42.18, -88.11],
        [42.11, -88.17]
      ]

      const redOptions = { color: 'red' }
    return(
        <div>
            <MapContainer center={[41.9919, -87.8242]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polygon pathOptions={redOptions} positions={polyline} />
            </MapContainer>

        </div>
    )
}

export default Map