export interface RecreationalRoomLinkObject {
  Title: string;
  Links: {
    LinkOne: string;
    LinkTwo: string; 
  }
}

export class RecreationalRoomData {
  public static RecreationalRoomTitle = "Rec Room";
  public static RecreationalRoomInfo="This room is a collection of things that move me. Curated by me and my community. Select an object to get started.";

  public static RecreationalRoomLinks = {
    Text: {
      Title: "Text",
      Links: {
        LinkOne: "Editorials",
        LinkTwo: "Books"
      }
    },
    Music: {
      Title: "Music",
      Links: {
        LinkOne: "Playlists",
        LinkTwo: "Albums"
      }
    },
    Photomedia: {
      Title: "Photomedia",
      Links: {
        LinkOne: "Images",
        LinkTwo: "Film"
      }
    }
  };

  public static IllustrationSource = "/designs/Room Illustrations/Recreational Room/Room Illustrations_Rec Room.png";
    public static MapCoordinates = { 
      name: "recreationalRoomMap",
      areas: [
        { name: "fieldNotes", isDoor: true, shape: "poly", coords: [162,1066,162,402,162,389,162,379,163,370,166,360,172,352,178,346,184,342,190,340,199,339,214,341,233,344,243,348,248,353,253,360,257,367,260,377,261,386,262,397,262,407,261,939]},
     
        { name: "books", isDoor: false, shape: "rect", coords: [620,612,819,707]},
        { name: "magazines", isDoor: false, shape: "rect", coords: [857,794,1212,919]},
        { name: "tapes", isDoor: false, shape: "rect", coords: [1811,991,1989,1066]},
        { name: "receiver", isDoor: false, shape: "rect", coords: [1895,406,2153,525]},
        { name: "articles", isDoor: false, shape: "rect", coords: [1954,901,2241,987]},
        { name: "records", isDoor: false, shape: "rect", coords: [2142,701,2404,876]},
        { name: "referencesArchive", isDoor: true, shape: "poly", coords: [2806,846,2807,568,2807,558,2808,548,2810,541,2813,536,2819,532,2824,531,2831,531,2939,532,2951,532,2960,533,2965,535,2971,540,2976,546,2977,554,2977,562,2978,853]}
      ]
    };
  }
  
  /*
    <area shape="rect" coords="620,612,819,707" href="#" id="books">
    <area shape="rect" coords="857,794,1212,919" href="#" id="magazines">
    <area shape="rect" coords="1811,991,1989,1066" href="#" id="tapes">
    <area shape="rect" coords="1895,406,2153,525" href="#" id="receiver">
  <area shape="rect" coords="1954,901,2241,987" href="#" id="articles">
    <area shape="rect" coords="2142,701,2404,876" href="#" id="records">
    <area shape="poly" coords="2806,846,2807,568,2807,558,2808,548,2810,541,2813,536,2819,532,2824,531,2831,531,2939,532,2951,532,2960,533,2965,535,2971,540,2976,546,2977,554,2977,562,2978,853" id="referencesArchive" href="#">
    */
  
  