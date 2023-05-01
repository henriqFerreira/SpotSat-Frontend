import { Component } from "react";
import styles from "./LocalizacaoItem.module.css";
import { Link, LinkProps } from "react-router-dom";

interface Properties extends LinkProps {
    title: string;
}

class LocalizacaoItem extends Component<Properties> {
    render () {
        const { to, title } = this.props;

        return (
            <Link to={ to } className={ styles.item }>
                <p className={ styles.title }>{ title }</p>
            </Link>
        );
    }
}

export default LocalizacaoItem;