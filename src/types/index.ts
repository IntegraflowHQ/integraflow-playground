import { Survey } from "@integraflow/web";

export type LibrarySurvey = {
  id: string;
  name: string;
  comment: string;
  type: string;
  library_excerpt: string;
  library_quick_tips: string[];
  points_count: number;
  thumbnail_url: string;
  category_ids: number[];
  subcategory_ids: number[];
  has_sample_results: boolean;
  first_point: string;
};

export enum PlacementTypes {
  BOTTOM_LEFT = "bottomLeft",
  BOTTOM_RIGHT = "bottomRight",
  TOP_LEFT = "topLeft",
  TOP_RIGHT = "topRight",
  CENTER = "center",
}

export type ThemeOption =
  | "question"
  | "answer"
  | "button"
  | "background"
  | "progressBar";

type Objective =
  | "increase_user_adoption"
  | "increase_conversion"
  | "support_sales"
  | "sharpen_marketing_messaging"
  | "improve_user_retention"
  | "other";

export interface FilterOptions {
  category?: string;
  subcategory?: string | string[];
}

export interface Template {
  name: string;
  description: string;
  icon?: any;
  category: string;
  subcategory?: string[];
  survey: Survey;
}
