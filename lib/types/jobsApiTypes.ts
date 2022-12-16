// These types correspond to the data I send back to my UI after mapping the response from usajobs api

export type ApiError = {
  code: number;
  message: string;
};

export type JobsApiResponse = {
  result: Results | ApiError;
};

export type Results = {
  count: number;
  countAll: number;
  jobs?: Job[];
};

export interface Job {
  id: string;
  title: string;
  location: Location[];
  summary: string;
  pay: Pay;
  isRemote: boolean;
};

export interface JobDetailed extends Job {
  agency: Agency;
  dept: string;
  org: string;
  usajobsUri: string;
  startDate: string;
  endDate: string;
  qualifications: string;
  education: string;
  evaluations: string;
  howToApply: string;
  whatToExpectNext: string;
  majorDuties: string[];
  openings: number;
};

export type Location = {
  city: string;
  displayName: string;
};

export type Pay = {
  rate: 'h' | 'y';
  min: string;
  max: string;
};

export type Agency = {
  email: string;
  phone: string;
  blurb: string;
};