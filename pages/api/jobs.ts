import type { NextApiRequest, NextApiResponse } from 'next';

type JobsApiResponse = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobsApiResponse>
) {
  res.status(200).json({ name: 'hi' });
}
