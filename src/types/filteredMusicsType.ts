import { MusicType } from "./music";

export type FilteredMusicsType = {
  topMusics: MusicType[];
  exclusive: MusicType[];
  remix: MusicType[];
};
