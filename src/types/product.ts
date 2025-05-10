
export type Category = "sport" | "cruiser" | "touring" | "adventure" | "naked" | "electric" | "custom";

export type Manufacturer = "Honda" | "Yamaha" | "Kawasaki" | "Suzuki" | "Ducati" | "BMW" | "KTM" | "Triumph" | "Harley-Davidson" | "Royal Enfield" | "TVS" | "Bajaj";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  discount?: number;
  category: Category;
  manufacturer: Manufacturer;
  engineSize: string;
  power: string;
  topSpeed: string;
  weight: string;
  fuelCapacity: string;
  images: string[];
  colors: string[];
  stock: number;
  ratings: number;
  reviews: number;
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
}
