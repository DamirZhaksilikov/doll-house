import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { EntryData } from './EntryData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';

export class Entry extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
  }

  render() {
    return <div className="content"> 
      {this.getRoomIllustration()}
      {this.getDialogue()}
      <ModalRoute path='/entry/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
    </div>
  }

  private initializeMap(): ImageMapper {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    this.state = {
      ...this.state,
      imageMap: <ImageMapper src={EntryData.IllustrationSource}
        map={EntryData.MapCoordinates}
        width={imageWidth}
        imgWidth={this.ORIGINAL_IMAGE_WIDTH}
        onClick={area => this.onClick(area)}
        strokeColor={"rgba(0, 0, 0, 0.0)"} />
    };
  }

  private getDialogue() {
    return <div className="dialogue">
      <div className="row-one">     
        <div className="help-box">
          <div className="icons">
            <img src="/designs/Icons/Map.png" className="map-icon"/>
            <img src="/designs/Icons/Site Info.png" className="site-info-icon"/>
          </div>
        </div>
        <div className="room-title">
          Entry Room    
        </div>
      </div>

      <div className="row-two">
        <div className="room-info-container">
          <div className="room-info">
            This room is a collection of things that move me. Curated by me and my community. Select an object to get started.
          </div>
        </div>
      </div>

      <div className="row-three">
        <div className="links-container">
          <div className="links">
            This room is a collection of things that move me. Curated by me and my community. Select an object to get started.
          </div>
        </div>
      </div>
    </div>
  }
}

