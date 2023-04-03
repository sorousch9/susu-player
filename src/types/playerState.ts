import { MusicType } from "./music";

export interface PlayerState {
    currentMusic: MusicType | null;
    volume: number;
    isRandom: boolean;
    isMuted: boolean;
}
