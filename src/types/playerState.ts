import { MusicType } from "./music";

export interface PlayerState {
    currentMusic: MusicType | null;
    isPlaying: boolean;
    volume: number;
    isRandom: boolean;
    isMuted: boolean;
}
