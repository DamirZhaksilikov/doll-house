export interface StudioLinkGroup {
  Title: string,
  Location: string,
  Links: StudioLink[]
}

export interface StudioLink {
  Title: string,
  HasType: boolean,
  Type?: string
}

export class StudioData {
  public static StudioTitle = "Studio";
  public static StudioInfo = "This room is a collection of things that move me. Curated by me and my community. Select an object to get started.";

  public static Spacial = "spacial";
  public static Textile = "textile";
  public static Photomedia = "photomedia"
  public static Ongoing = "ongoing"

  public static StudioLinks = {
    Ongoing: {
      Title: StudioData.Ongoing,
      Location: "sidetable",
      Links: [
        {
          Title: "Floor Plan",
          HasType: true,
          Type: StudioData.Textile
        },
        {
          Title: "Walden, cont.",
          HasType: true,
          Type: StudioData.Spacial
        }
      ]
    },
    Photomedia: {
      Title: StudioData.Photomedia,
      Location: "top left main shelf",
      Links: [
        {
          Title: "Photo",
          HasType: false
        },
        {
          Title: "Collage",
          HasType: false
        }
      ]
    },
    Spacial: {
      Title: StudioData.Spacial,
      Location: "top right main shelf",
      Links: [
        {
          Title: "Doll House",
          HasType: false
        }
      ]
    },
    Textile: {
      Title: StudioData.Textile,
      Location: "bottom main shelf",
      Links: [
        {
          Title: "Have/Half",
          HasType: false
        },
        {
          Title: "Spare Pieces",
          HasType: false
        },
        {
          Title: "Commerical Cowboy",
          HasType: false
        },
        {
          Title: "Red Light",
          HasType: false
        },
        {
          Title: "Plug In",
          HasType: false
        }
      ]
    }
  }

  public static IllustrationSource = "/designs/Room Illustrations/Studio/Room Illustrations_Studio.png";
  public static MapCoordinates = {
    name: "studioMap",
    areas: [
      { name: "fieldNotes", isDoor: true, shape: "rect", coords: [1956, 418, 2325, 1086] },
      { name: "entry", isDoor: true, shape: "poly", coords: [2694, 413, 2934, 408, 2928, 1247, 2686, 1150] },

      { name: "floorPlans", isDoor: false, shape: "poly", coords: [304, 1107, 304, 1056, 129, 932, 129, 1105] },
      { name: "waldenContinued", isDoor: false, shape: "rect", coords: [236, 824, 425, 1005] },
      { name: "haveHalf", isDoor: false, shape: "rect", coords: [648, 835, 809, 934] },
      { name: "sparePieces", isDoor: false, shape: "rect", coords: [868, 734, 1114, 931] },
      { name: "commercialCowboy", isDoor: false, shape: "rect", coords: [1256, 670, 1336, 790] },
      { name: "littleRedLight", isDoor: false, shape: "rect", coords: [1453, 657, 1547, 883] },
      { name: "plugIns", isDoor: false, shape: "rect", coords: [1692, 808, 1796, 972] },
      { name: "photoMedia", isDoor: false, shape: "poly", coords: [844, 517, 1071, 436, 1069, 159, 839, 231] },
      { name: "collage", isDoor: false, shape: "poly", coords: [851, 580, 1033, 578, 1034, 463, 851, 529] },
      { name: "dollHouse", isDoor: false, shape: "rect", coords: [1292, 142, 1408, 385] },
    ]
  };
}

/*
  <area shape="poly" coords="304,1107,304,1056,129,932,129,1105" href="#" id="floorPlans">
  <area shape="rect" coords="236,824,425,1005" href="#" id="waldenContinued">
  <area shape="rect" coords="648,835,809,934" href="#" id="haveHalf">
  <area shape="rect" coords="868,734,1114,931" href="#" id="sparePieces">
  <area shape="rect" coords="1256,670,1336,790" href="#" id="commercialCowboy">
  <area shape="rect" coords="1453,657,1547,883" href="#" id="littleRedLight">
  <area shape="rect" coords="1692,808,1796,972" href="#" id="plugIns">
  <area shape="poly" coords="844,517,1071,436,1069,159,839,231" href="#" id="photoMedia">
  <area shape="poly" coords="851,580,1033,578,1034,463,851,529" href="#" id="collage">
  <area shape="rect" coords="1292,142,1408,385" href="#" id="dollHouse">
*/