import type { Metadata } from "next";
import { EcommerceMetrics } from "@/app/components/ecommerce/EcommerceMetrics";
import ComponentCard from "@/app/components/common/ComponentCard";
import BasicTableOne from "@/app/components/tables/BasicTableOne";

export const metadata: Metadata = {
  title:
    "Vending Machin Dashboard",
  description: "Vending Machin Dashboard",
};
export const revalidate = 10;
export default function Ecommerce() {
  
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-12">
        <EcommerceMetrics />
      </div>

      <div className="col-span-12">
        <div className="space-y-6">
          <ComponentCard title="Devices List">
            <BasicTableOne />
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}
