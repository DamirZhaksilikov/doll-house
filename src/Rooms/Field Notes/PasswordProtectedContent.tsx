import "./PasswordProtectedContent.scss";
import React from 'react';
import { FieldNotesData } from "./FieldNotesData";
//import { FieldNotesData } from "./FieldNotesData";

type PasswordProtectedContentProps = {
    coverImagesrc: string;
};

type PasswordProtectedContentState = {
    isPassEntered: boolean;
    passwordInput: string;
};

export class PasswordProtectedContent extends React.Component<PasswordProtectedContentProps, PasswordProtectedContentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isPassEntered: false,
            passwordInput: ""
        };
    }

    render() {
        return <div id="password-prompt-content">
            {this.getCoverPhoto()}
            {this.getPromptContainer()}
        </div>
    }

    private getCoverPhoto() {
        return <div id="password-prompt-cover-image-container">
            <img id="password-prompt-cover-image" src={this.props.coverImagesrc} />
        </div>
    }

    private getPromptContainer() {
        return <form id="password-prompt-container" onSubmit={this.handleSubmitPrompt} autoComplete="off">
            <div id="password-prompt-blurb">
                {FieldNotesData.SecretsBlurb}
            </div>
            <div id="password-prompt-middle">
                <div id="password-prompt-question">
                    {FieldNotesData.Secret1Question}
                </div>
                <input type="text"
                    id="password-input"
                    placeholder="enter answer"
                    value={this.state.passwordInput || ""}
                    onChange={this.onPasswordChange.bind(this)}
                />
                <button id="password-prompt-hint" >
                    {FieldNotesData.Secret1HintText}
                </button>
            </div>
            <button onClick={this.handleSubmitPrompt.bind(this)}
                id="password-prompt-submit"
                disabled={!this.state.passwordInput}
                className={!!this.state.passwordInput ? 'submit-password-enabled' : ''}>
                {FieldNotesData.SubmitText}
            </button>
        </form>
    }

    private onPasswordChange(event) {
        this.setState({ passwordInput: event.target.value });
    }

    private handleSubmitPrompt() {
        const newAlias = this.state.passwordInput;

        this.setState({
            passwordInput: "",
        });
    }
}

