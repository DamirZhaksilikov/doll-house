import './FieldNotes.scss'
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { FieldNotesData, FieldNotesLinkObject } from './FieldNotesData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';

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

  private getFieldNotesLinkColumn(link: FieldNotesLinkObject) {
    const isPublicText = link.IsPublic ? FieldNotesData.Public : FieldNotesData.Private;

    return <div id="field-notes-link-column">
      <div id="field-notes-link-container">
        <div id="field-notes-link-content">
          <div id="field-notes-link-title">
            {link.LinkText}
          </div>
          <div id="field-notes-link-is-public">
            {isPublicText}
          </div>
        </div>
      </div>
    </div>
  }
}

