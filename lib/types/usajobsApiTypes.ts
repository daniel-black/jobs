// These types correspond to the data returned from calls to the usajobs api

export type UsaJobsApiResponse = {
  SearchResult: UsaJobsSearchResult;

};

export type UsaJobsSearchResult = {
  SearchResultCount: number;
  SearchResultCountAll: number;
  SearchResultItems: SearchResultItem[];
};

export type SearchResultItem = {
  MatchedObjectId: string;
  MatchedObjectDescriptor: MatchedObjectDescriptor; 
};

export type MatchedObjectDescriptor = {
  PositionTitle: string;
  PositionLocation: PositionLocation[];
  DepartmentName: string;
  OrganizationName: string;
  PositionURI: string;
  PositionRemuneration: PositionRemuneration[];
  PositionStartDate: string;
  PositionEndDate: string;
  QualificationSummary: string;
  UserArea: UserArea;
};

export type PositionLocation = {
  CityName: string;
  CountryCode: string;
  LocationName: string;
  Latitude: number;
  Longitude: number;
};

export type PositionRemuneration = {
  Description: 'Per Hour' | 'Per Year';
  RateIntervalCode: 'PH' | 'PY';
  MaximumRange: string;
  MinimumRange: string;
};

export type UserArea = {
  Details: Details;
};

export type Details = {
  AgencyContactEmail: string;
  AgencyContactPhone: string;
  AgencyMarketingStatement: string;
  Education: string;
  Evaluations: string;
  HowToApply: string;
  WhatToExpectNext: string;
  JobSummary: string;
  MajorDuties: string[];
  TotalOpenings: string;
  RemoteIndicator: boolean;
};