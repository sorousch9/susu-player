import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  isPlaying: boolean;
  volume: number;
  duration: number;
  isRandom: boolean;
  currentTime: number;
  isMuted: boolean;
  currentMusic: string;
}

const initialState: PlayerState = {
  isPlaying: false,
  volume: 1,
  duration: 0,
  isRandom: false,
  currentTime: 0,
  isMuted: false,
  currentMusic: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setIsRandom: (state, action: PayloadAction<boolean>) => {
      state.isRandom = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setIsMuted: (state, action: PayloadAction<boolean>) => {
      state.isMuted = action.payload;
    },
    setCurrentMusic: (state, action: PayloadAction<string>) => {
      state.currentMusic = action.payload;
    },
  },
});

export const {
  setIsPlaying,
  setVolume,
  setDuration,
  setIsRandom,
  setCurrentTime,
  setIsMuted,
  setCurrentMusic,
} = playerSlice.actions;
const playerReducer = playerSlice.reducer;
const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store;
