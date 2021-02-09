import './ObjectModal.scss';
import React from 'react';
import Modal from 'react-modal';

type ObjectModalProps = {
    onClose: any;
    content?: any;
    overflowHidden?: boolean;
    extendHeight?: boolean;
};

export class ObjectModal extends React.Component<ObjectModalProps, {}> {  
    render() {  
        var modal = <Modal
            className={this.props.extendHeight ? "objectModalExtended" : "objectModal"}
            isOpen={true}
            contentLabel="Modal with image"
            appElement={document.getElementById('app')}>    
            
            <div id={this.props.overflowHidden ? "modal-body-no-scroll" : "modal-body"}>
                {this.props.content}
            </div>
            
            <button id="modal-close-button" onClick={this.closeObjectModal.bind(this)}>
                <div id="modal-close-button-text">
                    {"Close"}
                </div>
            </button>        
        </Modal>

        return modal;
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

    private closeObjectModal = () => {
        this.props.onClose();
    }
}

