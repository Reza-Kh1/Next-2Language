import { CalendarDate } from "@nextui-org/react";
type OptionsGetAllMeta = {
  meta: {
    current_page: number;
    from: null;
    last_page: number;
    links: [
      {
        url: null;
        label: string;
        active: boolean;
      },
      {
        url: string;
        label: string;
        active: boolean;
      },
      {
        url: null;
        label: string;
        active: boolean;
      }
    ];
    path: string;
    per_page: number;
    to: null | number;
    total: number;
  };
};
type OptionsGetAllLinks = {
  links: {
    first: string;
    last: string;
    prev: number | null;
    next: number | null;
  };
};
type UserType = {
  created_at: Date;
  id: number;
  remember_token: string | null;
  token: string | null;
  updated_at: Date;
  user_type: "admin" | "normal";
  username: string;
  name: string;
};
type ProducrtType = {
  fa_name: string;
  en_name: string;
  fa_short_description: string;
  en_short_description: string;
  fa_description: string;
  en_description: string;
  technologies: string;
  technologies_url: string;
  picture: string;
  support_time: string;
  support_type: string;
  price: string;
  id: number;
  download_count: string;
  creator_id: string;
  creator: string;
  download_url: string;
  updated_at: Date;
};
type CreaterType = {
  created_at: Date;
  id: number;
  remember_token: null | string;
  token: null | string;
  updated_at: Date;
  user_type: string;
  username: string;
};
type BlogType = {
  author: AuthorType;
  id: number;
  picture: string;
  fa_title: string;
  en_title: string;
  fa_content: string;
  en_content: string;
  categories: string;
  read_time: string;
  author_id: string;
  tags: string;
  updated_at:Date
};
type AllBlogType = {
  data: BlogType[];
  meta: OptionsGetAllMeta;
  links: OptionsGetAllLinks;
};
type ProjectType = {
  fa_title: string;
  en_title: string;
  fa_description: string;
  en_description: string;
  picture: string;
  categories: string;
  time_to_do: string;
  technologies: string[];
  technology_icons: string;
  programmer_rules: string;
  start_date: CalendarDate | null;
  end_date: CalendarDate | null;
};
type AuthorType = {
  created_at: Date;
  id: number;
  remember_token: string | null;
  token: string | null;
  updated_at: Date;
  user_type: string;
  username: string;
};
type AllProjectType = {};
export type {
  ProducrtType,
  CreaterType,
  BlogType,
  AllBlogType,
  ProjectType,
  UserType,
  OptionsGetAllMeta,
  OptionsGetAllLinks,
};
