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
  public static StudioInfo = "A collection of personal works. Projects on the main shelf are completed, while those on side table are works in progress. To learn more about the space, tap the doll house.";

  public static Spacial = "3. spacial";
  public static Textile = "2. textile";
  public static IntroAndVisuals = "0–1. introduction and visuals"
  public static Ongoing = "4. ongoing"

  public static StudioIds = {
    intro_and_visuals: "introduction",
    introduction: "introduction",
    ongoing: "ongoing",
    floor_plans: "floor_plans",
    walden_cont: "walden_cont",
    photomedia: "photomedia",
    photo: "photo",
    collage: "collage",
    spacial: "spacial",
    doll_house: "doll_house",
    textile: "textile",
    have_half: "have_half",
    leather_collar_worker: "leather_collar_worker",
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
          id: StudioData.StudioIds.introduction,
          isDoor: false,
          isBehindDoor: false,
          text: "0. Introduction",

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
          id: StudioData.StudioIds.leather_collar_worker,
          isDoor: false,
          isBehindDoor: false,
          text: "2D. Leather-Collar Worker",

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

        },
        {
          id: StudioData.StudioIds.walden_cont,
          isDoor: false,
          isBehindDoor: false,
          text: "4B. Walden, cont.",
          subText: "(spacial)"
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

  public static IntroductionDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Introduction/Introduction`;    
  public static PhotomediaDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Photomedia/Photomedia`;    

  public static CommercialCowboyDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Commercial Cowboy/Commercial Cowboy`;    
  public static DollHouseDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Doll House/Doll House`;    
  public static FloorPlanDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Floor Plan/Floor Plan`;    
  public static HaveHalfDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Have Half/Have Half`;    
  public static PlugInsDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Plug Ins/Plug Ins`;    
  public static WaldenContDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Walden Cont/Walden Cont`;    
  public static LeatherCollarWorkerDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Leather-Collar Worker/Leather-Collar Worker`;    


  public static MapCoordinates = {
    name: "studioMap",
    areas: [
      { name: StudioData.StudioIds.field_notes, shape: "rect", coords: [1956, 418, 2325, 1086] },
      { name: StudioData.StudioIds.entry, shape: "poly", coords: [2694, 413, 2934, 408, 2928, 1247, 2686, 1150] },

      { name: StudioData.StudioIds.floor_plans, shape: "poly", coords: [304, 1107, 304, 1056, 129, 932, 129, 1105] },
      { name: StudioData.StudioIds.walden_cont, shape: "rect", coords: [236, 824, 425, 1005] },

      { name: StudioData.StudioIds.have_half, shape: "rect", coords: [1211,692,1386,806] },
      { name: StudioData.StudioIds.leather_collar_worker, shape: "rect", coords: [1466,779,1606,891] },
      { name: StudioData.StudioIds.commercial_cowboy, shape: "rect", coords: [639,806,745,936] },
      { name: StudioData.StudioIds.plug_ins, shape: "rect", coords: [922,737,1028,925] },
      { name: StudioData.StudioIds.photomedia, shape: "rect", coords: [1367,260,1574,387] },
      { name: StudioData.StudioIds.doll_house, shape: "rect", coords: [938,321,1065,588] },
      { name: StudioData.StudioIds.introduction, shape: "rect", coords: [1214,262,1349,384] }
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