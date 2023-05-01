import { Component } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import styles from "./App.module.css";
import Sidebar from '../../components/Sidebar/Sidebar';

class App extends Component {
    render () {
        const session = window.localStorage.getItem("session");

        if (session === null) {
            return (
                <Navigate to={ '/' } />
            );
        } else {
            return (
                <main className={ styles.layoutApp }>
                    <Sidebar />
                    <Outlet />
                </main>
            )
        }

    }
}

export default App;
