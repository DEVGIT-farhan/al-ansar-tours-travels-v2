export interface PackageItinerary {
  id: string;

  package_id: string;

  day_number: number;

  title: string;

  description: string;
}

export type CreatePackageItineraryDto = Omit<PackageItinerary, "id">;

export interface UpdatePackageItineraryDto {
  id: string;

  title: string;

  description: string;
}

export interface ReorderPackageItineraryDto {
  id: string;

  day_number: number;
}

export interface UpdatePackageItineraryBatchDto {
  id: string;

  day_number: number;

  title: string;

  description: string;
}
