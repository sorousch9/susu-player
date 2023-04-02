import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MusicType {
  id: string;
  title: string;
  artist: string;
  album: string;
  author: string;
  album_img: string;
  audio: string;
  genre: string;
}

export interface PlayerState {
  currentMusic: MusicType | null;
  isPlaying: boolean;
  volume: number;
  isRandom: boolean;
  isMuted: boolean;
}

const initialState: PlayerState = {
  currentMusic: null,
  isPlaying: false,
  volume: 1,
  isRandom: false,
  isMuted: false,
};
export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addMusic: (state, action: PayloadAction<MusicType>) => {
      const item = action.payload;
      if (state.currentMusic !== null) {
        const existingMusic = state.currentMusic.find(
          (music) => music.id === item.id
        );
        if (!existingMusic) {
          state.currentMusic = item;
        }
      } else {
        state.currentMusic = item;
      }
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },

    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },

    setIsRandom: (state, action: PayloadAction<boolean>) => {
      state.isRandom = action.payload;
    },

    setIsMuted: (state, action: PayloadAction<boolean>) => {
      state.isMuted = action.payload;
    },
  },
});

export const { addMusic, setIsPlaying, setVolume, setIsRandom, setIsMuted } =
  playerSlice.actions;
export default playerSlice.reducer;
