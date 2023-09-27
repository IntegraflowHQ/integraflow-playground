import { Survey } from '@integraflow/web';

export enum PlacementTypes {
  BOTTOM_LEFT = 'bottomLeft',
  BOTTOM_RIGHT = 'bottomRight',
  TOP_LEFT = 'topLeft',
  TOP_RIGHT = 'topRight',
  CENTER = 'center',
}

export type ThemeOption =
  | 'question'
  | 'answer'
  | 'button'
  | 'background'
  | 'progressBar';

type Objective =
  | 'increase_user_adoption'
  | 'increase_conversion'
  | 'support_sales'
  | 'sharpen_marketing_messaging'
  | 'improve_user_retention'
  | 'other';

export interface FilterOptions {
  category?: string;
  subcategory?: string | string[];
}

export interface Template {
  name: string;
  description: string;
  icon?: any;
  category:
    | 'Product Experience'
    | 'Exploration'
    | 'Growth'
    | 'Increase Revenue'
    | 'Customer Success';
  subcategory?: string[];
  objectives?: [Objective, Objective?, Objective?];
  survey: Survey;
}
