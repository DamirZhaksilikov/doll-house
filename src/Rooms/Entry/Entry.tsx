import "./Entry.scss";
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
      <div id="row-one">     
        <div className="dialogue-container" id="icons-container">
          <div id="icons">
            <img src="/designs/Icons/Map.png" className="icon" id="map-icon"/>
            <img src="/designs/Icons/Site Info.png" className="icon" id="site-info-icon"/>
          </div>
        </div>

        <div id="room-title">
          Entry Room    
        </div>
      </div>

      <div id="row-two">
        <div className="dialogue-container" id="room-info-container">
          <div id="room-info">
            This room is a collection of things that move me. Curated by me and my community. Select an object to get started.
          </div>
        </div>
      </div>

      <div id="row-three">
        <div className="dialogue-container" id="links-container">
          <div id="link-read-note-container">
            <div id="link-read-note">
              Read Note
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

