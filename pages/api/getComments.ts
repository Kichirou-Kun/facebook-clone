// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../utils/sanity';
import { Comment } from '../../utils/typing';

const commentQuery = groq`
*[_type == "comment" && references(*[_type == "facebook" && _id == $postId]._id)]{
    _id,
    ...
}| order(_createdAt desc)
`;

type Data = Comment[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { postId } = req.query;
  const comments: Comment[] = await sanityClient.fetch(commentQuery, {
    postId,
  });

  res.status(200).json(comments);
}
