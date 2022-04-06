import { Comment } from "../comment/Comment";
import { Community } from "../community/Community";
import { User } from "../user/User";

export type Post = {
  comments?: Array<Comment>;
  community?: Community;
  createdAt: Date;
  creator?: User;
  id: string;
  title: string;
  updatedAt: Date;
};