import {CategoryModel} from "./category.model";

export interface NoteModel {
  id?: number;
  content: string;
  category?: CategoryModel;
  tagList?: string[];
}
