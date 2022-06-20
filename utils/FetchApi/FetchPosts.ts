import { Facebook } from '../typing';

export const fetchPostApi = async () => {
  const rep = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPosts`);
  const data = await rep.json();
  const result: Facebook[] = data.posts;
  return result;
};
