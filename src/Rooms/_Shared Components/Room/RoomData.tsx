import { RoomLink } from "./RoomLink";

export class RoomData {
    public static IconIds = {
        site_info: "site_info",
        site_map: "site_map"
      }

    public static LinkIcons: RoomLink[] = [
        {
            isDoor: false,
            isBehindDoor: false,
            id: RoomData.IconIds.site_info
        },
        {
            isDoor: false,
            isBehindDoor: false,
            id: RoomData.IconIds.site_map
        }
    ];

    public static MapIconSource = `${process.env.PUBLIC_URL}/designs/Icons/Map.png`;
    public static SiteInfoIconSource = `${process.env.PUBLIC_URL}/designs/Icons/Site Info.png`;
    public static SiteInfoDocumentSource = `${process.env.PUBLIC_URL}/documents/Shared/Site Info/Site Info`;

    public static ENTRY = "entry";
    public static REC_ROOM = "rec_room";
    public static STUDIO = "studio";
    public static MAIL_ROOM = "mail_room";
    public static FIELD_NOTES = "field_notes";

    public static UseBackDoorButtonText = "Click here to use the door behind you";
}


  