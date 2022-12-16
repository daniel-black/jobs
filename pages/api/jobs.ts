import type { NextApiRequest, NextApiResponse } from 'next';
import { HOST, usaJobsApi, USER_AGENT } from '../../lib/constants';

type JobsApiResponse = {
  result: any;
};

const parameters = ['Keyword', 'PositionTitle', 'LocationName'];

function isValidParameter(p: string): boolean {
  return parameters.includes(p);
} 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobsApiResponse>
) {
  const API_KEY = process.env.USAJOBS_API_KEY;
  if (!API_KEY) {
    throw new Error('No API key present');
  }

  // Grab the query object off of the request
  const { query } = req;

  // Validate the query object
  const queryKeys = Object.keys(query);
  if (queryKeys.length === 0)
    throw new Error('No query parameters were provided');

  const urlSearchParams = new URLSearchParams();
  for (const k of queryKeys) {
    if (!isValidParameter(k))
      throw new Error(`"${k}" is not a valid search parameter`);

    if (typeof query[k] !== 'string')
      throw new Error('Parameter values must be strings');

    urlSearchParams.append(k, query[k]);
  }

  const url = usaJobsApi + '?' + urlSearchParams.toString();
  
  
  const request = await fetch(url, {
    method: 'GET',
    headers: {
      'Host': HOST,
      'Authorization-Key': API_KEY,
      'User-Agent': USER_AGENT,
      'Content-Type': 'application/json',
    }
  });
  const data = await request.json();

  res.status(200).json({ result: data });
}
