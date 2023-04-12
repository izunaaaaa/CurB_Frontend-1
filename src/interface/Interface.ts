import { RefObject } from "react";

export interface User {
  avatar: any;
  email: string;
  is_coach: boolean;
  name: string;
  username: string;
}

export interface Feed {
  id: number;
  user: User;
  group: { pk: number; name: string; members_count: number };
  title: string;
  description: string;
  visited: number;
  created_at: string;
  comments_count: number;
  highest_like_comments: [
    {
      id: number;
      description: string;
      created_at: string;
      commentlikeCount: number;
    }
  ];
  is_liked: boolean;
  like_count: number;
  thumbnail: any;
  category: { id: number; name: string };
}
export interface FeedDetail {
  id: number;
  user: User;
  group: { pk: number; name: string; members_count: number };
  category: { id: number; name: string };
  title: string;
  description: string;
  visited: number;
  created_at: string;
  like_count: number;
  comments_count: number;
  comment: [
    {
      id: number;
      description: number;
      created_at: string;
      commentlikeCount: number;
    }
  ];
  highest_like_comments: [
    {
      id: number;
      user: {
        username: string;
        name: any;
        email: string;
        avatar: any;
        is_coach: boolean;
      };
      description: string;
      created_at: string;
      commentlikeCount: number;
    }
  ];

  is_like: boolean;
  thumbnail: any;
}
export interface comment {
  id: number;
  created_at: string;
  description: string;
  user: string;
  feed: string;
}

export interface FormValue {
  Id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone_number: string;
  email: string;
  gender: string;
  group: number;
  is_coach: boolean;
}

export interface UplaodFeedValue {}

export interface CropAttribute {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Message {
  title: string;
  content: string;
  date: Date;
}

export interface SidebarProps {
  sidebar: boolean;
  setSidebar: (dropDown: boolean) => void;
}

export interface ListItem {
  id: number;
  title: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export type Note = {
  id: number;
  title: string;
  content: string;
  date: Date;
};

export interface MockUser {
  name: string;
  avatar: string;
  isMe: boolean;
}

export interface MockCont {
  id: number;
  user: MockUser;
  content: string;
  time: string;
}

export interface Letterlists {
  id: number;
  create_at: any;
  update_at: any;
  sender: number;
  receiver: number;
}
