import { RoomLink } from "../_Shared Components/Room/RoomLink";
import { RoomLinkGroup } from "../_Shared Components/Room/RoomLinkGroup";
import { RoomObject } from "../_Shared Components/Room/RoomObject";

export class PhotomediaLink {
  name: string;
  type: string;
  link: string;
}

export class StudioData {
  public static StudioTitle = "Studio";
  public static StudioInfo = "A collection of personal works. Projects on the main shelf are completed, while those on side table are works in progress. To learn more about my work, tap the television set.";

  public static Spacial = "3. spacial";
  public static Textile = "2. textile";
  public static IntroAndVisuals = "0–1. introduction and visuals"
  public static Ongoing = "4. ongoing"

  public static StudioIds = {
    introduction: "introduction",
    a_note_on_navigation: "a_note_on_navigation",
    ongoing: "ongoing",
    floor_plans: "floor_plans",
    photomedia: "photomedia",
    photo: "photo",
    collage: "collage",
    spacial: "spacial",
    doll_house: "doll_house",
    textile: "textile",
    have_half: "have_half",
    things_i_wish_id_seen: "things_i_wish_id_seen",
    commercial_cowboy: "commercial_cowboy",
    plug_ins: "plug_ins",
    doors: "doors",
    entry: "entry",
    field_notes: "field_notes"
  }

  public static StudioLinks = [
    {
      id: StudioData.StudioIds.introduction,
      subtext: "(top right shelf)",
      links: [
        {
          id: StudioData.StudioIds.a_note_on_navigation,
          isDoor: false,
          isBehindDoor: false,
          text: "0. A note on navigating my work",

        },
      ] as RoomLink[]
    },    {
      id: StudioData.StudioIds.photomedia,
      subtext: "(top right shelf)",
      links: [
        {
          id: StudioData.StudioIds.photomedia,
          isDoor: false,
          isBehindDoor: false,
          text: "1A–B. Photomedia",

        }
      ] as RoomLink[]
    },
    {
      id: StudioData.StudioIds.textile,
      subtext: "(bottom shelf)",
      links: [
        {
          id: StudioData.StudioIds.commercial_cowboy,
          isDoor: false,
          isBehindDoor: false,
          text: "2A. Commerical Cowboy",

        },
        {
          id: StudioData.StudioIds.plug_ins,
          isDoor: false,
          isBehindDoor: false,
          text: "2B. Plug Ins",

        },
        {
          id: StudioData.StudioIds.have_half,
          isDoor: false,
          isBehindDoor: false,
          text: "2C. Have Half"
        },
        {
          id: StudioData.StudioIds.things_i_wish_id_seen,
          isDoor: false,
          isBehindDoor: false,
          text: "2D. Things I wish I'd seen",

        }
      ] as RoomLink[]
    },
    {
      id: StudioData.StudioIds.spacial,
      subtext: "(top left shelf)",
      links: [
        {
          id: StudioData.StudioIds.doll_house,
          isDoor: false,
          isBehindDoor: false,
          text: "3A. Doll House",

        }
      ] as RoomLink[]
    },
    {
      id: StudioData.StudioIds.ongoing,
      subtext: "(sidetable)",
      links: [
        {
          id: StudioData.StudioIds.floor_plans,
          isDoor: false,
          isBehindDoor: false,
          text: "4A. Floor Plan",
          subText: "(textile)"

        }
      ]
    },
    {
      id: StudioData.StudioIds.doors,
      links: [
        {
          id: StudioData.StudioIds.field_notes,
          isDoor: true,
          isBehindDoor: false,

        },
        {
          id: StudioData.StudioIds.entry,
          isDoor: true,
          isBehindDoor: false,
        }
      ] as RoomLink[]
    }
  ] as RoomLinkGroup[]

  public static IllustrationSource = `${process.env.PUBLIC_URL}/designs/Room Illustrations/Studio/Room Illustrations_Studio.png`;
  public static StudioMapDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Studio Map/Studio_Map`;    

  public static ANoteOnNavigationDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/A Note on Navigation/A Note on Navigation`;    
  public static PhotomediaDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Photomedia/Photomedia`;    

  public static CommercialCowboyDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Commercial Cowboy/Commercial Cowboy`;    
  public static DollHouseDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Doll House/Doll House`;    
  public static FloorPlanDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Floor Plan/Floor Plan`;    
  public static HaveHalfDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Have Half/Have Half`;    
  public static PlugInsDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Plug Ins/Plug Ins`;    
  public static WaldenContDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Walden Cont/Walden Cont`;    
  public static ThingsIWishIdSeenWorkerDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Things I Wish Id Seen/Things I Wish Id Seen`;    


  public static MapCoordinates = {
    name: "studioMap",
    areas: [
      { name: StudioData.StudioIds.field_notes, shape: "rect", coords: [1956, 418, 2325, 1086] },
      { name: StudioData.StudioIds.entry, shape: "poly", coords: [2694, 413, 2934, 408, 2928, 1247, 2686, 1150] },

      { name: StudioData.StudioIds.floor_plans, shape: "poly", coords: [304, 1107, 304, 1056, 129, 932, 129, 1105] },

      { name: StudioData.StudioIds.have_half, shape: "rect", coords: [1211,692,1386,806] },
      { name: StudioData.StudioIds.things_i_wish_id_seen, shape: "rect", coords: [1466,779,1606,891] },
      { name: StudioData.StudioIds.commercial_cowboy, shape: "rect", coords: [639,806,745,936] },
      { name: StudioData.StudioIds.plug_ins, shape: "rect", coords: [922,737,1028,925] },
      { name: StudioData.StudioIds.photomedia, shape: "rect", coords: [1367,260,1574,387] },
      { name: StudioData.StudioIds.doll_house, shape: "rect", coords: [938,321,1065,588] },
      { name: StudioData.StudioIds.a_note_on_navigation, shape: "rect", coords: [1214,262,1349,384] }
    ] as RoomObject[]
  };
}

/*
<!-- Image Map Generated by http://www.image-map.net/ -->
<img src="Room Illustrations_Studio small.png" usemap="#image-map">

<map name="image-map">
    <area target="" alt="field notes" title="field notes" href="" coords="1956,1087,2330,419" shape="rect">
    <area target="" alt="entry" title="entry" href="" coords="2687,1156,2695,414,2934,411,2928,1254" shape="poly">
    <area target="" alt="commercial cowboy" title="commercial cowboy" href="" coords="639,806,745,936" shape="rect">
    <area target="" alt="plug ins" title="plug ins" href="" coords="922,737,1028,925" shape="rect">
    <area target="" alt="have half" title="have half" href="" coords="1211,692,1386,806" shape="rect">
    <area target="" alt="leather collar" title="leather collar" href="" coords="1466,779,1606,891" shape="rect">
    <area target="" alt="doll house" title="doll house" href="" coords="938,321,1065,588" shape="rect">
    <area target="" alt="intro" title="intro" href="" coords="1214,262,1349,384" shape="rect">
    <area target="" alt="photomedia" title="photomedia" href="" coords="1367,260,1574,387" shape="rect">
</map>
*/