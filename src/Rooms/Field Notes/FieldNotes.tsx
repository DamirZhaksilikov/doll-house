import './FieldNotes.scss'
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React, { MouseEvent } from 'react';
import { FieldNotesData } from './FieldNotesData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomData } from '../_Shared Components/RoomData';
import { RoomObject } from '../_Shared Components/RoomObject';
import { RoomLink } from '../_Shared Components/RoomLink';

export class FieldNotes extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
  }

  render() {
    return <div className="content">
      {this.getRoomIllustration()}
      {this.getDialogue()}
      <ModalRoute path='/fieldnotes/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
    </div>
  }

  private initializeMap(): ImageMapper {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    this.state = {
      ...this.state,
      imageMap: <ImageMapper src={FieldNotesData.IllustrationSource}
        map={FieldNotesData.MapCoordinates}
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
    return <div id="row-one-with-button">
      <button onClick={this.handleClick.bind(this)} className="dialogue-container" id="behind-door-container">
        <div id="behind-door-text">
          {RoomData.UseBackDoorButtonText}
        </div>
      </button>
    </div>
  }

  public handleClick(event: MouseEvent) {
    this.props.history.push(`/${FieldNotesData.FieldNotesBehindDoor}/`);
  }

  private getRoomLinks() {
    const dialogueLinks = FieldNotesData.FieldNotesLinks.filter(link => !link.isDoor);

    return <div id="column-three-with-button">
      <div className="dialogue-container links-container" id="links-container-with-button">
        <div id="field-notes-link-content">
          {dialogueLinks.map(link => (
            <div id="field-notes-link-column">
              {this.getLinkButton(link)}
            </div>
          ))}
        </div>
      </div>
    </div>
  }

  private getLinkButton(link: RoomLink) {
    return <button id="field-notes-link-container" onClick={this.onClick.bind(this, link)}>
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

    return this.onClick(match);
  }
}

