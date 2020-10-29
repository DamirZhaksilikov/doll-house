import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf'

export interface ObjectDocumentProps {
    documentSource: string;
}

export interface ObjectDocumentState {
    document: any;
}

export class ObjectDocument extends React.Component<ObjectDocumentProps, ObjectDocumentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            document: this.getDocument()
        }

        this.setResizeListener();
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    render() {
        return this.state.document;
    }

    private reloadDocument() {
        var document = this.getDocument();
        this.setState({ document: document })
    };

    private getDocument() {
        return <Document
            class="modal-document"
            file={this.props.documentSource}  >
            <Page
                pageNumber={1}
                width={.7 * window.innerWidth}
            />
        </Document>
    }

    private setResizeListener() {
        window.addEventListener("resize", this.reloadDocument.bind(this));
    }
}




