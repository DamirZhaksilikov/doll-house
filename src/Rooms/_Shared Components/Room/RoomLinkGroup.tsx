import { RoomLink } from "./RoomLink";

export interface RoomLinkGroup {
    id: string;
    subtext?: string;
    links: RoomLink[];
}