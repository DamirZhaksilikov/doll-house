import './FieldNotes.scss'
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
<<<<<<< HEAD
import React from 'react';
import { FieldNotesData } from './FieldNotesData';
=======
import React, { MouseEvent } from 'react';
import { FieldNotesData, FieldNotesLinkObject } from './FieldNotesData';
>>>>>>> parent of 2aec593... Completed rec room and field notes mapping
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomData } from '../_Shared Components/RoomData';

export class FieldNotes extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
  }

  render() {
    return <div className="content">
      {this.getRoomIllustration()}
      {this.getDialogue()}
      <ModalRoute path='/field_notes/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
    </div>
  }

  private initializeMap(): ImageMapper {
    this.state = {
      ...this.state,
<<<<<<< HEAD
      imageMap: this.getImageMap(FieldNotesData.MapCoordinates)
=======
      imageMap: <ImageMapper src={FieldNotesData.IllustrationSource}
        map={FieldNotesData.MapCoordinates}
        width={imageWidth}
        imgWidth={this.ORIGINAL_IMAGE_WIDTH}
        onClick={area => this.onClick(area)}
        strokeColor={"rgba(0, 0, 0, 0.0)"} />
>>>>>>> parent of 2aec593... Completed rec room and field notes mapping
    };
  }

  private getImageMap(imageMap: any) {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    return <ImageMapper src={FieldNotesData.IllustrationSource}
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
            {this.getRoomInfo(FieldNotesData.FieldNotesInfo)}
          </div>
          {this.getRoomLinks()}
        </div>
      </div>
    </div>
  }

  private getRoomTitle() {
    return <div className="room-title" id="field-notes-title">
      {FieldNotesData.FieldNotesTitle}
    </div>
  }

  public getBehindDoorButton() {
    const doorLink = FieldNotesData.FieldNotesLinks.find(links => links.isBehindDoor);

    return <div id="row-one-with-button">
      <button 
      onClick={this.onClick.bind(this, doorLink)} className="dialogue-container" id="behind-door-container">
        <div id="behind-door-text">
          {RoomData.UseBackDoorButtonText}
        </div>
      </button>
    </div>
  }

  private getRoomLinks() {
    return <div id="column-three-with-button">
      <div className="dialogue-container links-container" id="links-container-with-button">
        <div id="field-notes-link-content">
          {this.getFieldNotesLinkColumn(FieldNotesData.FieldNotesLinks.Observations)}
          {this.getFieldNotesLinkColumn(FieldNotesData.FieldNotesLinks.WorkNotes)}
          {this.getFieldNotesLinkColumn(FieldNotesData.FieldNotesLinks.Intimacies)}
          {this.getFieldNotesLinkColumn(FieldNotesData.FieldNotesLinks.PrivateEssays)}
        </div>
      </div>
    </div>
  }

<<<<<<< HEAD
  private getLinkButton(link: RoomLink) {
    return <button id="field-notes-link-container" 
    onClick={this.onClick.bind(this, link)}
    onMouseEnter={() => this.onLinkBoxEnter(link)}
    onMouseLeave={() => this.onLinkBoxLeave(link)}
    className={`${this.state.hoveredObjectId === link.id ? 'selected-link' : ''}`}>
      <div id="field-notes-link-content">
        <div id="field-notes-link-title">
          {link.text}
        </div>
        <div id="field-notes-link-is-public">
          {link.subText}
        </div>
      </div>
    </button>
  }

  private onImageClick(object: RoomObject) {
    const match = FieldNotesData.FieldNotesLinks.find(i => i.id === object.name);

    if (!match) {
      throw new Error("Improperly mapped object name.");
    }
=======
  private getFieldNotesLinkColumn(link: FieldNotesLinkObject) {
    const isPublicText = link.IsPublic ? FieldNotesData.Public : FieldNotesData.Private;
>>>>>>> parent of 2aec593... Completed rec room and field notes mapping

    return <div id="field-notes-link-column">
      <button id="field-notes-link-container">
        <div id="field-notes-link-content">
          <div id="field-notes-link-title">
            {link.LinkText}
          </div>
          <div id="field-notes-link-is-public">
            {isPublicText}
          </div>
        </div>
      </button>
    </div>
  }

  private onImageObjectEnter(object: RoomObject) {
    this.setState({ hoveredObjectId: object.name });
  }

  private onImageObjectLeave() {
    this.setState({ hoveredObjectId: null });
  }

  private onLinkBoxEnter(link: RoomLink) {
    const matchIndex = FieldNotesData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...FieldNotesData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: "rgba(255, 255, 255, 0.5)"
    };

    const map = FieldNotesData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }

  private onLinkBoxLeave(link: RoomLink) {
    const matchIndex = FieldNotesData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...FieldNotesData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: null
    };

    const map = FieldNotesData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }
}

