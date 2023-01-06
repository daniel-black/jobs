import { NextApiRequest, NextApiResponse } from "next";
import { headers, usaJobsApi } from "../../lib/constants";
import { ApiError, JobsApiResponse } from "../../lib/types/jobsApiTypes";
import { UsaJobsApiResponse } from "../../lib/types/usajobsApiTypes";
import { mapSingleJob } from "../../lib/utils/mappers/dataMapper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobsApiResponse>
) {
  const url = usaJobsApi + '?Keyword=' + req.query.id;

  const request = await fetch(url, { method: 'GET', headers });

  if (!request.ok) {
    const apiError: ApiError = { code: request.status, message: request.statusText };
    res.status(request.status).json({ result: apiError });
  }

  const usaJobsApiResponse = await request.json() as UsaJobsApiResponse;
  const detailedJobData = mapSingleJob(usaJobsApiResponse.SearchResult.SearchResultItems[0]);

  res.status(200).json({ result: detailedJobData });
}