import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap() {

	return <MapContainer center={[53, -1.1]} zoom={6} scrollWheelZoom={false} className="h-[400px] w-[60vw]">
		<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		<Marker position={[52.98842695953846, -2.1755381031952403]}>
			<Popup>
				I grew up in North Staffordshire. Despite not living there since 2018, it is still the place I call home and the reason I support Stoke City FC.
			</Popup>
		</Marker>
		<Marker position={[51.51832527010092, -0.17626420310865168]}>
			<Popup>
				I currently live in London and work for Alpha Group in Paddington. I am new to London, the city still feels big and very busy, but I&apos;m slowly finding my feet.
			</Popup>
		</Marker>
		<Marker position={[53.9469282947864, -1.0308133715141805]}>
			<Popup>
				I studied Computer Science at the univesity of York, graduating with a first class Masters. The city is beautiful and hold a special place in my heart.
			</Popup>
		</Marker>
		
		
	</MapContainer>
}