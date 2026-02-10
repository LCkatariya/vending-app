import type { Metadata } from "next";
import { EcommerceMetrics } from "@/app/components/ecommerce/EcommerceMetrics";
// import BasicTables from "./(other-page)/(tables)/basic-tables/page";
import ComponentCard from "@/app/components/common/ComponentCard";
import BasicTableOne from "@/app/components/tables/BasicTableOne";
// import MonthlyTarget from "@/app/components/ecommerce/MonthlyTarget";
// import MonthlySalesChart from "@/app/components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "@/app/components/ecommerce/StatisticsChart";
// import RecentOrders from "@/app/components/ecommerce/RecentOrders";
// import DemographicCard from "@/app/components/ecommerce/DemographicCard";

export const metadata: Metadata = {
  title:
    "Dashboard",
  description: "User Dashboard",
};

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
      {/* 
      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div> */}

      <div className="col-span-12 xl:col-span-7">
        {/* <RecentOrders /> */}
      </div>
    </div>
  );
}
