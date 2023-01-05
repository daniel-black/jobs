import { LIVE_BASE_URL, LOCAL_BASE_URL } from "../constants";

export const isDev = (): boolean => process.env.NODE_ENV === 'development';

export const getBaseUrl = (): string => (isDev() ? LOCAL_BASE_URL : LIVE_BASE_URL);

export function clientCreateSearchParams(title: string, location: string, keyword: string): string {
  const urlSearchParams = new URLSearchParams();

  if (title !== '') urlSearchParams.append('PositionTitle', title);
  if (location !== '') urlSearchParams.append('LocationName', location);
  if (keyword !== '') urlSearchParams.append('Keyword', keyword);

  return urlSearchParams.toString();
}