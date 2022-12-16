import type { NextApiRequest, NextApiResponse } from 'next';
import { headers, usaJobsApi } from '../../lib/constants';
import { createUrlSearchParams } from '../../lib/utils/api-utils';

type JobsApiResponse = {
  result: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobsApiResponse>
) {
  const API_KEY = process.env.USAJOBS_API_KEY;
  if (!API_KEY) {
    throw new Error('No API key present');
  }

  const urlSearchParams = createUrlSearchParams(req.query);
  const url = usaJobsApi + '?' + urlSearchParams.toString();

  const request = await fetch(url, { method: 'GET', headers });
  const data = await request.json();

  res.status(200).json({ result: data });
}
