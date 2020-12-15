import "./BlogiFrame.scss";
import React from 'react';


type BlogiFrameProps = {
    src: string
};

export class BlogiFrame extends React.Component<BlogiFrameProps, {}> {
    render() {
        return <iframe src={this.props.src} id="blog-iframe" title="feed"/>    
    }

}

