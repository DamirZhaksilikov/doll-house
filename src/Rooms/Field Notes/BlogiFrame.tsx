import "./BlogiFrame.scss";
import React from 'react';


type BlogiFrameProps = {
    src: string
};

export class BlogiFrame extends React.Component<BlogiFrameProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <iframe src={this.props.src} id="blog-iframe"/>    
    }

}

