import { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import styles from "./Auth.module.css";

class Auth extends Component {
    render () {
        const session = window.localStorage.getItem("session");

        if (session !== null) {
            return (
                <Navigate to={ '/mapas' } />
            );
        } else {            
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
}

export default Auth;