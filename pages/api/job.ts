import { NextApiRequest, NextApiResponse } from "next";
import { headers, usaJobsApi } from "../../lib/constants";
import { ApiError, JobsApiResponse, Results } from "../../lib/types/jobsApiTypes";
import { UsaJobsApiResponse } from "../../lib/types/usajobsApiTypes";
import { mapUsaJobsSearchResults } from "../../lib/utils/mappers/dataMapper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobsApiResponse>
) {
  console.log(req.query);
  const url = usaJobsApi + '?Keyword=' + req.query.id;

  const request = await fetch(url, { method: 'GET', headers });

  if (!request.ok) {
    const apiError: ApiError = { code: request.status, message: request.statusText };
    res.status(request.status).json({ result: apiError });
  }

  const usaJobsApiResponse = await request.json() as UsaJobsApiResponse;  

  // don't actually want to map data down to minimal form. want full data blob
  const data = mapUsaJobsSearchResults(usaJobsApiResponse.SearchResult);

  res.status(200).json({ result: data });
}