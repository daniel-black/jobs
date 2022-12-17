import type { NextApiRequest, NextApiResponse } from 'next';
import { headers, usaJobsApi } from '../../lib/constants';
import { ApiError, JobsApiResponse } from '../../lib/types/jobsApiTypes';
import { UsaJobsApiResponse } from '../../lib/types/usajobsApiTypes';
import { createUrlSearchParams } from '../../lib/utils/api-utils';
import { mapUsaJobsSearchResults } from '../../lib/utils/mappers/dataMapper';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobsApiResponse>
) {
  console.log('API HIT!!')
  const urlSearchParams = createUrlSearchParams(req.query);
  const url = usaJobsApi + '?' + urlSearchParams.toString();

  const request = await fetch(url, { method: 'GET', headers });

  if (!request.ok) {
    const apiError: ApiError = { code: request.status, message: request.statusText };
    res.status(request.status).json({ result: apiError });
  }

  const usaJobsApiResponse = await request.json() as UsaJobsApiResponse;  

  const data = mapUsaJobsSearchResults(usaJobsApiResponse.SearchResult);

  res.status(200).json({ result: data });
}
