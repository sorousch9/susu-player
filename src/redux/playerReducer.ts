import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "../types/playerState";
import { MusicType } from "../types/music";

interface AddMusicPayload {
  music: MusicType;
}

const initialState: PlayerState = {
  currentMusic: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addToPlayer: (state, action: PayloadAction<AddMusicPayload>) => {
      const { music } = action.payload;
      state.currentMusic = music;
    },
  },
});

export const { addToPlayer } = playerSlice.actions;
export default playerSlice.reducer;
