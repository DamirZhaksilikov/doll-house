import { RoomLinkGroup } from "../_Shared Components/Room/RoomLinkGroup";
import { RoomObject } from "../_Shared Components/Room/RoomObject";

export class RecRoomData {
  public static RecRoomTitle = "Rec Room";
  public static RecRoomInfo= "This room is a collection of things that move me. Curated by me and my community. Select an object to get started.";

  public static RecRoomIds = {
    text: "text",
    editorials: "editorials",
    books: "books",
    music: "music",
    playlists: "playlists",
    albums: "albums",
    photomedia: "photomedia",
    images: "images",
    film: "film",
    doors: "doors",
    references_archive: "references_archive",
    field_notes: "field_notes",
    entry: "entry"
  }


  public static RecRoomLinks = [    
    {
      id: RecRoomData.RecRoomIds.text,
      links: [
        {
          id: RecRoomData.RecRoomIds.editorials,
          isDoor: false,
          isBehindDoor: false,
          text: "Editorials"
        },
        {
          id: RecRoomData.RecRoomIds.books,
          isDoor: false,
          isBehindDoor: false,
          text: "Books"
        }
      ]
    },
    {
      id: RecRoomData.RecRoomIds.music,
      links: [
        {
          id: RecRoomData.RecRoomIds.playlists,
          isDoor: false,
          isBehindDoor: false,
          text: "Playlists"
        },
        {
          id: RecRoomData.RecRoomIds.albums,
          isDoor: false,
          isBehindDoor: false,
          text: "Albums"
        }
      ]  
    },
    {
      id: RecRoomData.RecRoomIds.photomedia,
      links: [
        {
          id: RecRoomData.RecRoomIds.images,
          isDoor: false,
          isBehindDoor: false,
          text: "Images"
        },
        {
          id: RecRoomData.RecRoomIds.film,
          isDoor: false,
          isBehindDoor: false,
          text: "Film"
        }
      ]  
    },
    {
      id: RecRoomData.RecRoomIds.doors,
      links: [
        {
          id: RecRoomData.RecRoomIds.references_archive,
          isDoor: false,
          isBehindDoor: false,
        },
        {
          id: RecRoomData.RecRoomIds.field_notes,
          isDoor: true,
          isBehindDoor: false,
        },
        {
          id: RecRoomData.RecRoomIds.entry,
          isDoor: true,
          isBehindDoor: true,
        }
      ]
    }    
  ] as RoomLinkGroup[];

  public static IllustrationSource = `${process.env.PUBLIC_URL}/designs/Room Illustrations/Recreational Room/Room Illustrations_Rec Room.png`;
  public static RecRoomMapDocumentSource = `${process.env.PUBLIC_URL}/documents/Rec Room/Rec Room Map/Rec_Room_Map`;    
  
  public static MapCoordinates = { 
    name: "recRoomMap",
    areas: [
      { name: RecRoomData.RecRoomIds.editorials, shape: "rect", coords: [1954,901,2241,987]},
      { name: RecRoomData.RecRoomIds.books, shape: "rect", coords: [620,612,819,707]},
      { name: RecRoomData.RecRoomIds.playlists, shape: "rect", coords: [1895,406,2153,525]},
      { name: RecRoomData.RecRoomIds.albums, shape: "rect", coords: [2142,701,2404,876]},
      { name: RecRoomData.RecRoomIds.images, shape: "rect", coords: [857,794,1212,919]},
      { name: RecRoomData.RecRoomIds.film, shape: "rect", coords: [1811,991,1989,1066]},
      
      { name: RecRoomData.RecRoomIds.references_archive, shape: "poly", coords: [2806,846,2807,568,2807,558,2808,548,2810,541,2813,536,2819,532,2824,531,2831,531,2939,532,2951,532,2960,533,2965,535,2971,540,2976,546,2977,554,2977,562,2978,853]},
      { name: RecRoomData.RecRoomIds.field_notes, shape: "poly", coords: [162,1066,162,402,162,389,162,379,163,370,166,360,172,352,178,346,184,342,190,340,199,339,214,341,233,344,243,348,248,353,253,360,257,367,260,377,261,386,262,397,262,407,261,939]}
    ] as RoomObject[]
  };
}