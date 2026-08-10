import { useMemo } from "react";

import { Button, Card } from "@/components/ui";
import { COMPANY } from "@/constants/COMPANY";
import { useWebsite } from "@/hooks/useWebsite";

import type { Service } from "../types/service";

interface ServicesCardProps {
  service: Service;
}

export default function ServicesCard({ service }: ServicesCardProps) {
  const { settings } = useWebsite();
  const Icon = service.icon;

  const whatsappUrl = useMemo(() => {
    const companyName = settings?.company_name?.trim() || COMPANY.name;
    const whatsapp = (settings?.whatsapp?.trim() || COMPANY.whatsapp).replace(
      /[^\d]/g,
      "",
    );
    const message = `Hello ${companyName},

${service.whatsappMessage}

Thank you.`;

    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  }, [service, settings]);

  return (
    <Card className="group flex h-full flex-col border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B3D91]/10 transition-all duration-300 group-hover:bg-[#0B3D91]">
        <Icon
          aria-hidden="true"
          className="h-8 w-8 text-[#0B3D91] transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-[#0B3D91]">
        {service.title}
      </h3>

      <p className="mb-6 grow leading-7 text-gray-600">{service.description}</p>

      <Button href={whatsappUrl} className="w-full" variant="outline">
        Enquire Now
      </Button>
    </Card>
  );
}
