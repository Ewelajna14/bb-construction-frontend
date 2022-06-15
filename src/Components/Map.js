import './Map.css'
import { MapContainer, TileLayer, Polygon} from 'react-leaflet'

function Map(){

    const polyline = [
        [42.28, -87.84],
        [42.27, -87.91],
        [42.24, -88.02],
        [42.18, -88.11],
        [42.11, -88.17],
        [42.04, -88.20],
        [41.90, -88.13],
        [41.80, -87.99],
        [41.82, -87.78],
        [41.98, -87.65],
        [42.064, -87.68],
        [42.18, -87.78]
      ]

      const redOptions = { color: 'red' }
    return(
        <div>
            <MapContainer center={[42.0266, -87.8683]} zoom={10} scrollWheelZoom={false}>
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