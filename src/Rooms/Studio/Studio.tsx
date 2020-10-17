import './Studio.scss'
import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { StudioData, StudioLinkGroup } from './StudioData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';

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
    return <div className="dialogue-container links-container" id="links-container-with-button">
      <div id="studio-link-content">
        {this.getStudioLinkColumn(StudioData.StudioLinks.Ongoing)}
        {this.getStudioLinkColumn(StudioData.StudioLinks.Photomedia)}
        {this.getStudioLinkColumn(StudioData.StudioLinks.Spacial)}
        {this.getStudioLinkColumn(StudioData.StudioLinks.Textile)}
      </div>
    </div>
  }

  private getStudioLinkColumn(recRoomLink: StudioLinkGroup) {
    return <div id="studio-link-column">
      <div id="studio-link-group-container">
        {recRoomLink.Links.map(link => (
          <div id="studio-link-container">
            <div id="studio-link-text">
              {link.Title}
            </div>
            {link.HasType && link.Type &&
              <div id="studio-link-type">
                {`(${link.Type})`}
              </div>
            }

          </div>
        ))}
      </div>
      <div id="studio-link-group-title-row">
        <div id="studio-link-group-title-name">
          {recRoomLink.Title}
        </div>
        <div id="studio-link-group-title-location">
          {`(${recRoomLink.Location})`}
        </div>
      </div>
    </div>

  }
}

