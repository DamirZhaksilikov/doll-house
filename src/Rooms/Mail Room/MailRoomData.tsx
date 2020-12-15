import { RoomLink } from "../_Shared Components/Room/RoomLink";
import { RoomObject } from "../_Shared Components/Room/RoomObject";

export class MailRoomData {
  public static MailRoomTitle = "Mail Room"
  public static MailRoomInfo = "My digital P.O. box. Get in contact with me.";
  
  public static MailRoomIds = {
    mail_me: "mail_me",
    interview_you: "interview_you",
    entry: "entry"
  }

  public static MailRoomLinks = [
    {
      id: MailRoomData.MailRoomIds.mail_me,
      isDoor: false,
      isBehindDoor: false,
      text: "Contact me"
    },
    {
      id: MailRoomData.MailRoomIds.interview_you,
      isDoor: false,
      isBehindDoor: false,
      text: "Let me interview you"
    },
    {
      id: MailRoomData.MailRoomIds.entry,
      isDoor: true,
      isBehindDoor: false,
    }

  ] as RoomLink[];

  public static IllustrationSource = `${process.env.PUBLIC_URL}/designs/Room Illustrations/Mail Room/Room Illustrations_Mailroom.png`;
  public static MailRoomMapDocumentSource = `${process.env.PUBLIC_URL}/documents/Mail Room/Mail Room Map/Mail_Room_Map`;    

  public static ContactMeLeftBlockBGSource = `${process.env.PUBLIC_URL}/documents/Mail Room/Contact Me/Left Block.png`;    
  public static ContactMeLeftBlockBGInvertedSource = `${process.env.PUBLIC_URL}/documents/Mail Room/Contact Me/Left Block Inverted.png`;    

  public static ContactMeRightBlockBGSource = `${process.env.PUBLIC_URL}/documents/Mail Room/Contact Me/Right Block.png`;    
  public static ContactMeRightBlockBGInvertedSource = `${process.env.PUBLIC_URL}/documents/Mail Room/Contact Me/Right Block Inverted.png`;    

  public static MapCoordinates = { 
    name: "mailRoomMap",
    areas: [
      { name: MailRoomData.MailRoomIds.mail_me, shape: "rect", coords: [924,840,1064,980]},
      { name: MailRoomData.MailRoomIds.mail_me, shape: "rect", coords: [1836,804,2080,956]},
      { name: MailRoomData.MailRoomIds.interview_you, shape: "poly", coords: [2056,1194,2163,1211,2203,1198,2102,1182]},
    
      { name: MailRoomData.MailRoomIds.entry, shape: "poly", coords: [258,1310,457,1310,495,1287,495,544,258,534]},
    ] as RoomObject[]
  };
}