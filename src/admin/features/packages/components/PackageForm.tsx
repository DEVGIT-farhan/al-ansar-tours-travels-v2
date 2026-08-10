import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AdminButton from "@/admin/components/ui/AdminButton";

import BasicInfoSection from "./BasicInfoSection";
import PricingSection from "./PricingSection";
import ImagesSection from "./ImagesSection";
import SeoSection from "./SeoSection";
import PublishSection from "./PublishSection";

import {
  packageSchema,
  type PackageFormValues,
} from "../validation/package.schema";

import type {
  TravelPackage,
  CreatePackageDto,
  UpdatePackageDto,
} from "../types/package.types";

import { useCreatePackage, useUpdatePackage } from "../hooks/usePackages";

import { usePackageCategories } from "../../package-categories/hooks/usePackageCategories";

interface PackageFormProps {
  packageData?: TravelPackage;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const defaultValues: PackageFormValues = {
  category_id: null,
  title: "",
  slug: "",
  short_description: "",
  description: "",
  duration: "",
  destination: "",
  price: null,
  currency: "INR",
  cover_image: "",
  featured: false,
  active: true,
  seo_title: "",
  seo_description: "",
  seo_keywords: "",
};

export default function PackageForm({
  packageData,
  onSuccess,
  onCancel,
}: PackageFormProps) {
  const isEdit = Boolean(packageData);

  const createPackage = useCreatePackage();
  const updatePackage = useUpdatePackage();

  const { data: categories = [] } = usePackageCategories();

  const form = useForm<PackageFormValues>({
    resolver: zodResolver(packageSchema),
    defaultValues,
  });

  const { control, watch, setValue, handleSubmit, reset } = form;

  useEffect(() => {
    if (!packageData) {
      reset(defaultValues);
      return;
    }

    reset({
      category_id: packageData.category_id,
      title: packageData.title,
      slug: packageData.slug,
      short_description: packageData.short_description ?? "",
      description: packageData.description ?? "",
      duration: packageData.duration ?? "",
      destination: packageData.destination ?? "",
      price: packageData.price,
      currency: packageData.currency,
      cover_image: packageData.cover_image ?? "",
      featured: packageData.featured,
      active: packageData.active,
      seo_title: packageData.seo_title ?? "",
      seo_description: packageData.seo_description ?? "",
      seo_keywords: packageData.seo_keywords ?? "",
    });
  }, [packageData, reset]);

  async function onSubmit(values: PackageFormValues) {
    const payload: CreatePackageDto = {
      category_id: values.category_id,
      title: values.title,
      slug: values.slug,
      short_description: values.short_description ?? null,
      description: values.description ?? null,
      duration: values.duration ?? null,
      destination: values.destination ?? null,
      price: values.price,
      currency: values.currency,
      cover_image: values.cover_image ?? null,
      featured: values.featured,
      active: values.active,
      seo_title: values.seo_title ?? null,
      seo_description: values.seo_description ?? null,
      seo_keywords: values.seo_keywords ?? null,
    };

    if (isEdit && packageData) {
      const updatePayload: UpdatePackageDto = {
        id: packageData.id,

        category_id: payload.category_id,
        title: payload.title,
        slug: payload.slug,

        short_description: payload.short_description,
        description: payload.description,

        duration: payload.duration,
        destination: payload.destination,

        price: payload.price,
        currency: payload.currency,

        cover_image: payload.cover_image,

        featured: payload.featured,
        active: payload.active,

        seo_title: payload.seo_title,
        seo_description: payload.seo_description,
        seo_keywords: payload.seo_keywords,
      };
      await updatePackage.mutateAsync(updatePayload);
    } else {
      await createPackage.mutateAsync(payload);
      reset(defaultValues);
    }

    onSuccess?.();
  }

  const loading = createPackage.isPending || updatePackage.isPending;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <BasicInfoSection
        control={control}
        watch={watch}
        setValue={setValue}
        categories={categories}
      />

      <PricingSection control={control} />

      <ImagesSection control={control} />

      <SeoSection control={control} />

      <PublishSection control={control} />

      <div className="flex justify-end gap-3 border-t pt-6">
        {onCancel && (
          <AdminButton type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </AdminButton>
        )}

        <AdminButton type="submit" loading={loading}>
          {isEdit ? "Update Package" : "Create Package"}
        </AdminButton>
      </div>
    </form>
  );
}
