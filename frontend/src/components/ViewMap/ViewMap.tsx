import { MapContainerProps } from "react-leaflet";
import { GeoJsonObject } from "geojson";
import styles from "./ViewMap.module.css";
import L, { LatLngExpression } from "leaflet";
import { useEffect } from "react";

interface Properties extends MapContainerProps {
    mapId: number;
    geoJsonData: GeoJsonObject;
    center: LatLngExpression;
}

function ViewMap ({ mapId, geoJsonData, center }: Properties) {
    useEffect(() => {
        const mapa = L.map('map').setView(center, 15);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(mapa);
        
        const polygon = L.geoJSON(geoJsonData).addTo(mapa);
        
        mapa.setView(polygon.getBounds().getCenter(), 15);

        polygon.eachLayer(layer => {
            layer.bindPopup(`
                Id: ${ mapId }
                
            `);
        })
    });

    return (
        <div id="map" className={ styles.mapa } />
    );
}

export default ViewMap;