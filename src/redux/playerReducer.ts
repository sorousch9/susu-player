import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "../types/playerState";
import { MusicType } from "../types/music";

const initialState: PlayerState = {
  currentMusic: null,
  isPlaying: false,
  volume: 1,
  isRandom: false,
  isMuted: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addMusic: (state, action: PayloadAction<MusicType>) => {
      state.currentMusic ||= action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state = { ...state, isPlaying: action.payload };
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state = { ...state, volume: action.payload ?? state.volume };
    },
    setIsRandom: (state, action: PayloadAction<boolean>) => {
      state = { ...state, isRandom: action.payload };
    },
    setIsMuted: (state, action: PayloadAction<boolean>) => {
      state = { ...state, isMuted: action.payload };
    },
  },
});

export const { addMusic, setIsPlaying, setVolume, setIsRandom, setIsMuted } =
  playerSlice.actions;
export default playerSlice.reducer;
