import { RoomLink } from "../_Shared Components/Room/RoomLink";
import { RoomObject } from "../_Shared Components/Room/RoomObject";

export interface FieldNotesLinkObject {
  LinkText: string;
  IsPublic: boolean;
}

export class FieldNotesData {
    public static FieldNotesBehindDoor = "studio"
  
    public static FieldNotesTitle = "Field Notes";
    public static FieldNotesInfo = "A room as a public journal. Private entries are available to those that are close to me.";
    public static SecretsBlurb = "How do we keep our secrets? In truth, there’s no real way to measure this. We confide when we need to, but I think the best barometer to determine who’s most likely to be the recipient of our next secrets is measured by who is already keeping our previous ones. With these people, there’s no need to wonder about trust. It’s another drop in the bucket. So, a kind of security question: correctly reveal a secret of mine and you’ll get access to more.";

    public static Secret1Question = "What was I leaving on kitchen countertops in 2017?";
    public static Secret1HintText = "hint (audio): two words. similar shape, opposite taste."

    public static SecretAnswerPlaceHolder = "Write your answer here"
    public static SubmitText = "submit";

    public static FieldNotesIds = {
      observations: "observations",
      work_notes: "work_notes",
      intimacies: "intimacies",
      personal_essays: "personal_essays",
      studio: "studio",
      rec_room: "rec_room"
    }

      
    public static Public = "(public)";
    public static Private = "(private)"

    public static FieldNotesLinks = [
      {
        id: FieldNotesData.FieldNotesIds.observations,
        isDoor: false,
        isBehindDoor: false,
        text: "Essays and observations",
        subText: FieldNotesData.Public
      },
      {
        id: FieldNotesData.FieldNotesIds.work_notes,
        isDoor: false,
        isBehindDoor: false,
        text: "Work notes, sketches",
        subText: FieldNotesData.Public
      },      
      {
        id: FieldNotesData.FieldNotesIds.intimacies,
        isDoor: false,
        isBehindDoor: false,
        text: "Intimacies, private notes",
        subText: FieldNotesData.Private
      },
      {
        id: FieldNotesData.FieldNotesIds.personal_essays,
        isDoor: false,
        isBehindDoor: false,
        text: "Personal essays",
        subText: FieldNotesData.Private
      },
      {
        id: FieldNotesData.FieldNotesIds.studio,
        isDoor: true,
        isBehindDoor: true,
      },
      {
        id: FieldNotesData.FieldNotesIds.rec_room,
        isDoor: true,
        isBehindDoor: false,
      }
  
    ] as RoomLink[];

    public static IllustrationSource = `${process.env.PUBLIC_URL}/designs/Room Illustrations/Field Notes/Room Illustrations_Field Notes.png`;
    public static FieldNotesMapDocumentSource = `${process.env.PUBLIC_URL}/documents/Field Notes/Field Notes Map/Field_Notes_Map`;    
    public static IntimaciesCoverImageSource = `${process.env.PUBLIC_URL}/documents/Field Notes/Intimacies/Intimacies Cover.jpeg`;    
    
    public static PlayIcon = `${process.env.PUBLIC_URL}/designs/Icons/Play.png`;    
    
    public static MapCoordinates = { 
      name: "fieldNotesMap",
      areas: [
        { name: FieldNotesData.FieldNotesIds.rec_room, shape: "poly", coords: [2771,970,2779,367,2779,358,2780,348,2782,342,2785,336,2789,332,2798,328,2805,327,2812,326,2820,326,2830,326,2841,327,2856,328,2877,331,2917,336,2932,340,2942,343,2951,347,2959,354,2966,364,2968,374,2970,386,2972,398,2973,408,2973,422,2973,446,2970,1152]},
        
        { name: FieldNotesData.FieldNotesIds.observations, isDoor: false, shape: "rect", coords: [488,616,962,1192]},
        { name: FieldNotesData.FieldNotesIds.personal_essays, isDoor: false, shape: "rect", coords: [1152,662,1610,826]},
        { name: FieldNotesData.FieldNotesIds.intimacies, isDoor: false, shape: "rect", coords: [1708,746,2324,1112]},
        { name: FieldNotesData.FieldNotesIds.work_notes, isDoor: false, shape: "rect", coords: [1764,552,1938,724]}    
      ] as RoomObject[]
    };
  }