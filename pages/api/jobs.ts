import type { NextApiRequest, NextApiResponse } from 'next';

type JobsApiResponse = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobsApiResponse>
) {

  const apiKey = process.env.USAJOBS_API_KEY;
  console.log(`api key: "${apiKey}"`);

  // this is dumb but I'm doing it to see if vercel has my env vars like they should
  res.status(200).json({ name: `apiKey: "${apiKey}"` });
}
