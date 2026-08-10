import { Controller, type Control } from "react-hook-form";

import SectionCard from "@/admin/components/forms/SectionCard";
import TextInput from "@/admin/components/forms/TextInput";
import SelectField from "@/admin/components/forms/SelectField";

import type { PackageFormValues } from "../validation/package.schema";

interface PricingSectionProps {
  control: Control<PackageFormValues>;
}

const currencyOptions = [
  {
    label: "Indian Rupee (INR)",
    value: "INR",
  },
  {
    label: "US Dollar (USD)",
    value: "USD",
  },
  {
    label: "UAE Dirham (AED)",
    value: "AED",
  },
  {
    label: "Saudi Riyal (SAR)",
    value: "SAR",
  },
];

export default function PricingSection({ control }: PricingSectionProps) {
  return (
    <SectionCard
      title="Pricing & Travel Details"
      description="Package pricing and travel information."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Controller
          control={control}
          name="duration"
          render={({ field, fieldState }) => (
            <TextInput
              label="Duration"
              placeholder="5 Days / 4 Nights"
              error={fieldState.error?.message}
              value={field.value ?? ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
            />
          )}
        />

        <Controller
          control={control}
          name="price"
          render={({ field, fieldState }) => (
            <TextInput
              label="Price"
              type="number"
              placeholder="25000"
              error={fieldState.error?.message}
              value={field.value ?? ""}
              onChange={(e) =>
                field.onChange(
                  e.target.value === "" ? null : Number(e.target.value),
                )
              }
              onBlur={field.onBlur}
              ref={field.ref}
            />
          )}
        />

        <Controller
          control={control}
          name="currency"
          render={({ field, fieldState }) => (
            <SelectField
              label="Currency"
              error={fieldState.error?.message}
              value={field.value ?? "INR"}
              onChange={(e) => field.onChange(e.target.value)}
              options={currencyOptions}
            />
          )}
        />
      </div>
    </SectionCard>
  );
}
