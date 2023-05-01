import styles from "./Mapa.module.css";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ViewMap from "../../components/ViewMap/ViewMap";
import { GeoJsonObject } from "geojson";

export const geoJsonData: GeoJSON.FeatureCollection<any> = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            "id": 1
        },
        "geometry": {
          "coordinates": [
            [
              [ -45.927920637028535, -23.23323990692529 ],
              [ -45.92876539553771, -23.234227904186838 ],
              [ -45.929531677872234, -23.23544977693352 ],
              [ -45.93105596692615, -23.23675567893322 ],
              [ -45.931544256875014, -23.23763453654705 ],
              [ -45.9299882705273, -23.23941677836406 ],
              [ -45.92468400597653, -23.23430291108113 ],
              [ -45.92617310239211, -23.234020198036376 ],
              [ -45.927920637028535, -23.23323990692529 ]
            ]
          ],
          "type": "Polygon"
        }
      },
      {
        "type": "Feature",
        "properties": {
            "id": 2
        },
        "geometry": {
          "coordinates": [
            [
              [ -45.9130456553269, -23.174606881073316 ],
              [ -45.913710688967996, -23.177096015240195 ],
              [ -45.91546827787812, -23.18032745368761 ],
              [ -45.91238062168512, -23.18229247945247 ],
              [ -45.91000550153703, -23.1819431436475 ],
              [ -45.90862793185099, -23.185611124103858 ],
              [ -45.91010050634338, -23.192815792905677 ],
              [ -45.90862793185099, -23.195173600219505 ],
              [ -45.90364017954025, -23.191505881990636 ],
              [ -45.898842436840965, -23.19163687365949 ],
              [ -45.89124205236698, -23.189235339343753 ],
              [ -45.88867692260686, -23.183296814810177 ],
              [ -45.890814530740386, -23.179061088458795 ],
              [ -45.89304714367961, -23.17630997787218 ],
              [ -45.8954222638277, -23.174563211640034 ],
              [ -45.907155357359215, -23.175305590074785 ],
              [ -45.9130456553269, -23.174606881073316 ]
            ] ],
          "type": "Polygon"
        }
      }
    ]
}

function Mapa () {
    const { id } = useParams();

    const data: GeoJsonObject = geoJsonData.features.find((feature) => feature.properties!.id === +id!)!;

    return (
        <main className={ styles.page }>
            <Breadcrumb head={ 'Mapas' }  pages={[ 'Visualização' ]}/>
            <h1 className={ styles.title }>Visualização de Mapa</h1>
            <section className={ styles.map }>
                {
                    id &&
                    <ViewMap
                        mapId={ +id }
                        geoJsonData={ data }
                        center={[ -23.2114, -45.8948 ]}
                    />
                }
            </section>
        </main>
    );
}

export default Mapa;