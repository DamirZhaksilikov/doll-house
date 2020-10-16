import React from 'react';
import "./Room.scss";
import ImageMapper from 'react-image-mapper';
import { History } from 'history';

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