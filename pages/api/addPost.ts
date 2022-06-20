// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { FacebookBody } from '../../utils/typing';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: FacebookBody = JSON.parse(req.body);

  const mutations = {
    mutations: [
      {
        create: {
          _type: 'facebook',
          post: data.post,
          username: data.username,
          blockPost: false,
          profileImage: data.profileImage,
          postImage: data.postImage,
        },
      },
    ],
  };
  const apiEndPoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

  const resulut = await fetch(apiEndPoint, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: 'POST',
  });
  const json = await resulut.json();
  res.status(200).json({ message: 'Posted' });
}
