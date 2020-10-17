import './MailRoom.scss';
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { MailRoomData } from './MailRoomData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';

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
        onClick={area => this.onClick(area)}
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
    return <div className="dialogue-container links-container" id="links-container-no-button">
      <div className="mail-room-link-container" id="link1">
        <div id="mail-room-link">
          {MailRoomData.MailRoomLinks.ContactMe}
        </div>
      </div>
      <div className="mail-room-link-container" id="link2">
        <div id="mail-room-link">
          {MailRoomData.MailRoomLinks.Interview}
        </div>
      </div>
    </div>
  }
}

