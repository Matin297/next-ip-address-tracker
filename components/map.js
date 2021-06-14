import { useRef, useEffect } from 'react'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { URL, ATTRIBUTE } from '../utils/mapbox';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
// ICONS
const MarkerSVG = '/images/icon-location.svg';

const markerIcon = new L.Icon({
    iconUrl: MarkerSVG,
    iconRetinaUrl: MarkerSVG,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75)
});

export default function Map({ pos }) {
    const mapRef = useRef();

    useEffect(() => {
        if (mapRef.current)
            mapRef.current.flyTo(pos);
    }, [pos]);

    return (
        <MapContainer
            center={pos}
            zoom={14}
            whenCreated={map => mapRef.current = map}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution={ATTRIBUTE}
                url={URL}
            />
            <Marker
                position={pos}
                icon={markerIcon}
            />
        </MapContainer>
    )
}