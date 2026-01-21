
export interface NutrientInfo {
  protein: string;
  carb: string;
  fat: string;
  fiber?: string;
  kcal: string;
}

export interface FoodItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  nutrients: NutrientInfo;
  tag?: string;
  image: string;
  isVeg: boolean;
  isBestMatch?: boolean;
  description?: string;
  category: string;
}
