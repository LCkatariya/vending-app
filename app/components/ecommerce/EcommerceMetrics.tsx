"use client";

import { getAllDeviceDetails, getUsers } from "@/app/servese/firebaseService";
import { useEffect, useState } from "react";

const OnlineStatus = (timestamp: number): boolean => {
  const currentTimestamp = Math.floor(Date.now() / 1000); // seconds
  return (currentTimestamp - timestamp) < 600;
};

export const EcommerceMetrics = () => {
  const [user, setUser] = useState(0)
  const [device, setDevice] = useState(0)
  const [online, setOnline] = useState(0)
  useEffect(() => {
    async function getDataFromSever() {
      const users = await getUsers();
      const allDevice = await getAllDeviceDetails()
      console.log("user, allDevice", users, allDevice)
      setUser(users?.length)
      setDevice(allDevice?.length)
      setOnline(allDevice.filter(item=>OnlineStatus((item.device as {T:number})?.T))?.length)
    }
    getDataFromSever()
  })
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-3 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl  border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between ">
          <div className="font-bold text-gray-500 dark:text-gray-400">
            Total Device
          </div>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            {device}
          </h4>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl  border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between ">
          <div className="font-bold text-gray-500 dark:text-gray-400">
            Online Device
          </div>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            {online}
          </h4>
        </div>
      </div>

      <div className="rounded-2xl  border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between ">
          <div className="font-bold text-gray-500 dark:text-gray-400">
            Active User
          </div>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            {user}
          </h4>
        </div>
      </div>

      {/* <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-center justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              online user
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-center justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              online user
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>
        </div>
      </div> */}
      {/* <!-- Metric Item End --> */}
    </div>
  );
};
