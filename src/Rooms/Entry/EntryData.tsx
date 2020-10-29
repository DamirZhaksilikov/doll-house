import { RoomData } from '../_Shared Components/Room/RoomData';
import { RoomLink } from '../_Shared Components/Room/RoomLink'
import { RoomObject } from '../_Shared Components/Room/RoomObject';

export class EntryData {
    public static EntryRoomTitle = "Entry Room";
    public static EntryRoomInfoHeader = "iMessage\ndamir, "
    public static EntryRoomInfo= "I won’t be home when you get there, but I left a lunch tray out for you. On the tray, you'll find a note with some house rules.\n\nTap the tray to read it.";

    public static EntryRoomPromptInfo = "Welcome stranger,\n\nIf there’s something you’d like to be called, sign in below.\n\nHere, anonymity works just fine too."
    public static EntryRoomPrompText = "alias";
    public static EntryRoomSubmitText = "submit";
    public static EntryRoomPromptAliasSet = "Welcome";
    
    public static EntryRoomIds = {
      read_note: RoomData.IconIds.site_info,
      rec_room: "rec_room",
      studio: "studio",
      mail_room: "mail_room"
    }

    public static EntryRoomLinks = [
      {
        text: "Read Note",
        isDoor: false,
        isBehindDoor: false,
        id: EntryData.EntryRoomIds.read_note
      },
      {
        isDoor: true,
        isBehindDoor: false,
        id: EntryData.EntryRoomIds.rec_room
      },
      {
        isDoor: true,
        isBehindDoor: false,
        id: EntryData.EntryRoomIds.studio
      },
      {
        isDoor: true,
        isBehindDoor: false,
        id: EntryData.EntryRoomIds.mail_room
      }

    ] as RoomLink[]

    public static IllustrationSource = `${process.env.PUBLIC_URL}/designs/Room Illustrations/Entry/Room Illustrations_Entry.png`;
    public static BackgroundSource = `${process.env.PUBLIC_URL}/designs/Screen Mocks/Entry/Entry_Background.png`;
    public static EntryMapDocumentSource = `${process.env.PUBLIC_URL}/documents/Entry/Entry_Map.pdf`;    

    public static MapCoordinates = { 
      name: "entryMap",
      areas: [
        { name: EntryData.EntryRoomIds.read_note, shape: "rect", coords: [1388,480,1656,688]},
        { name: EntryData.EntryRoomIds.rec_room, shape: "rect", coords: [1096,410,1281,813]},
        { name: EntryData.EntryRoomIds.studio, shape: "poly", coords: [564,907,397,979,395,972,394,965,393,958,392,951,391,944,390,932,390,928,389,918,388,908,388,900,387,890,386,880,386,871,385,862,384,850,383,839,382,830,382,818,381,806,380,792,379,784,378,770,378,761,377,750,377,739,377,730,376,718,375,707,375,697,375,685,375,673,374,662,374,652,373,643,373,633,373,624,373,616,374,604,374,594,374,584,374,572,374,562,375,551,375,541,375,529,376,521,376,511,377,501,378,491,379,480,380,469,382,457,383,446,384,437,386,428,388,419,390,411,392,405,394,401,556,410,553,422,551,430,550,439,549,449,548,458,547,468,547,474,546,486,546,498,546,511,546,523,546,543,546,556,546,573,546,584,546,597,546,603,546,611,546,621,547,647,548,667,549,692,550,713,551,743,553,770,554,789,555,803,556,821,557,833,558,845,560,864,561,877,562,891,564,907]},
        { name: EntryData.EntryRoomIds.mail_room, shape: "poly", coords: [2619,995,2620,986,2622,978,2624,967,2626,956,2628,945,2629,936,2630,925,2631,912,2632,899,2633,886,2634,876,2635,865,2636,856,2637,844,2638,833,2639,820,2640,810,2641,799,2642,785,2643,772,2644,757,2645,744,2645,730,2645,719,2645,710,2645,700,2646,691,2646,681,2646,669,2646,660,2646,650,2646,642,2646,634,2646,622,2646,610,2646,597,2645,585,2645,574,2645,564,2645,555,2644,546,2644,536,2644,528,2643,519,2643,509,2643,501,2642,494,2642,487,2641,478,2641,470,2641,460,2640,448,2640,440,2639,429,2638,419,2638,410,2636,401,2635,391,2826,368,2828,375,2830,381,2833,389,2836,396,2838,405,2841,413,2843,423,2845,432,2847,441,2849,450,2851,460,2853,468,2854,475,2856,486,2857,495,2858,506,2859,515,2860,522,2860,526,2861,537,2861,544,2862,554,2863,561,2864,571,2864,578,2865,584,2865,591,2865,597,2866,607,2866,609,2866,617,2866,624,2866,630,2866,638,2866,645,2866,653,2866,662,2866,670,2866,680,2866,690,2866,701,2866,711,2865,722,2865,732,2865,742,2864,756,2863,764,2862,775,2861,787,2860,797,2860,806,2859,814,2858,828,2857,837,2856,845,2855,857,2854,870,2853,881,2852,889,2850,900,2849,910,2847,921,2846,932,2844,944,2843,954,2842,964,2841,972,2840,978,2839,986,2838,995,2837,1002,2836,1008,2834,1017,2833,1024,2831,1033,2829,1041,2828,1048,2827,1055,2826,1064,2824,1073,2823,1081,2822,1087,2821,1091]},
      ] as RoomObject[]
    };
  }
  
