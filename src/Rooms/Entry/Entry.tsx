import "./Entry.scss";
import { Room, RoomProps, RoomState } from '../_Shared Components/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { EntryData } from './EntryData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/ObjectModal';
import { RoomObject } from "../_Shared Components/RoomObject";
import { RoomLink } from "../_Shared Components/RoomLink";
import moment from "moment";
import { Alias } from "../_Shared Components/Alias";

interface EntryState extends RoomState {
  aliasInput: string;
  alias: Alias;
};

interface EntryProps extends RoomProps {
  handleAliasUpdate: any;
}

export class Entry extends Room<EntryState, EntryProps> {
  constructor(props: any) {
    super(props);
    this.initializeState();
    this.setResizeListener();
  }

  render() {
    return <div id="parent" style={{ backgroundImage: `url("${EntryData.BackgroundSource}")` }}>
      <div className="content">
        {this.getRoomIllustration()}
        {this.getDialogue()}
        <ModalRoute path='/entry/:id' component={(props) => (<ObjectModal onClose={this.closeModal.bind(this)} />)} />
      </div>
    </div>
  }

  private initializeState() {
    this.state = {
      ...this.state,
      alias: this.props.alias,
      imageMap: this.getImageMap(EntryData.MapCoordinates)
    };
  }

  private setResizeListener() {
    window.addEventListener('resize', this.resizeListener.bind(this));
  }

  private resizeListener() {
    this.setState({
      imageMap: this.getImageMap(EntryData.MapCoordinates)
    })
  }

  private getImageMap(imageMap: any) {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    return <ImageMapper src={EntryData.IllustrationSource}
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
      <div id="entry-column-two-no-button" className="column-two">
        {this.getEntryRoomPrompt()}
      </div>
      <div id="entry-column-three-no-button" className="column-two">
        {this.getEntryRoomInfo()}
      </div>
      <div id="entry-column-four-no-button">
        {this.getRoomLinks()}
      </div>
    </div>
  }

  private getEntryRoomPrompt() {
    return <div className="dialogue-container" id="entry-room-alias-prompt-container">
      {this.state.alias.getDefaultStatus() && this.getRoomPromptNoAliasSet()}
      {!this.state.alias.getDefaultStatus() && this.getRoomPromptAliasSet()}
    </div>
  }

  private getRoomPromptNoAliasSet() {
    const roomPromptSplit = EntryData.EntryRoomPromptInfo.split("\n");

    return <div id="room-prompt">
      <div id="room-prompt-info">
        {roomPromptSplit.map(line => (
          <div id="room-prompt-info-line">
            {line}
            <br />
          </div>
        ))}
      </div>
      <form onSubmit={this.handleSubmitPrompt} id="entry-room-alias-prompt" autoComplete="off">
        <input type="hidden" value="something"/>
        <input type="text"
          id="alias-input"
          placeholder="alias"
          value={this.state.aliasInput || ""}
          onChange={this.onAliasChange.bind(this)}
        />
        <button onClick={this.handleSubmitPrompt.bind(this)}
          id="alias-submit"
          disabled={!this.state.aliasInput}
          className={!!this.state.aliasInput ? 'submit-alias-enabled' : ''}>
          {EntryData.EntryRoomSubmitText}
        </button>
      </form>
    </div>
  }

  private getRoomPromptAliasSet() {
    return <div id="room-prompt">
      <div id="room-prompt-alias-set">
        {`${EntryData.EntryRoomPromptAliasSet} ${this.state.alias.getAlias()}`}
      </div>
    </div>
  }

  onAliasChange(event) {
    this.setState({ aliasInput: event.target.value });
  }

  private handleSubmitPrompt() {
    const newAlias = this.state.aliasInput;

    this.setState({
      aliasInput: "",
      alias: new Alias(newAlias)
    });

    this.props.handleAliasUpdate(newAlias);
  }

  private getEntryRoomInfo() {
    return <div className="dialogue-container" id="room-info-container">
      <div id="room-info">
        {this.getEntryRoomInfoHeader()}
        <br />
        {this.getEntryRoomInfoBody()}
      </div>
    </div>
  }

  private getEntryRoomInfoHeader() {
    let header = EntryData.EntryRoomInfoHeader + moment().subtract(10, 'minutes').format('MM-DD-YYYY, h:mm a');
    const headerSplit = header.split("\n");

    return <div id="room-info-header">
      {headerSplit.map(line => (
        <div id="room-info-header-line">
          {line}
        </div>
      ))}
    </div>
  }

  private getEntryRoomInfoBody() {
    const bodySplit = EntryData.EntryRoomInfo.split("\n");

    return <div id="room-info-body">
      {bodySplit.map(line => (
        <div id="room-info-body-line">
          {line}
          <br />
        </div>
      ))}
    </div>
  }

  private getRoomTitle() {
    return <div className="room-title" id="entry-room-title">
      {EntryData.EntryRoomTitle}
    </div>
  }

  private getRoomLinks() {
    const link = EntryData.EntryRoomLinks[0];

    return <div className="dialogue-container links-container" id="links-container-no-button">
      <button
        onClick={this.onClick.bind(this, link)}
        onMouseEnter={() => this.onLinkBoxEnter(link)}
        onMouseLeave={() => this.onLinkBoxLeave(link)}
        id="entry-room-link-container"
        className={`${this.state.hoveredObjectId === link.id ? 'selected-link' : ''}`}>
        <div id="entry-room-link">
          {link.text}
        </div>
      </button>
    </div>
  }

  private onImageClick(object: RoomObject) {
    const match = EntryData.EntryRoomLinks.find(i => i.id === object.name);

    if (!match) {
      throw new Error("Improperly mapped object name.");
    }

    return this.onClick(match);
  }

  private onImageObjectEnter(object: RoomObject) {
    this.setState({ hoveredObjectId: object.name });
  }

  private onImageObjectLeave() {
    this.setState({ hoveredObjectId: null });
  }

  private onLinkBoxEnter(link: RoomLink) {
    const matchIndex = EntryData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...EntryData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: "rgba(255, 255, 255, 0.5)"
    };

    const map = EntryData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }

  private onLinkBoxLeave(link: RoomLink) {
    const matchIndex = EntryData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...EntryData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: null
    };

    const map = EntryData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }
}

