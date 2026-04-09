export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  isNew?: boolean;
}

export interface Category {
  name: string;
  resources: Resource[];
  icon: {
    type: "lucide" | "url" | "local";
    value: string;
  };
}

const API_URL = "https://reacttoolkit.vercel.app/api/resources";

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`API responded ${res.status}`);
  const data = (await res.json()) as any[];
  return data.map((cat) => ({
    name: cat.name,
    icon: { type: "lucide" as const, value: cat.icon },
    resources: (cat.resources_view ?? []).map((r: any) => ({
      id: String(r.id),
      name: r.name,
      description: r.description,
      url: r.url,
      logo: r.logo_url ?? undefined,
      isNew: r.is_new ?? false,
    })),
  }));
}

export let categories: Category[] = [];
export function setCategories(cats: Category[]): void {
  categories = cats;
}
