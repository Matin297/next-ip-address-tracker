import { useRef, useEffect } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { URL, ATTRIBUTE } from '../utils/mapbox';
import { markerIcon } from '../utils/marker';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

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