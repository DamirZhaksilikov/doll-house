import { RoomLink } from "../_Shared Components/RoomLink";
import { RoomLinkGroup } from "../_Shared Components/RoomLinkGroup";
import { RoomObject } from "../_Shared Components/RoomObject";

export class StudioData {
  public static StudioTitle = "Studio";
  public static StudioInfo = "This room is a collection of things that move me. Curated by me and my community. Select an object to get started.";

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
    red_light: "red_light",
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
          text: "Have Half",

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
          id: StudioData.StudioIds.red_light,
          isDoor: false,
          isBehindDoor: false,
          text: "Red Light",

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
  public static MapCoordinates = {
    name: "studioMap",
    areas: [
      { name: StudioData.StudioIds.field_notes, shape: "rect", coords: [1956, 418, 2325, 1086] },
      { name: StudioData.StudioIds.entry, shape: "poly", coords: [2694, 413, 2934, 408, 2928, 1247, 2686, 1150] },

      { name: StudioData.StudioIds.floor_plans, shape: "poly", coords: [304, 1107, 304, 1056, 129, 932, 129, 1105] },
      { name: StudioData.StudioIds.walden_cont, shape: "rect", coords: [236, 824, 425, 1005] },
      { name: StudioData.StudioIds.have_half, shape: "rect", coords: [648, 835, 809, 934] },
      { name: StudioData.StudioIds.spare_pieces, shape: "rect", coords: [868, 734, 1114, 931] },
      { name: StudioData.StudioIds.commercial_cowboy, shape: "rect", coords: [1256, 670, 1336, 790] },
      { name: StudioData.StudioIds.red_light, shape: "rect", coords: [1453, 657, 1547, 883] },
      { name: StudioData.StudioIds.plug_ins, shape: "rect", coords: [1692, 808, 1796, 972] },
      { name: StudioData.StudioIds.photo, shape: "poly", coords: [844, 517, 1071, 436, 1069, 159, 839, 231] },
      { name: StudioData.StudioIds.collage, shape: "poly", coords: [851, 580, 1033, 578, 1034, 463, 851, 529] },
      { name: StudioData.StudioIds.doll_house, shape: "rect", coords: [1292, 142, 1408, 385] },
    ] as RoomObject[]
  };
}