import "./RecreationalRoom.scss";
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React, { MouseEvent } from 'react';
import { RecreationalRoomData, RecreationalRoomLinkObject } from './RecreationalRoomData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomData } from "../_Shared Components/RoomData";

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
      <div className="column-one">
        {this.getHelpIcons()}
        {this.getRoomTitle()}
      </div>

      <div id="dialog-right-with-button">
        {this.getBehindDoorButton()}

        <div id="dialog-bottom-with-button">
          <div className="column-two" id="column-two-with-button">
            {this.getRoomInfo(RecreationalRoomData.RecreationalRoomInfo)}
          </div>
          {this.getRoomLinks()}
        </div>
      </div>
    </div>
  }

  public getBehindDoorButton() {
    return <div id="row-one-with-button">
      <button onClick={this.handleClick.bind(this)} className="dialogue-container" id="behind-door-container">
        <div id="behind-door-text">
          {RoomData.UseBackDoorButtonText}
        </div>
      </button>
    </div>
  }

  public handleClick(event: MouseEvent) {
    this.props.history.push(`/${RecreationalRoomData.RecreationalRoomBehindDoor}/`);
  }

  private getRoomTitle() {
    return <div className="room-title" id="rec-room-title">
      {RecreationalRoomData.RecreationalRoomTitle}
    </div>
  }

  private getRoomLinks() {
    return <div id="column-three-with-button">
      <div className="dialogue-container links-container" id="links-container-with-button">
        {this.getRecRoomLinkColumn(RecreationalRoomData.RecreationalRoomLinks.Text)}
        {this.getRecRoomLinkColumn(RecreationalRoomData.RecreationalRoomLinks.Music)}
        {this.getRecRoomLinkColumn(RecreationalRoomData.RecreationalRoomLinks.Photomedia)}
      </div>
    </div>
  }

  private getRecRoomLinkColumn(recRoomLink: RecreationalRoomLinkObject) {
    return <div id="rec-room-link-column">
      <div id="rec-room-link-group-container">
        <button id="rec-room-link-container">
          <div id="rec-room-link-text">
            {recRoomLink.Links.LinkOne}
          </div>
        </button>
        <button id="rec-room-link-container">
          <div id="rec-room-link-text">
            {recRoomLink.Links.LinkTwo}
          </div>
        </button>
      </div>
      <div id="rec-room-link-group-title-row">
        <div id="rec-room-link-group-title-text">
          {recRoomLink.Title}
        </div>
      </div>
    </div>
  }
}

