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
   
  },
});

export const { addMusic } =
  playerSlice.actions;
export default playerSlice.reducer;
