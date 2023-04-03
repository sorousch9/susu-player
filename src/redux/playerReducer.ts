import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "../types/playerState";
import { MusicType } from "../types/music";

interface AddMusicPayload {
  music: MusicType;
}

const initialState: PlayerState = {
  currentMusic: null
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addMusic: (state, action: PayloadAction<AddMusicPayload>) => {
      const { music } = action.payload;
      if (!state.currentMusic) {
        state.currentMusic = music;
      }
    }
  },
});

export const { addMusic } = playerSlice.actions;
export default playerSlice.reducer;
