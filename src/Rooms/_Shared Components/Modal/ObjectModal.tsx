import './ObjectModal.scss';
import React from 'react';
import Modal from 'react-modal';

type ObjectModalProps = {
    onClose: any;
    content?: any;
};

export class ObjectModal extends React.Component<ObjectModalProps, {}> {  
    render() {  
        var modal = <Modal
            className={"objectModal"}
            isOpen={true}
            contentLabel="Modal with image"
            appElement={document.getElementById('app')}>
                  
            <div id="modal-body">
                {this.props.content}
            </div>        
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

