import { Room } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { MailRoomData } from './MailRoomData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';

export class MailRoom extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
  }

  render() {
    return <div> 
      {this.getRoomIllustration()}
      <ModalRoute path='/mailroom/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
    </div>
  }

  private initializeMap(): ImageMapper {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    this.state = {
      ...this.state,
      imageMap: <ImageMapper src={MailRoomData.IllustrationSource}
        map={MailRoomData.MapCoordinates}
        width={imageWidth}
        imgWidth={this.ORIGINAL_IMAGE_WIDTH}
        onClick={area => this.onClick(area)}
        strokeColor={"rgba(0, 0, 0, 0.0)"} />
    };
  }
}

