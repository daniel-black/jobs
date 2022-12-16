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
  const urlSearchParams = createUrlSearchParams(req.query);
  const url = usaJobsApi + '?' + urlSearchParams.toString();

  const request = await fetch(url, { method: 'GET', headers });
  const data = await request.json();

  res.status(200).json({ result: data });
}
