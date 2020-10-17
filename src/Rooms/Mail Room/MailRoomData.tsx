export class MailRoomData {
  public static MailRoomTitle = "Mail Room"
  public static MailRoomInfo = "This room is a collection of things that move me. Curated by me and my community. Select an object to get started.";
  
  public static MailRoomLinks = {
    ContactMe: "Contact me",
    Interview: "Let me interview you"
  };

  public static IllustrationSource = "/designs/Room Illustrations/Mail Room/Room Illustrations_Mailroom.png";
  public static MapCoordinates = { 
    name: "mailRoomMap",
    areas: [
      { name: "entry", isDoor: true, shape: "poly", coords: [258,1310,457,1310,495,1287,495,544,258,534]},

      { name: "mail1", isDoor: false, shape: "rect", coords: [924,840,1064,980]},
      { name: "mail2", isDoor: false, shape: "rect", coords: [1836,804,2080,956]},
      { name: "letter", isDoor: false, shape: "poly", coords: [2056,1194,2163,1211,2203,1198,2102,1182]}
    ]
  };
}