import "./Entry.scss";
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { EntryData } from './EntryData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomData } from "../_Shared Components/RoomData";
import { RecreationalRoomData } from "../Recreational Room/RecreationalRoomData";

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
      <div id="column-one">     
        {this.getHelpIcons()}
        {this.getRoomTitle()}
      </div>

      <div id="column-two">
        {this.getRoomInfo(EntryData.EntryRoomInfo, false)}
      </div>

      <div id="column-three">
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
    return <div className="dialogue-container" id="links-container">
      <div id="link-read-note-container">
        <div id="link-read-note">
          {EntryData.EntryRoomLinks.ReadNote}
        </div>
      </div>
    </div>
  }
}

