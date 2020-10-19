import "./Entry.scss";
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { EntryData } from './EntryData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomObject } from "../_Shared Components/RoomObject";
import { RoomLink } from "../_Shared Components/RoomLink";

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
    this.state = {
      ...this.state,
      imageMap: this.getImageMap(EntryData.MapCoordinates)
    };
  }

  private getImageMap(imageMap: any) {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    return <ImageMapper src={EntryData.IllustrationSource}
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
    const link = EntryData.EntryRoomLinks[0];
    
    return <div className="dialogue-container links-container" id="links-container-no-button">
      <button 
        onClick={this.onClick.bind(this, link)}
        onMouseEnter={() => this.onLinkBoxEnter(link)}
        onMouseLeave={() => this.onLinkBoxLeave(link)} 
        id="entry-room-link-container" 
        className={`${this.state.hoveredObjectId === link.id ? 'selected-link' : ''}`}>
        <div id="entry-room-link">
          {link.text}
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

  private onImageObjectEnter(object: RoomObject) {
    this.setState({ hoveredObjectId: object.name });
  }

  private onImageObjectLeave() {
    this.setState({ hoveredObjectId: null });
  }

  private onLinkBoxEnter(link: RoomLink) {
    const matchIndex = EntryData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...EntryData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: "rgba(255, 255, 255, 0.5)"
    };

    const map = EntryData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }

  private onLinkBoxLeave(link: RoomLink) {
    const matchIndex = EntryData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...EntryData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: null
    };

    const map = EntryData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }
}

