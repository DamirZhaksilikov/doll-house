import { RoomLink } from "../_Shared Components/RoomLink";
import { RoomObject } from "../_Shared Components/RoomObject";

export class MailRoomData {
  public static MailRoomTitle = "Mail Room"
  public static MailRoomInfo = "This room is a collection of things that move me. Curated by me and my community. Select an object to get started.";
  
  public static MailRoomLinks = [
    {
      id: "mailMe",
      isObject: true,
      text: "Contact me"
    },
    {
      id: "interviewYou",
      isObject: true,
      text: "Let me interview you"
    },
    {
      id: "entry",
      isObject: false
    }

  ] as RoomLink[];

  public static IllustrationSource = "/designs/Room Illustrations/Mail Room/Room Illustrations_Mailroom.png";
  public static MapCoordinates = { 
    name: "mailRoomMap",
    areas: [
      { name: MailRoomData.MailRoomLinks[0].id, shape: "rect", coords: [924,840,1064,980]},
      { name: MailRoomData.MailRoomLinks[0].id, shape: "rect", coords: [1836,804,2080,956]},
      { name: MailRoomData.MailRoomLinks[1].id, shape: "poly", coords: [2056,1194,2163,1211,2203,1198,2102,1182]},
    
      { name: MailRoomData.MailRoomLinks[2].id, shape: "poly", coords: [258,1310,457,1310,495,1287,495,544,258,534]},
    ] as RoomObject[]
  };
}