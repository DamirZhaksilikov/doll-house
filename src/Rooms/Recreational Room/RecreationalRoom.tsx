import "./RecreationalRoom.scss";
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { RecreationalRoomData } from './RecreationalRoomData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';

export class RecreationalRoom extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
  }

  render() {
    return <div className="content">
      {this.getRoomIllustration()}
      {this.getDialogue()}
      <ModalRoute path='/recroom/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
    </div>
  }

  private initializeMap(): ImageMapper {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    this.state = {
      ...this.state,
      imageMap: <ImageMapper src={RecreationalRoomData.IllustrationSource}
        map={RecreationalRoomData.MapCoordinates}
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

      <div id="dialog-right-with-button">
        {this.getBehindDoorButton()}

        <div id="dialog-bottom-with-button">
          <div id="column-two-with-button">
            {this.getRoomInfo(RecreationalRoomData.RecreationalRoomInfo, true)}
          </div>
          {this.getRoomLinks()}
        </div>
      </div>
    </div>
  }

  private getRoomTitle() {
    return <div className="room-title" id="rec-room-title">
      {RecreationalRoomData.RecreationalRoomTitle}
    </div>
  }

  private getRoomLinks() {
    return <div id="column-three-with-button">
      <div className="dialogue-container" id="links-container-with-button">
        {this.getRecRoomLinkColumn("Text", "Editorials", "Books")}
        {this.getRecRoomLinkColumn("Music", "Playlists", "Albums")}
        {this.getRecRoomLinkColumn("Photomedia", "Images", "Film")}
      </div>
    </div>
  }

  private getRecRoomLinkColumn(group: string, link1: string, link2: string) {
    return <div id="rec-room-link-column">
      <div id="rec-room-link-group-container">
        <div id="rec-room-link-row1">
          <div id="rec-room-link-container">
            <div id="rec-room-link-text">
              {link1}
            </div>
          </div>
        </div><div id="rec-room-link-row2">
          <div id="rec-room-link-container">
            <div id="rec-room-link-text">
              {link2}
            </div>
          </div>
        </div>
      </div>
      <div id="rec-room-link-group-title-row">
        <div id="rec-room-link-group-title-text">
          {group}
        </div>
      </div>
    </div>
  }
}

