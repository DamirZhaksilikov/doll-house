import './Studio.scss'
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { StudioData } from './StudioData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomObject } from '../_Shared Components/RoomObject';
import { RoomLink } from '../_Shared Components/RoomLink';
import { RoomLinkGroup } from '../_Shared Components/RoomLinkGroup';

export class Studio extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
  }

  render() {
    return <div className="content">
      {this.getRoomIllustration()}
      {this.getDialogue()}
      <ModalRoute path='/studio/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
    </div>
  }

  private initializeMap(): ImageMapper {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    this.state = {
      ...this.state,
      imageMap: <ImageMapper src={StudioData.IllustrationSource}
        map={StudioData.MapCoordinates}
        width={imageWidth}
        imgWidth={this.ORIGINAL_IMAGE_WIDTH}
        onClick={area => this.onImageClick(area)}
        onMouseEnter={area => this.onImageObjectEnter(area)}
        onMouseLeave={area => this.onImageObjectLeave()}
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
        {this.getRoomInfo(StudioData.StudioInfo)}
      </div>

      <div id="column-three-no-button">
        {this.getRoomLinks()}
      </div>
    </div>
  }

  private getRoomTitle() {
    return <div className="room-title" id="studio-title-container">
      <div id="studio-title-text">
        {StudioData.StudioTitle}
      </div>
    </div>
  }

  private getRoomLinks() {
    const linkGroups = StudioData.StudioLinks.filter(linkGroup => linkGroup.id !== "doors");

    return <div className="dialogue-container links-container" id="links-container-with-button">
      <div id="studio-link-content">
        {linkGroups.map(linkGroup => (
          <div id="studio-link-column">
            <div id="studio-link-group-container">
              {linkGroup.links.map(link => (
                <button id="studio-link-container" onClick={this.onClick.bind(this, link)}
                className={`${this.state.hoveredObjectId === link.id ? 'selected-link' : ''}`}>
                  <div id="studio-link-text">
                    {link.text}
                  </div>
                  {link.subText &&
                    <div id="studio-link-type">
                      {link.subText}
                    </div>
                  }

                </button>
              ))}
            </div>
            <div id="studio-link-group-title-row">
              <div id="studio-link-group-title-name">
                {linkGroup.id}
              </div>
              <div id="studio-link-group-title-location">
                {linkGroup.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  }

  private onImageClick(object: RoomObject) {
    let match = this.getObjectMatch(object);
    this.onClick(match);
  }

  private getObjectMatch(object: RoomObject): RoomLink {
    let match;

    StudioData.StudioLinks.forEach(function (linkGroup) {
      linkGroup.links.forEach(function (link) {
        if (link.id === object.name)
          match = link;
      })
    });

    if (!match)
      throw new Error("Improperly mapped object name.");

    return match;
  }

  private onImageObjectEnter(object: RoomObject) {
    this.setState({ hoveredObjectId: object.name });
  }

  private onImageObjectLeave() {
    this.setState({ hoveredObjectId: null });
  }
}

