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
  public static StudioInfo = "A collection of personal works. Projects on the side table are currently ongoing. While on the main shelf, I’ve organized objects by the project’s medium. Tap a piece to get started.";

  public static Spacial = "spacial";
  public static Textile = "textile";
  public static Photomedia = "photomedia"
  public static Ongoing = "ongoing"

  public static StudioIds = {
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
    spare_pieces: "spare_pieces",
    commercial_cowboy: "commercial_cowboy",
    plug_ins: "plug_ins",
    doors: "doors",
    entry: "entry",
    field_notes: "field_notes"
  }

  public static StudioLinks = [
    {
      id: StudioData.StudioIds.ongoing,
      subtext: "(sidetable)",
      links: [
        {
          id: StudioData.StudioIds.floor_plans,
          isDoor: false,
          isBehindDoor: false,
          text: "Floor Plan",
          subText: "(textile)"

        },
        {
          id: StudioData.StudioIds.walden_cont,
          isDoor: false,
          isBehindDoor: false,
          text: "Walden, cont.",
          subText: "(spacial)"
        }
      ]
    },
    {
      id: StudioData.StudioIds.photomedia,
      subtext: "(top left main shelf)",
      links: [
        {
          id: StudioData.StudioIds.photo,
          isDoor: false,
          isBehindDoor: false,
          text: "Photo",

        },
        {
          id: StudioData.StudioIds.collage,
          isDoor: false,
          isBehindDoor: false,
          text: "Collage",
        }
      ] as RoomLink[]
    },
    {
      id: StudioData.StudioIds.spacial,
      subtext: "(top right main shelf)",
      links: [
        {
          id: StudioData.StudioIds.doll_house,
          isDoor: false,
          isBehindDoor: false,
          text: "Doll House",

        }
      ] as RoomLink[]
    },
    {
      id: StudioData.StudioIds.textile,
      subtext: "bottom main shelf",
      links: [
        {
          id: StudioData.StudioIds.have_half,
          isDoor: false,
          isBehindDoor: false,
          text: "Have Half"
        },
        {
          id: StudioData.StudioIds.spare_pieces,
          isDoor: false,
          isBehindDoor: false,
          text: "Spare Pieces",

        },
        {
          id: StudioData.StudioIds.commercial_cowboy,
          isDoor: false,
          isBehindDoor: false,
          text: "Commerical Cowboy",

        },
        {
          id: StudioData.StudioIds.plug_ins,
          isDoor: false,
          isBehindDoor: false,
          text: "Plug Ins",

        }
      ] as RoomLink[]
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

  public static CommercialCowboyDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Commercial Cowboy/Commercial Cowboy`;    
  public static DollHouseDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Doll House/Doll House`;    
  public static FloorPlanDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Floor Plan/Floor Plan`;    
  public static HaveHalfDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Have Half/Have Half`;    
  public static PlugInsDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Plug Ins/Plug Ins`;    
  public static WaldenContDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Walden Cont/Walden Cont`;    
  public static SparePiecesDocumentSource = `${process.env.PUBLIC_URL}/documents/Studio/Spare Pieces/Spare Pieces`;    

  public static PhotoBaseSource = `${process.env.PUBLIC_URL}/documents/Studio/Photomedia/Photo`;
  public static PhotoSources = [
    {
      name: "1",
      type: "JPG",
      link: `${StudioData.PhotoBaseSource}/1.jpg`
    },
    {
      name: "2",
      type: "JPG",
      link: `${StudioData.PhotoBaseSource}/2.jpg`
    },
    {
      name: "3",
      type: "JPG",
      link: `${StudioData.PhotoBaseSource}/3.jpg`
    },
    {
      name: "4",
      type: "JPG",
      link: `${StudioData.PhotoBaseSource}/4.jpg`
    },
    {
      name: "5",
      type: "JPG",
      link: `${StudioData.PhotoBaseSource}/5.jpg`
    },
    {
      name: "6",
      type: "JPG",
      link: `${StudioData.PhotoBaseSource}/6.jpg`
    },
    {
      name: "7",
      type: "JPG",
      link: `${StudioData.PhotoBaseSource}/7.jpg`
    }
  ] as PhotomediaLink[];

  public static CollageBaseSource = `${process.env.PUBLIC_URL}/documents/Studio/Photomedia/Collage`;
  public static CollageSources = [
    {
      name: "tinker_bell",
      type: "JPG",
      link: `${StudioData.CollageBaseSource}/tinker_bell.jpg`
    },
    {
      name: "nimbus",
      type: "JPG",
      link: `${StudioData.CollageBaseSource}/nimbus.jpg`
    },
    {
      name: "chinatown",
      type: "GIF",
      link: `${StudioData.CollageBaseSource}/chinatown.gif`
    }
  ] as PhotomediaLink[];

  public static MapCoordinates = {
    name: "studioMap",
    areas: [
      { name: StudioData.StudioIds.field_notes, shape: "rect", coords: [1956, 418, 2325, 1086] },
      { name: StudioData.StudioIds.entry, shape: "poly", coords: [2694, 413, 2934, 408, 2928, 1247, 2686, 1150] },

      { name: StudioData.StudioIds.floor_plans, shape: "poly", coords: [304, 1107, 304, 1056, 129, 932, 129, 1105] },
      { name: StudioData.StudioIds.walden_cont, shape: "rect", coords: [236, 824, 425, 1005] },
      { name: StudioData.StudioIds.have_half, shape: "rect", coords: [648, 835, 809, 934] },
      { name: StudioData.StudioIds.spare_pieces, shape: "rect", coords: [868, 734, 1114, 931] },
      { name: StudioData.StudioIds.commercial_cowboy, shape: "rect", coords: [1480,738,1586,898] },
      { name: StudioData.StudioIds.plug_ins, shape: "rect", coords: [1226,632,1346,804] },
      { name: StudioData.StudioIds.photo, shape: "poly", coords: [844, 517, 1071, 436, 1069, 159, 839, 231] },
      { name: StudioData.StudioIds.collage, shape: "poly", coords: [851, 580, 1033, 578, 1034, 463, 851, 529] },
      { name: StudioData.StudioIds.doll_house, shape: "rect", coords: [1292, 142, 1408, 385] },
    ] as RoomObject[]
  };
}