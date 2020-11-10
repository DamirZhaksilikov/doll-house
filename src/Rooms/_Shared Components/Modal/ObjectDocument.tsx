import './ObjectDocument.scss';
import React from 'react';

export interface ObjectDocumentProps {
    baseFileSource: string;
    numPages: number;
}

export class ObjectDocument extends React.Component<ObjectDocumentProps, {}> {
    render() {
        return <div className="modal-document">
            {
                Array.from(
                    new Array(this.props.numPages),
                    (el, index) => (
                        <img className="modal-document-page" src={`${this.props.baseFileSource}_${index+1}.png`}/>
                    ),
                )
            }
        </div>
    }

}




