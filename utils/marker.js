import L from 'leaflet';

const MarkerSVG = '/images/icon-location.svg';

export const markerIcon = new L.Icon({
    iconUrl: MarkerSVG,
    iconRetinaUrl: MarkerSVG,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75)
});