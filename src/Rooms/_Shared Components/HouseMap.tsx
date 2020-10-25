import React from 'react';

export interface HouseMapProps {
    documentSource: string;
}

export class HouseMap extends React.Component<HouseMapProps, {}> {
    render () {
        return <img 
            id="house-map" 
            src={this.props.documentSource} 
        />
    }
}