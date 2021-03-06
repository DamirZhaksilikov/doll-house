import "./PasswordProtectedContent.scss";
import React from 'react';
import YouTube from 'react-youtube';

const FailedAttemptPlaceHolder = "not quite, try again."
const SubmitText = "submit";

type PasswordProtectedContentProps = {
    coverImagesrc: string;
    question: string;
    hint: string;
    secretsBlurb: string;
    answerPlaceholder: string;
    audioSrc: string;
};

type PasswordProtectedContentState = {
    isPassEntered: boolean;
    hasAttempted: boolean;
    isMatch: boolean;
    playMedia: boolean;
    passwordInput: string;
    player: any;
};

export class PasswordProtectedContent extends React.Component<PasswordProtectedContentProps, PasswordProtectedContentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isPassEntered: false,
            hasAttempted: false,
            isMatch: false,
            playMedia: false,
            passwordInput: "",
            player: null
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
            <img id="password-prompt-cover-image" src={this.props.coverImagesrc} alt="cover"/>
        </div>
    }

    private getPromptContainer() {
        return <form id="password-prompt-container" onSubmit={this.handleSubmitPrompt} autoComplete="off">
            <div id="password-prompt-blurb">
                {this.props.secretsBlurb}
            </div>
            <div id="password-prompt-middle">
                <div id="password-prompt-question">
                    {this.props.question}
                </div>
                <input type="text"
                    id="password-input"
                    placeholder= {this.state.hasAttempted ? FailedAttemptPlaceHolder : this.props.answerPlaceholder}
                    value={this.state.passwordInput || ""}
                    onChange={this.onPasswordChange.bind(this)}
                />
                <button 
                    id="password-prompt-hint" 
                    type="button" onClick={this.toggleSong.bind(this)} 
                    className={this.state.playMedia ? "password-prompt-hint-playing" : "password-prompt-hint-paused"}>
                    {this.state.playMedia ? "pause" : this.props.hint}
                </button>
            </div>
            <button onClick={this.handleSubmitPrompt.bind(this)}
                id="password-prompt-submit"
                disabled={!this.state.passwordInput}
                className={!!this.state.passwordInput ? 'submit-password-enabled' : ''}>
                {SubmitText}
            </button>
            {this.getYoutubePlayer()}
        </form>
    }

    private toggleSong() {
        const newToggleVal = !this.state.playMedia;

        if(newToggleVal) {
            this.state.player.playVideo();
        } else {
            this.state.player.pauseVideo();
        }
        
        this.setState({ playMedia: newToggleVal });
    }

    private getYoutubePlayer() {
        const opts = {
            height: '0',
            width: '0'
        };

        return <YouTube videoId={this.props.audioSrc} opts={opts} onReady={this._onReady.bind(this)} />
    }

    private _onReady(event) {
        this.setState({player: event.target});
    }

    private onPasswordChange(event) {
        this.setState({ passwordInput: event.target.value });
    }

    private handleSubmitPrompt() {
        this.setState({
            hasAttempted: true,
            passwordInput: "",
        });
    }
}

