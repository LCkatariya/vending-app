import MystyleTable from "./MystyleTable";


import { getAllDeviceDetails, getLiveDevicesData, getUsers } from "@/app/servese/firebaseService";

export default async function BasicTableOne() {
    const allDevice = await getAllDeviceDetails()
    const getLiveDevices = await getLiveDevicesData();
    console.log("get", getLiveDevices)

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <MystyleTable allDevice={allDevice} getLiveDevicesData={getLiveDevices} />
        </div>
      </div>
    </div>
  );
}
