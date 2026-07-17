import type { Service } from "../types/service";
import { Button, Card } from "@/components/ui";

interface ServicesCardProps {
  service: Service;
}

export default function ServicesCard({
  service,
}: ServicesCardProps) {
  const Icon = service.icon;

  return (
   <Card className="group flex h-full flex-col border border-gray-200 p-8 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B3D91]/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 text-[#0B3D91]" />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-[#0B3D91]">
        {service.title}
      </h3>

      <p className="mb-6 grow leading-7 text-gray-600">
        {service.description}
      </p>

     <Button
  variant="outline"
  className="w-full group-hover:bg-[#0B3D91] group-hover:text-white">
  Learn More
</Button>
    </Card>
  );
}