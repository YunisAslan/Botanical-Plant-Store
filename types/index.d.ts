export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: string;
};

export type DocsConfig = {
  mainNav: NavItem[];
  dashboardNav: NavItem[];
};

// ------------------------------

export type SiteConfig = {
  url: string;
  github: string;
  linkedin: string;
};

// --------------------------------------------------

type Product = {
  id?: string;
  plant_category: "cactus" | "aloe" | "rose" | "orchids" | "xerophytes";
  plant_name: string;
  plant_price: number;
  stock_quantity?: number;
  description: string;
  img_url: string;
  created_at: any;
};

// Validations ----

// type SearchParams = {};
