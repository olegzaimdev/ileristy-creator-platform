export type CourseResponse = {
  slug: string;
  name: string;
  description: string;
  packages: PackageResponse[];
  nextCohort: CohortResponse | null;
};

export type PackageResponse = {
  code: string;
  name: string;
  priceAmountMinor: number;
  currency: string;
  description: string;
};

export type CohortResponse = {
  startsAt: string;
  endsAt: string;
  capacity: number;
};
