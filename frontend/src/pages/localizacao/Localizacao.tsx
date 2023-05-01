import { Component } from "react";
import styles from "./Localizacao.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import LocalizacaoItem from "../../components/LocalizacaoItem/LocalizacaoItem";

class Localizacao extends Component {
    render () {
        return (
            <main className={ styles.page }>
                <Breadcrumb head={ 'Mapas' }  pages={[ 'Localização de Polígonos' ]}/>
                <h1 className={ styles.title }>Localização de Polígonos</h1>
                <section className={ styles.maps }>
                    <LocalizacaoItem to={ 'mapa/1' } title={ "Mapa 1" } />
                    <LocalizacaoItem to={ 'mapa/2' } title={ "Mapa 2" } />
                </section>
            </main>
        )
    }
}

export default Localizacao;