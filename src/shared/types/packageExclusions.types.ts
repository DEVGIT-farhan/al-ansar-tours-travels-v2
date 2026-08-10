export interface PackageExclusion {
  id: string;
  package_id: string;
  description: string;
}

export type CreatePackageExclusionDto = Omit<PackageExclusion, "id">;

export interface UpdatePackageExclusionDto {
  id: string;
  description: string;
}

export interface UpdatePackageExclusionsBatchDto {
  id: string;
  description: string;
}
