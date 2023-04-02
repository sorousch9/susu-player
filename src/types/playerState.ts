import { MusicType } from "./music";

export interface PlayerState {
  currentMusic: MusicType;
  isPlaying: boolean;
  volume: number;
  duration: number;
  isRandom: boolean;
  currentTime: number;
  isMuted: boolean;
}
