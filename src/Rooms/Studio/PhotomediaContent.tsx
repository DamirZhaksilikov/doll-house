import "./PhotomediaContent.scss";
import React from 'react';
import { PhotomediaLink } from './StudioData';

type PhotomediaContentProps = {
    links: PhotomediaLink[];
};

export class PhotomediaContent extends React.Component<PhotomediaContentProps, {}> {  
    render() {  
        return <div id="photomedia-container">
            {this.props.links.map(link => (
                <div id ="photomedia-item-slide">
                    <img id="photomedia-item" src={link.link} alt="photomedia"/>      
                </div>      
            ))}
        </div>
    }
}

