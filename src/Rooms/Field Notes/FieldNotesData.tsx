<<<<<<< HEAD
import { RoomLink } from "../_Shared Components/RoomLink";
import { RoomObject } from "../_Shared Components/RoomObject";

=======
>>>>>>> parent of 2aec593... Completed rec room and field notes mapping
export interface FieldNotesLinkObject {
  LinkText: string;
  IsPublic: boolean;
}

export class FieldNotesData {
    public static FieldNotesBehindDoor = "studio"
  
    public static FieldNotesTitle = "Field Notes";
    public static FieldNotesInfo = "This room is a collection of things that move me. Curated by me and my community. Select an object to get started.";
<<<<<<< HEAD
    
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
=======
    public static FieldNotesLinks = {
      Observations: {
        LinkText: "Essays and observations",
        IsPublic: true
      },
      WorkNotes: {
        LinkText: "Work notes, sketches",
        IsPublic: true       
>>>>>>> parent of 2aec593... Completed rec room and field notes mapping
      },
      Intimacies: {
        LinkText: "Intimacies, private notes",
        IsPublic: false
      },
<<<<<<< HEAD
      {
        id: FieldNotesData.FieldNotesIds.rec_room,
        isDoor: true,
        isBehindDoor: false,
=======
      PrivateEssays: {
        LinkText: "Personal essays",
        IsPublic: false
>>>>>>> parent of 2aec593... Completed rec room and field notes mapping
      }
    }

    public static Public = "(public)";
    public static Private = "(private)"

    public static IllustrationSource = "/designs/Room Illustrations/Field Notes/Room Illustrations_Field Notes.png";
    public static MapCoordinates = { 
      name: "fieldNotesMap",
      areas: [
<<<<<<< HEAD
        { name: FieldNotesData.FieldNotesIds.rec_room, shape: "poly", coords: [2771,970,2779,367,2779,358,2780,348,2782,342,2785,336,2789,332,2798,328,2805,327,2812,326,2820,326,2830,326,2841,327,2856,328,2877,331,2917,336,2932,340,2942,343,2951,347,2959,354,2966,364,2968,374,2970,386,2972,398,2973,408,2973,422,2973,446,2970,1152]},
        
        { name: FieldNotesData.FieldNotesIds.observations, isDoor: false, shape: "rect", coords: [488,616,962,1192]},
        { name: FieldNotesData.FieldNotesIds.personal_essays, isDoor: false, shape: "rect", coords: [1152,662,1610,826]},
        { name: FieldNotesData.FieldNotesIds.intimacies, isDoor: false, shape: "rect", coords: [1708,746,2324,1112]},
        { name: FieldNotesData.FieldNotesIds.work_notes, isDoor: false, shape: "rect", coords: [1764,552,1938,724]}    
      ] as RoomObject[]
=======
        { name: "recRoom", isDoor: true, shape: "poly", coords: [2771,970,2779,367,2779,358,2780,348,2782,342,2785,336,2789,332,2798,328,2805,327,2812,326,2820,326,2830,326,2841,327,2856,328,2877,331,2917,336,2932,340,2942,343,2951,347,2959,354,2966,364,2968,374,2970,386,2972,398,2973,408,2973,422,2973,446,2970,1152]},
        
        { name: "bottles", isDoor: false, shape: "rect", coords: [488,616,962,1192]},
        { name: "briefcase", isDoor: false, shape: "rect", coords: [1152,662,1610,826]},
        { name: "hourglass", isDoor: false, shape: "rect", coords: [1708,746,2324,1112]},
        { name: "filingCabinet", isDoor: false, shape: "rect", coords: [1764,552,1938,724]}    
      ]
>>>>>>> parent of 2aec593... Completed rec room and field notes mapping
    };
  }
  
  /*
    <area shape="rect" coords="488,616,962,1192" href="#" id="bottles">
    <area shape="rect" coords="1152,662,1610,826" href="#" id="briefcase">
    <area shape="rect" coords="1708,746,2324,1112" href="#" id="hourglass">
    <area shape="rect" coords="1764,552,1938,724" href="#" id="filingCabinet">
  */
  
  