import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import slugify from "slugify";

import {
  FormActions,
  SectionCard,
  SwitchField,
  TextInput,
} from "@/admin/components/forms";

import {
  useCreatePackageCategory,
  useUpdatePackageCategory,
} from "../hooks/usePackageCategories";

import {
  packageCategorySchema,
  type PackageCategoryFormValues,
} from "../validation/packageCategory.schema";

import type { PackageCategory } from "@/shared/types/packageCategory.types";

interface CategoryFormProps {
  category?: PackageCategory;
  onSuccess?: () => void;
}

export default function CategoryForm({
  category,
  onSuccess,
}: CategoryFormProps) {
  const createMutation = useCreatePackageCategory();
  const updateMutation = useUpdatePackageCategory();

  const {
    register,
    control,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PackageCategoryFormValues>({
    resolver: zodResolver(packageCategorySchema),
    defaultValues: {
      name: "",
      slug: "",
      icon: null,
      active: true,
      sort_order: 1,
    },
  });

  const name = useWatch({
    control,
    name: "name",
  });

  useEffect(() => {
    if (!category && name) {
      setValue(
        "slug",
        slugify(name, {
          lower: true,
          strict: true,
        }),
        {
          shouldValidate: true,
        },
      );
    }
  }, [name, category, setValue]);

  useEffect(() => {
    if (!category) return;

    reset({
      name: category.name,
      slug: category.slug,
      icon: category.icon,
      active: category.active,
      sort_order: category.sort_order,
    });
  }, [category, reset]);

  const onSubmit = async (values: PackageCategoryFormValues) => {
    const payload = {
      ...values,
      icon: values.icon?.trim() || null,
    };

    if (category) {
      await updateMutation.mutateAsync({
        id: category.id,
        ...payload,
      });

      onSuccess?.();
      return;
    }

    await createMutation.mutateAsync(payload);

    reset({
      name: "",
      slug: "",
      icon: null,
      active: true,
      sort_order: 1,
    });

    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <SectionCard
        title="Category Information"
        description="Create or update a package category."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <TextInput
            label="Category Name"
            {...register("name")}
            error={errors.name?.message}
          />

          <TextInput
            label="Slug"
            {...register("slug")}
            error={errors.slug?.message}
          />

          <TextInput
            label="Icon"
            placeholder="FiMapPin"
            {...register("icon")}
            error={errors.icon?.message}
          />

          <TextInput
            label="Sort Order"
            type="number"
            {...register("sort_order", {
              valueAsNumber: true,
            })}
            error={errors.sort_order?.message}
          />
        </div>

        <div className="pt-2">
          <SwitchField label="Active" {...register("active")} />
        </div>
      </SectionCard>

      <FormActions
        loading={createMutation.isPending || updateMutation.isPending}
        submitLabel={category ? "Update Category" : "Create Category"}
      />
    </form>
  );
}
