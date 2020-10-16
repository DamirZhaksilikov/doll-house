import React from 'react';
import "./Room.scss";
import ImageMapper from 'react-image-mapper';
import { History } from 'history';
import { RoomData } from './RoomData';

interface RoomState {
  imageMap: ImageMapper;
};

export type RoomProps = {
  history: History;
  room: string;
};

export class Room extends React.Component<RoomProps, RoomState> {
    readonly ORIGINAL_IMAGE_WIDTH = 3000; 
    readonly IMAGE_WIDTH_MULTIPLIER = .73;

    public constructor(props) {
      super(props);
    }
    
    public getRoomIllustration() {
      return <div id="room-illustration">
      {this.state.imageMap}
    </div>
    }

    public getHelpIcons() {
      return <div className="dialogue-container" id="icons-container">
        <div id="icons">
          <img src={RoomData.MapIconSource} className="icon" id="map-icon" />
          <img src={RoomData.SiteInfoIconSource} className="icon" id="site-info-icon" />
        </div>
      </div>
    }
  
    public getBehindDoorButton() {
      return <div id="row-one-with-button">
        <div className="dialogue-container" id="behind-door-container">
          <div id="behind-door-text">
            {RoomData.UseBackDoorButtonText}
          </div>
        </div>
      </div>
    }

    public getRoomInfo(roomInfo: string) {
      return  <div className="dialogue-container" id="room-info-container">
          <div id="room-info">
            {roomInfo}
          </div>
      </div>
    }
  
    public closeModal() {
      this.props.history.replace(`/${this.props.room}/`);
    }
  
    public onClick(area: any) {
      if (area.isDoor)
        this.props.history.push(`/${area.name}/`);
      else
      this.props.history.push(`/${this.props.room}/${area.name}/`);
    }
 }