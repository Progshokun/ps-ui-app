export interface ICategory {
  title: string;
  slug: TCategorySlug;
}

export type TCategorySlug =
  | "all"
  | "racing"
  | "roleplaying"
  | "sports"
  | "online"
  | "shooter";
