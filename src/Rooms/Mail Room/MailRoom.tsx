import './MailRoom.scss';
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { MailRoomData } from './MailRoomData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomObject } from '../_Shared Components/RoomObject';

export class MailRoom extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
  }

  render() {
    return <div className="content">
      {this.getRoomIllustration()}
      {this.getDialogue()}
      <ModalRoute path='/mailroom/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
    </div>
  }

  private initializeMap(): ImageMapper {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    this.state = {
      ...this.state,
      imageMap: <ImageMapper src={MailRoomData.IllustrationSource}
        map={MailRoomData.MapCoordinates}
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
        {this.getRoomInfo(MailRoomData.MailRoomInfo)}
      </div>

      <div id="column-three-no-button">
        {this.getRoomLinks()}
      </div>
    </div>
  }

  private getRoomTitle() {
    return <div className="room-title" id="mail-room-title">
      {MailRoomData.MailRoomTitle}
    </div>
  }

  private getRoomLinks() {
    const objectLinks = MailRoomData.MailRoomLinks.filter(i => !i.isDoor);
    
    return <div className="dialogue-container links-container" id="mail-room-links-container">
      {objectLinks.map(link => (
        <button onClick={this.onClick.bind(this, link)} className="mail-room-link-container" id="mail-room-link">
            <div id="mail-room-link">
              {link.text}
            </div>
          </button>
      ))}
    </div>
  }

  private onImageClick(object: RoomObject) {
    const match = MailRoomData.MailRoomLinks.find(i => i.id === object.name);

    if (!match) {
      throw new Error("Improperly mapped object name.");
    }

    return this.onClick(match);
  }
}

