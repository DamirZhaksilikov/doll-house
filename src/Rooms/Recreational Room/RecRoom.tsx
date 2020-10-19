import "./RecRoom.scss";
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { RecRoomData } from './RecRoomData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomData } from "../_Shared Components/RoomData";
import { RoomObject } from "../_Shared Components/RoomObject";
import { RoomLink } from "../_Shared Components/RoomLink";

export class RecRoom extends Room {
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
      imageMap: <ImageMapper src={RecRoomData.IllustrationSource}
        map={RecRoomData.MapCoordinates}
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

      <div id="dialog-right-with-button">
        {this.getBehindDoorButton()}

        <div id="dialog-bottom-with-button">
          <div className="column-two" id="column-two-with-button">
            {this.getRoomInfo(RecRoomData.RecRoomInfo)}
          </div>
          {this.getRoomLinks()}
        </div>
      </div>
    </div>
  }

  public getBehindDoorButton() {
    const doorLinkGroup = RecRoomData.RecRoomLinks.find(group => group.id === "doors");
    const behindDoorLink = doorLinkGroup.links.find(link => link.isBehindDoor);
    
    return <div id="row-one-with-button">
      <button onClick={this.onClick.bind(this, behindDoorLink)} className="dialogue-container" id="behind-door-container">
        <div id="behind-door-text">
          {RoomData.UseBackDoorButtonText}
        </div>
      </button>
    </div>
  }

  private getRoomTitle() {
    return <div className="room-title" id="rec-room-title">
      {RecRoomData.RecRoomTitle}
    </div>
  }

  private getRoomLinks() {
    const linkGroups = RecRoomData.RecRoomLinks.filter(i => i.id !== "doors");

    return <div id="column-three-with-button">
      <div className="dialogue-container links-container" id="links-container-with-button">
        {linkGroups.map(group => (
          <div id="rec-room-link-column">
            <div id="rec-room-link-group-container">
              {group.links.map(link => (
                <button onClick={this.onClick.bind(this, link)} id="rec-room-link-container">
                  <div id="rec-room-link-text">
                    {link.text}
                  </div>
                </button>
              ))}
            </div>
            <div id="rec-room-link-group-title-row">
              <div id="rec-room-link-group-title-text">
                {group.id}
              </div>
            </div>
          </div>))}
      </div>
    </div>
  }

  private onImageClick(object: RoomObject) {
    let match = this.getObjectMatch(object);
    this.onClick(match);
  }

  private getObjectMatch(object: RoomObject): RoomLink {
    let match;

    RecRoomData.RecRoomLinks.forEach(function(linkGroup) {
      linkGroup.links.forEach(function(link) {
        if(link.id  === object.name)
          match = link;
        })
    });

  if(!match)
    throw new Error("Improperly mapped object name.");

    return match;
  }
}

