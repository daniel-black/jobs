import { PARAMETERS } from '../constants';

export function isValidParameter(p: string): boolean {
  return PARAMETERS.includes(p);
}

// this is kinda messy. should also take in res object
// and send errors back with it.
export function createUrlSearchParams(query: 
  Partial<{[key: string]: string | string[];}>
): URLSearchParams {
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

    urlSearchParams.append(k, String(query[k]));
  }

  return urlSearchParams;
}