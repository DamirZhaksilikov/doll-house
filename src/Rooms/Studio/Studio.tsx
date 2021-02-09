import './Studio.scss'
import { Room } from '../_Shared Components/Room/Room';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import { StudioData } from './StudioData';
import { ModalRoute } from 'react-router-modal';
import { ObjectModal } from '../_Shared Components/Modal/ObjectModal';
import { RoomObject } from '../_Shared Components/Room/RoomObject';
import { RoomLink } from '../_Shared Components/Room/RoomLink';
import { RoomData } from '../_Shared Components/Room/RoomData';
import { ObjectDocument } from '../_Shared Components/Modal/ObjectDocument';

export class Studio extends Room {
  constructor(props: any) {
    super(props);
    this.initializeMap();
    this.setResizeListener();
  }

  render() {
    return <div className="content">
      {this.getRoomIllustration()}
      {this.getDialogue()}
      <ModalRoute 
          path='/studio/:id' 
          component={(props) => (
            this.getStudioModal((props.match.params as any).id)
          )} />    </div>
  }

  private initializeMap(): ImageMapper {
    this.state = {
      ...this.state,
      imageMap: this.getImageMap(StudioData.MapCoordinates)
    };
  }

  private setResizeListener() {
    window.addEventListener('resize', this.resizeListener.bind(this));
  }

  private resizeListener() {
    this.setState({
      imageMap: this.getImageMap(StudioData.MapCoordinates)
    })
  }

  private getImageMap(imageMap: any) {
    const imageWidth = window.innerWidth * this.IMAGE_WIDTH_MULTIPLIER;

    return <ImageMapper src={StudioData.IllustrationSource}
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
                <button id="studio-link-container" 
                onClick={this.onClick.bind(this, link)}
                onMouseEnter={() => this.onLinkBoxEnter(link)}
                onMouseLeave={() => this.onLinkBoxLeave(link)} 
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

  private onLinkBoxEnter(link: RoomLink) {
    const matchIndex = StudioData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...StudioData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: "rgba(255, 255, 255, 0.5)"
    };

    const map = StudioData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }

  private onLinkBoxLeave(link: RoomLink) {
    const matchIndex = StudioData.MapCoordinates.areas.findIndex(area => area.name === link.id),
      areas = [...StudioData.MapCoordinates.areas];
    areas[matchIndex] = {
      name: areas[matchIndex].name,
      shape: areas[matchIndex].shape,
      coords: areas[matchIndex].coords,
      preFillColor: null
    };

    const map = StudioData.MapCoordinates;
    map.areas = areas;

    this.setState({
      imageMap: this.getImageMap(map)
    });
  }

  private getStudioModal(id: string) {
    let content;
    let isExtended = true;
 
    if(id === RoomData.IconIds.site_map) {
      content = <ObjectDocument baseFileSource={StudioData.StudioMapDocumentSource} numPages={1}/>
      isExtended = false;
    } else if(id === RoomData.IconIds.site_info) {
       content = <ObjectDocument baseFileSource={RoomData.SiteInfoDocumentSource} numPages={1}/>
       isExtended = false;
 
      } else if(id === StudioData.StudioIds.a_note_on_navigation) {
      content = <ObjectDocument baseFileSource={StudioData.ANoteOnNavigationDocumentSource} numPages={1}/>
    } else if(id === StudioData.StudioIds.photomedia) {
      content = <ObjectDocument baseFileSource={StudioData.PhotomediaDocumentSource} numPages={3}/>
    } else if(id === StudioData.StudioIds.floor_plans) {
      content = <ObjectDocument baseFileSource={StudioData.FloorPlanDocumentSource} numPages={3}/>
    } else if(id === StudioData.StudioIds.walden_cont) {
      content = <ObjectDocument baseFileSource={StudioData.WaldenContDocumentSource} numPages={2}/>
    } else if(id === StudioData.StudioIds.have_half) {
      content = <ObjectDocument baseFileSource={StudioData.HaveHalfDocumentSource} numPages={4}/>
    } else if(id === StudioData.StudioIds.leather_collar) {
      content = <ObjectDocument baseFileSource={StudioData.LeatherCollarWorkerDocumentSource} numPages={2}/>
    } else if(id === StudioData.StudioIds.commercial_cowboy) {
      content = <ObjectDocument baseFileSource={StudioData.CommercialCowboyDocumentSource} numPages={5}/>
    } else if(id === StudioData.StudioIds.plug_ins) {
       content = <ObjectDocument baseFileSource={StudioData.PlugInsDocumentSource} numPages={4}/>
    } else if(id === StudioData.StudioIds.doll_house) {
      content = <ObjectDocument baseFileSource={StudioData.DollHouseDocumentSource} numPages={5} />
    }
    
     
     return <ObjectModal 
       onClose={this.closeModal.bind(this)} 
       content={content}
       extendHeight={isExtended}
     />
   }
}

