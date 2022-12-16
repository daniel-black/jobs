import { LIVE_BASE_URL, LOCAL_BASE_URL } from "../constants";

export const isDev = (): boolean => process.env.NODE_ENV === 'development';

export const getBaseUrl = (): string => (isDev() ? LOCAL_BASE_URL : LIVE_BASE_URL);
