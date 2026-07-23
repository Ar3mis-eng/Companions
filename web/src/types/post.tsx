export interface FeedPost {
  id: number;
  user: string;
  age: number;
  initials: string;
  avatarClass: string;
  time: string;
  location: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  comments: number;
  match: string;
}