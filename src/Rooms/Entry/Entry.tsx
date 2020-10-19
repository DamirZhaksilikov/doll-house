import "./Entry.scss";
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { EntryData } from './EntryData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomObject } from "../_Shared Components/RoomObject";

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
        onClick={area => this.onImageClick(area)}
        strokeColor={"rgba(0, 0, 0, 0.0)"} />
    };
  }

  private getDialogue() {
    return <div className="dialogue">
      <div className="column-one">     
        {this.getHelpIcons()}
        {this.getRoomTitle()}
      </div>

      <div id="column-two-no-button" className="column-two">
        {this.getRoomInfo(EntryData.EntryRoomInfo)}
      </div>

      <div id="column-three-no-button">
        {this.getRoomLinks()}
      </div>
    </div>
  }

  private getRoomTitle() {
    return <div className="room-title" id="entry-room-title">
      {EntryData.EntryRoomTitle}   
    </div>
  }

  private getRoomLinks() {
    return <div className="dialogue-container links-container" id="links-container-no-button">
      <button onClick={this.onClick.bind(this, EntryData.EntryRoomLinks[0])} id="entry-room-link-container">
        <div id="entry-room-link">
          {EntryData.EntryRoomLinks[0].text}
        </div>
      </button>
    </div>
  }

  private onImageClick(object: RoomObject) {
    const match = EntryData.EntryRoomLinks.find(i => i.id === object.name);

    if(!match) {
      throw new Error("Improperly mapped object name.");
    }

    return this.onClick(match);
  }
}

