import { Component } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Auth.module.css";

class Auth extends Component {
    render () {
        return (
            <main className={ styles.layoutAuth }>
                <section className={ styles.illustration }></section>
                <section className={ styles.content }>
                    <img className={ styles.logo } src="/assets/spotsat_logo_2.jpg" alt="SpotSat" />
                    <Outlet />
                </section>
            </main>
        )
    }
}

export default Auth;