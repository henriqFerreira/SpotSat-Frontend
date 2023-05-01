import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import styles from "./App.module.css";
import Sidebar from '../../components/Sidebar/Sidebar';

class App extends Component {
    render () {
        return (
            <main className={ styles.layoutApp }>
                <Sidebar />
                <Outlet />
            </main>
        )
    }
}

export default App;
