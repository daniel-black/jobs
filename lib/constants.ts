export const USER_AGENT = 'drblack651@gmail.com';
export const API_KEY = process.env.USAJOBS_API_KEY;
export const HOST = 'data.usajobs.gov';

export const usaJobsApi = `https://${HOST}/api/search`;
export const headers = {
  'Host': HOST,
  'Authorization-Key': API_KEY,
  'User-Agent': USER_AGENT,
  'Content-Type': 'application/json',
} as HeadersInit;

export const PARAMETERS = ['Keyword', 'PositionTitle', 'LocationName'];