import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MusicType } from "../types/music";

interface AddMusicPayload {
  music: MusicType;
}
interface PlaylistState {
  musics: MusicType[];
}

const initialState: PlaylistState = {
  musics: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addToPlaylist: (state, action: PayloadAction<AddMusicPayload>) => {
      const { music } = action.payload;
      const existingMusic = state.musics.find((m) => m.id === music.id);
      if (!existingMusic) {
        state.musics.push(music);
      }
    },

    removeFromPlaylist: (state, action: PayloadAction<string>) => {
      state.musics = state.musics.filter(
        (music) => music.id !== action.payload
      );
    },
  },
});

export const { addToPlaylist, removeFromPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
