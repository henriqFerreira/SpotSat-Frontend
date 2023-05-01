import { Component } from "react";
import InputGroup from "../InputGroup/InputGroup";
import styles from "./LoginForm.module.css";
import SessionParameters from "../../interfaces/SessionParameters";

interface Properties {

}

interface State {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    error: string;
}

class LoginForm extends Component<Properties, State> {
    state: State = {
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        error: ""
    }

    createSession (email: string) {
        const session: SessionParameters = {
            name: 'Admin',
            email: email
        };

        window.localStorage.setItem("session", JSON.stringify(session));
    }

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            this.setState(() => ({ emailError: "Campo obrigatório!" }));
        }

        this.setState(() => ({ email: event.target.value }));
    }

    handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            this.setState(() => ({ passwordError: "Campo obrigatório!" }));
        }

        this.setState(() => ({ password: event.target.value }));
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = this.state;

        if (email === '') {
            this.setState(() => ({ emailError: "Campo obrigatório!" }));
            return;
        }

        if (password === '') {
            this.setState(() => ({ passwordError: "Campo obrigatório!" }));
            return;
        }
        
        if (email !== 'admin@gmail.com' || password !== 'admin123') {
            this.setState(() => ({ emailError: "" }));
            this.setState(() => ({ passwordError: "" }));
            this.setState(() => ({ error: "Credenciais incorretas" }));
            return;
        }

        this.createSession(email);

        window.open('/mapas', "_self");
    }

    render () {
        return (
            <form className={ styles.loginForm } onSubmit={ this.handleSubmit }>
                <h2>Seja bem-vindo!</h2>
                <p>Por favor, insira suas credenciais.</p>
                { this.state.error && <span className={ styles.error }>{ this.state.error }</span> }
                <InputGroup
                    label="Email"
                    placeholder="loremipsum@exemplo.com"
                    type="text"
                    error={ this.state.emailError }
                    value={ this.state.email }
                    onChange={ this.handleEmailChange }
                />
                <InputGroup
                    label="Senha"
                    placeholder="••••••••••"
                    type="password"
                    error={ this.state.passwordError }
                    value={ this.state.password }
                    onChange={ this.handlePasswordChange }
                />
                <button className={ styles.submitButton }>Entrar</button>
            </form>
        )
    }
}

export default LoginForm;