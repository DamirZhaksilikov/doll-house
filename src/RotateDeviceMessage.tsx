import "./RotateDeviceMessage.scss";
import React from 'react';

const RotateMessageLine1 = "hello.";
const RotateMessageLine2 = " Please rotate your device.";

export class RotateDeviceMessage extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div id="message-container">
            <div id="message">
                {RotateMessageLine1}
                <br />
                {RotateMessageLine2}
            </div>
        </div>
    }

}

