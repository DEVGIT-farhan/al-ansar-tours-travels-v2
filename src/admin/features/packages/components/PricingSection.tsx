import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import TextInput from "@/admin/components/forms/TextInput";

import type {
  PackageFormValues,
} from "../validation/package.schema";

interface PricingSectionProps {
  register: UseFormRegister<PackageFormValues>;
  errors: FieldErrors<PackageFormValues>;
}

export default function PricingSection({
  register,
  errors,
}: PricingSectionProps) {
  return (
    <SectionCard
      title="Pricing"
      description="Package pricing information."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <TextInput
          label="Price"
          type="number"
          step="0.01"
          placeholder="25000"
          {...register("price", {
            valueAsNumber: true,
          })}
          error={errors.price?.message}
        />

        <TextInput
          label="Currency"
          placeholder="INR"
          {...register("currency")}
          error={errors.currency?.message}
        />
      </div>
    </SectionCard>
  );
}