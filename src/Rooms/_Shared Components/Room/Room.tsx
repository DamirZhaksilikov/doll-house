import React from 'react';
import "./Room.scss";
import ImageMapper from 'react-image-mapper';
import { History } from 'history';
import { RoomData } from './RoomData';
import { RoomLink } from './RoomLink';
import { Alias } from './Alias';
import { match } from 'react-router-dom';

export interface RoomState {
  imageMap: ImageMapper;
  hoveredObjectId: string;
};

export type RoomProps = {
  history: History;
  match: match;
  room: string;
  alias: Alias;
};

export class Room<S extends RoomState = RoomState, P extends RoomProps = RoomProps> extends React.Component<P, S> {
    readonly ORIGINAL_IMAGE_WIDTH = 3000; 
    readonly IMAGE_WIDTH_MULTIPLIER = .80;

    public constructor(props) {
      super(props);
    }
    
    public getRoomIllustration() {
      return <div id="room-illustration">
        {this.state.imageMap}
      </div>
    }

    public getHelpIcons() {
      const mapLink = RoomData.LinkIcons.find(link => link.id === RoomData.IconIds.site_map)
      const siteInfoLink = RoomData.LinkIcons.find(link => link.id === RoomData.IconIds.site_info)
      
      return <div className="dialogue-container" id="icons-container">
        <div id="icons">
          <img onClick={this.onClick.bind(this, mapLink)} src={RoomData.MapIconSource} className="icon" id="map-icon" alt="View house map"/>
          <img onClick={this.onClick.bind(this, siteInfoLink)} src={RoomData.SiteInfoIconSource} className="icon" id="site-info-icon" alt="View site info"/>
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
  
    public onClick(area: RoomLink) {
      if (area.isDoor)
        this.props.history.push(`/${area.id}/`);  
      else
        this.props.history.push(`/${this.props.room}/${area.id}/`);
    }
 }

