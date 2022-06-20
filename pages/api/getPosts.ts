// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../utils/sanity';
import { groq } from 'next-sanity';
import { Facebook } from '../../utils/typing';

const postQuery = groq`
*[_type == "facebook" && !blockPost]{
    _id,
    ...
} | order(_createdAt desc)
`;

type Data = {
  posts: Facebook[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const posts: Facebook[] = await sanityClient.fetch(postQuery);
  res.status(200).json({ posts });
}
