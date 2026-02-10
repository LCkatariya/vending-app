import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

function timeFormat(timestamp){
const date = new Date(timestamp * 1000);

const formatted = date.toLocaleString("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});
  return formatted
}


const LiveDeviceData = ({ deviceId, getLiveDevicesData }) => {
  const getDeviceData = getLiveDevicesData.filter(device => device.deviceId === deviceId)
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full max-h-[80vh] overflow-x-auto overflow-y-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="sticky top-0 bg-white border-b border-gray-300 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-800 text-start text-theme-xs dark:text-gray-400"
              >
                Device
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-800 text-start text-theme-xs dark:text-gray-400"
              >
                Phone No.
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-800 text-start text-theme-xs dark:text-gray-400"
              >
                Stock
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-800 text-start text-theme-xs dark:text-gray-400"
              >
                Date
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {getDeviceData[0]?.liveDetails?.map((device) => (
              <TableRow key={device.timeStamp}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {deviceId}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {device?.phone}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {device?.stock | 0}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {timeFormat(device?.timeStamp)}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default LiveDeviceData