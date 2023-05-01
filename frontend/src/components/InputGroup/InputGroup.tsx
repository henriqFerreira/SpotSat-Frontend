import { Component } from "react";
import styles from "./InputGroup.module.css";

interface Properties {
    label: string;
    placeholder: string;
    type: string;
    error: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface State {

}

class InputGroup extends Component<Properties, State> {
    render () {
        const { label, placeholder, type, error, value, onChange } = this.props;

        return (
            <label className={ styles.inputGroup }>
                { label }
                <input className={ styles.input } type={ type } placeholder={ placeholder } value={ value } onChange={ onChange } />
                { error && <span className={ styles.error }>{ error }</span> }
            </label>
        )
    }
}

export default InputGroup;