import { Comment } from '../typing';

export const fetchCommentApi = async (postId: string) => {
  const resp = await fetch(`/api/getComments?postId=${postId}`);
  const comments: Comment[] = await resp.json();
  return comments;
};
