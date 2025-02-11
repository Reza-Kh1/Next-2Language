import { CalendarDate } from "@nextui-org/react";

type ProducrtType = {
  // created_at: Date;
  // creator: CreaterType;
  // creator_id: string;
  // description: string;
  // download_count: string;
  // download_url: string;
  // id: 1;
  // name: string;
  // price: string;
  // rank: string;
  // short_description: string;
  // updated_at: Date;
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
  picture: string;
  fa_title: string;
  en_title: string;
  fa_content: string;
  en_content: string;
  categories: string;
  read_time: string;
  author_id: string;
  tags: string[];
};
type AllBlogType = {
  data: BlogType[];
  links: {
    first: string;
    last: string;
    prev: number | null;
    next: number | null;
  };
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
type AllProjectType = {};
export type { ProducrtType, CreaterType, BlogType, AllBlogType, ProjectType };
