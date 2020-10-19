import "./RecreationalRoom.scss";
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React, { MouseEvent } from 'react';
import { RecRoomData, RecRoomLinkObject } from './RecRoomData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomData } from "../_Shared Components/RoomData";
import { RoomObject } from "../_Shared Components/RoomObject";

export class RecRoom extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
  }

  render() {
    return <div className="content">
      {this.getRoomIllustration()}
      {this.getDialogue()}
      <ModalRoute path='/rec_room/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
    </div>
  }

  private initializeMap(): ImageMapper {
    this.state = {
      ...this.state,
<<<<<<< HEAD
      imageMap: this.getImageMap(RecRoomData.MapCoordinates)
=======
      imageMap: <ImageMapper src={RecRoomData.IllustrationSource}
        map={RecRoomData.MapCoordinates}
        width={imageWidth}
        imgWidth={this.ORIGINAL_IMAGE_WIDTH}
        onClick={area => this.onClick(area)}
        strokeColor={"rgba(0, 0, 0, 0.0)"} />
>>>>>>> parent of 2aec593... Completed rec room and field notes mapping
    };
  }

  private getImageMap(imageMap: any) {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    return <ImageMapper src={RecRoomData.IllustrationSource}
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

      <div id="dialog-right-with-button">
        {this.getBehindDoorButton()}

        <div id="dialog-bottom-with-button">
          <div className="column-two" id="column-two-with-button">
            {this.getRoomInfo(RecRoomData.RecreationalRoomInfo)}
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
    this.props.history.push(`/${RecRoomData.RecRoomBehindDoor}/`);
  }

  private getRoomTitle() {
    return <div className="room-title" id="rec-room-title">
      {RecRoomData.RecRoomTitle}
    </div>
  }

  private getRoomLinks() {
    return <div id="column-three-with-button">
      <div className="dialogue-container links-container" id="links-container-with-button">
<<<<<<< HEAD
        {linkGroups.map(group => (
          <div id="rec-room-link-column">
            <div id="rec-room-link-group-container">
              {group.links.map(link => (
                <button onClick={this.onClick.bind(this, link)} 
                onMouseEnter={() => this.onLinkBoxEnter(link)}
                onMouseLeave={() => this.onLinkBoxLeave(link)} 
                id="rec-room-link-container"
                className={`${this.state.hoveredObjectId === link.id ? 'selected-link' : ''}`}>
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
=======
        {this.getRecRoomLinkColumn(RecRoomData.RecRoomLinks.Text)}
        {this.getRecRoomLinkColumn(RecRoomData.RecRoomLinks.Music)}
        {this.getRecRoomLinkColumn(RecRoomData.RecRoomLinks.Photomedia)}
>>>>>>> parent of 2aec593... Completed rec room and field notes mapping
      </div>
    </div>
  }

  private getRecRoomLinkColumn(recRoomLink: RecRoomLinkObject) {
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

  public onImageClick(object: RoomObject) {
    const matches = RecRoomData.RecRoomLinks.filter(i => i.id === object.name);

    if (matches.length === 0) {
      throw new Error("Improperly mapped object name.");
    }

    return this.onClick(matches[0]);
  }

  private onImageObjectEnter(object: RoomObject) {
    this.setState({ hoveredObjectId: object.name });
  }

  private onImageObjectLeave() {
    this.setState({ hoveredObjectId: null });
  }

  private onLinkBoxEnter(link: RoomLink) {
    const matchIndex = RecRoomData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...RecRoomData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: "rgba(255, 255, 255, 0.5)"
    };

    const map = RecRoomData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }

  private onLinkBoxLeave(link: RoomLink) {
    const matchIndex = RecRoomData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...RecRoomData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: null
    };

    const map = RecRoomData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }
}

