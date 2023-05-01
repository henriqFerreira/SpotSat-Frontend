import { Component } from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaCircleNotch, FaDrawPolygon } from "react-icons/fa";
import styles from "./SidebarItem.module.css";
import { IconType } from "react-icons/lib";

interface Properties extends LinkProps {
    isShown: boolean;
    placeholder: string;
    icon: string;
}

class SidebarItem extends Component<Properties> {

    static iconsMap () : { [key: string]: IconType } {
        return {
            polygon: FaDrawPolygon,
        }
    }

    render () {
        const { isShown, placeholder, to, icon  } = this.props;
        const Icon = SidebarItem.iconsMap()[icon] || FaCircleNotch

        return (
            <Link to={ to } className={` ${ styles.item } ${ isShown ? styles.expanded : styles.collapsed } `}>
                <Icon className={ styles.icon } />
                { isShown ? placeholder : '' }
            </Link>
        )
    }
}

export default SidebarItem;