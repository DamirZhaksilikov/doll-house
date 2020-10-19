import './MailRoom.scss';
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { MailRoomData } from './MailRoomData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomObject } from '../_Shared Components/RoomObject';
import { RoomLink } from '../_Shared Components/RoomLink';

export class MailRoom extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
  }

  render() {
    return <div className="content">
      {this.getRoomIllustration()}
      {this.getDialogue()}
      <ModalRoute path='/mail_room/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
    </div>
  }

  private initializeMap(): ImageMapper {
    this.state = {
      ...this.state,
      imageMap: this.getImageMap(MailRoomData.MapCoordinates)
    };
  }

  private getImageMap(imageMap: any) {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    return <ImageMapper src={MailRoomData.IllustrationSource}
      map={imageMap}
      width={imageWidth}
      imgWidth={this.ORIGINAL_IMAGE_WIDTH}
      onClick={area => this.onImageClick(area)}
      onMouseEnter={area => this.onImageObjectEnter(area)}
      onMouseLeave={area => this.onImageObjectLeave()}
      strokeColor={"rgba(0, 0, 0, 0.0)"} />
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
        <button onClick={this.onClick.bind(this, link)}
          onMouseEnter={() => this.onLinkBoxEnter(link)}
          onMouseLeave={() => this.onLinkBoxLeave(link)} id="mail-room-link"
          className={`${this.state.hoveredObjectId === link.id ? 
          'selected-link mail-room-link-container' : 'mail-room-link-container'}`}>
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

  private onImageObjectEnter(object: RoomObject) {
    this.setState({ hoveredObjectId: object.name });
  }

  private onImageObjectLeave() {
    this.setState({ hoveredObjectId: null });
  }

  private onLinkBoxEnter(link: RoomLink) {
    const indexes = this.getAllIndexes(MailRoomData.MapCoordinates.areas, link.id)
    let areas = [...MailRoomData.MapCoordinates.areas];

    indexes.forEach(matchIndex => {
      areas[matchIndex] = {
        name: areas[matchIndex].name,
        shape: areas[matchIndex].shape,
        coords: areas[matchIndex].coords,
        preFillColor: "rgba(255, 255, 255, 0.5)"
      };
    });
    
    const map = MailRoomData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }

  private onLinkBoxLeave(link: RoomLink) {
    const indexes = this.getAllIndexes(MailRoomData.MapCoordinates.areas, link.id)
    let areas = [...MailRoomData.MapCoordinates.areas];

    indexes.forEach(matchIndex => {
      areas[matchIndex] = {
        name: areas[matchIndex].name,
        shape: areas[matchIndex].shape,
        coords: areas[matchIndex].coords,
        preFillColor: null
      };
    });

    const map = MailRoomData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }

  private getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i].name === val)
            indexes.push(i);
    return indexes;
  }
}

