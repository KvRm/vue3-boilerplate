import type { Markers } from '@/types/initialization.types';
import type { TemplatorVar } from '@/types/variable.types';

export interface Catalogs {
  id: number;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: number;
  updated_at: number;
  sort: number;
  type: string;
  can_add_elements: boolean;
  can_show_in_cards: boolean;
  can_link_multiple: boolean;
  can_be_deleted: boolean;
  sdk_widget_code: null | number;
  account_id: number;
}

export interface Constructor {
  vars: TemplatorVar[];
  modificators: Modificator[];
  markers: Markers;
}

export interface Modificator {
  id: number;
  name: string;
  value: string;
  description: string;
  examples: any;
}
