import { Component } from "react";
import styles from "./Breadcrumb.module.css";
import { FaAngleRight } from "react-icons/fa";

interface Properties {
    head: string;
    pages: string[];
}

class Breadcrumb extends Component<Properties> {
    render () {
        const { head, pages } =  this.props;
        return (
            <section className={ styles.breadcrumb }>
                <span className={ styles.head }>{ head }</span>
                {
                    pages.map((page, index) => (
                        <div key={ index } className={ styles.itemGroup }>
                            <FaAngleRight />
                            <span className={ styles.item }>
                                { page }
                            </span>
                        </div>
                    ))
                }
            </section>
        );
    }
}

export default Breadcrumb;