import './ContactForm.scss';
import React from 'react';
import { MailRoomData } from "./MailRoomData";

interface ContactFormState {
    isHoveringOnLeftBlock: boolean;
    isHoveringOnRightBlock: boolean;
}

export class ContactForm extends React.Component<{}, ContactFormState> {
    constructor(props) {
        super(props);
        this.state = {
            isHoveringOnLeftBlock: false,
            isHoveringOnRightBlock: false
        }
    }

    render() {
        return <div id="contact-type-select-container">
            <div
                id="write-me-option-container"
                className="contact-option"
                onMouseEnter={this.onBlockEnter.bind(this, true)}
                onMouseLeave={this.onBlockLeave.bind(this, true)}>
                {!this.state.isHoveringOnLeftBlock &&
                    <div className="anonymous-option-container"><img
                        src={MailRoomData.ContactMeLeftBlockBGSource}
                        className="contact-option-image" alt="cover" />
                        <div className="contact-option-text" id="left-option-text">
                            {"mail me"}
                        </div>
                    </div>}
            </div>
            <div id="anonymous-option"
                className="contact-option"
                onMouseEnter={this.onBlockEnter.bind(this, false)}
                onMouseLeave={this.onBlockLeave.bind(this, false)}>
                {!this.state.isHoveringOnRightBlock &&
                    <div className="anonymous-option-container">
                        <img
                            src={MailRoomData.ContactMeRightBlockBGSource}
                            className="contact-option-image" alt="cover" />
                        <div className="contact-option-text" id="right-option-text">
                            {"or, leave a note anonymously"}
                        </div>
                    </div>}
            </div>

        </div>
    }

    private onBlockEnter(isLeft: boolean) {
        if (isLeft) {
            this.setState({ isHoveringOnLeftBlock: true });
        } else {
            this.setState({ isHoveringOnRightBlock: true });
        }
    }

    private onBlockLeave(isLeft: boolean) {
        if (isLeft) {
            this.setState({ isHoveringOnLeftBlock: false });
        } else {
            this.setState({ isHoveringOnRightBlock: false });
        }
    }
}

