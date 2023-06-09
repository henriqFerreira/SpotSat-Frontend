import { Component } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaSignOutAlt } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import SidebarItem from "../SidebarItem/SidebarItem";
import SessionParameters from "../../interfaces/SessionParameters";

interface State {
    Shown: boolean
}

class Sidebar extends Component<{}, State> {
    state: State = {
        Shown: window.innerWidth < 1024 ? false : true
    }

    logOut () : void {
        window.localStorage.removeItem("session");
        window.open("/", "_self");
    }

    toggle (): void {
        this.setState(() => ({ Shown: !this.state.Shown }));
    }

    render () {
        const session: SessionParameters = JSON.parse(window.localStorage.getItem("session")!);

        return (
            <aside className={`${ styles.aside } ${ this.state.Shown ? styles.expanded : styles.collapsed }`}>
                <button className={ styles.toggleAside } onClick={ () => this.toggle() }>
                    { this.state.Shown ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft /> }
                </button>
                <section className={ styles.logo }>
                    <img src="/assets/spotsat_logo_2.jpg" alt="SpotSat Logo" />
                </section>
                <section className={ styles.info }>
                    <p>{ session.name }</p>
                    <p>{ session.email }</p>
                </section>
                <section className={ styles.items }>
                    <div className={ styles.area }>
                        <p>Mapas</p>
                        <SidebarItem to="/mapas/" isShown={ this.state.Shown } placeholder="Localização de polígonos" icon="polygon" />
                    </div>
                </section>
                <button className={ styles.logOut } onClick={ () => this.logOut() }>
                    <FaSignOutAlt />
                    <span>Sair</span>
                </button>
            </aside>
        )
    }
}

export default Sidebar;