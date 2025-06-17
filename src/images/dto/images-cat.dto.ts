import { Breeds } from "src/cats/dto/breeds-cat.dto";

export interface ImagesCat {
  id:     string;
  url:    string;
  breeds: Breeds[];
  width:  number;
  height: number;
}

