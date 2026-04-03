export interface Resource {
  name: string;
  description: string;
  url: string;
  logo?: string;
}

export interface Category {
  name: string;
  resources: Resource[];
  icon: {
    type: "lucide" | "url" | "local";
    value: string;
  };
}

import categoriesData from "./resources.json";

export const categories: Category[] = categoriesData as Category[];
