export interface PackageInclusion {
  id: string;
  package_id: string;
  description: string;
}

export type CreatePackageInclusionDto = Omit<PackageInclusion, "id">;

export interface UpdatePackageInclusionDto {
  id: string;
  description: string;
}

export interface UpdatePackageInclusionBatchDto {
  id: string;
  description: string;
}
