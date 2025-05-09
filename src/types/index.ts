//API service
export type Headers = {
  Accept: string;
  "Content-Type": string;
};

export type Payload = {
  [key: string]: any;
};

//Redux
export type SpaceState = {
  spaces: SpaceDetailsType[];
};

//Feature Section
export interface FeatureCardProps {
  id: number;
  icon: string;
  title: string;
}

//Space Section
interface DayPassDiscount {
  value: number;
  message: string;
}

interface DayPassDiscountsPercentage {
  [key: string]: DayPassDiscount;
}

export interface SpaceDetailsType {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name?: string;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: DayPassDiscountsPercentage;
  manager_id: string | null;
  can_edit?: boolean;
}
