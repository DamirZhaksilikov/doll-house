import "./PasswordProtectedContent.scss";
import React from 'react';
import { FieldNotesData } from "./FieldNotesData";

type PasswordProtectedContentState = {
    isPassEntered: boolean;
    passwordInput: string;
};

export class PasswordProtectedContent extends React.Component<{}, PasswordProtectedContentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isPassEntered: false,
            passwordInput: ""
        };
    }
    
    render() {
        return <div id="password-prompt-container">
            {this.getPasswordPrompt()}
        </div>
    }

    private getPasswordPrompt() {
        return <div id="password-prompt-container">
            <div id="password-prompt-blurb">
                {FieldNotesData.SecretsBlurb}
            </div>
            <form onSubmit={this.handleSubmitPrompt} id="password-prompt" autoComplete="off">
                <input type="hidden" value="something" />
                <input type="text"
                    id="alias-input"
                    placeholder="alias"
                    value={this.state.passwordInput || ""}
                    onChange={this.onPasswordChange.bind(this)}
                />
                <button onClick={this.handleSubmitPrompt.bind(this)}
                    id="alias-submit"
                    disabled={!this.state.passwordInput}
                    className={!!this.state.passwordInput ? 'submit-password-enabled' : ''}>
                    {""}
                </button>
            </form>
        </div>
    }

    onPasswordChange(event) {
        this.setState({ passwordInput: event.target.value });
    }

    private handleSubmitPrompt() {
        const newAlias = this.state.passwordInput;
    
        this.setState({
          passwordInput: "",
        });
    }
}

