import './ObjectModal.scss';
import React from 'react';
import Modal from 'react-modal';

type ObjectModalProps = {
    onClose: any;
};

export class ObjectModal extends React.Component<ObjectModalProps, {}> {  
    render() {  
        var modal = <Modal
            className={"objectModal"}
            isOpen={true}
            contentLabel="Modal with image"
            appElement={document.getElementById('app')}>
            <div id="modal-body">
                <img id="map" src={`${process.env.PUBLIC_URL}/designs/Screen Mocks/Entry/Entry_Map.png`} />
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

