"use client"
import { useState } from "react";
import { Modal } from "../ui/modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import LiveDeviceData from "./LiveDeviceData";
// import { getAllDeviceDetails, getLiveDevicesData, getUsers } from "@/app/servese/firebaseService";

export default function MystyleTable({ allDevice, getLiveDevicesData }) {
  const [isOpen, setIsOpen] = useState(false)
  const [deviceID, setDeviceID] = useState('')
  // const users = await getUsers();
  // const getLiveDevices = await getLiveDevicesData();
  // const allDevice = await getAllDeviceDetails()
  console.log("allDevices", allDevice)
  // console.log("getLiveDevices", getLiveDevices)
  // console.log("users", users)
  return (
    <>
      <Table>
        {/* Table Header */}
        <TableHeader className="border-b border-gray-300 dark:border-white/[0.05]">
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
              City
            </TableCell>
            <TableCell
              isHeader
              className="px-5 py-3 font-medium text-gray-800 text-start text-theme-xs dark:text-gray-400"
            >
              State
            </TableCell>
            <TableCell
              isHeader
              className="px-5 py-3 font-medium text-gray-800 text-start text-theme-xs dark:text-gray-400"
            >
              Pincode
            </TableCell>
            <TableCell
              isHeader
              className="px-5 py-3 font-medium text-gray-800 text-start text-theme-xs dark:text-gray-400"
            >
              Address
            </TableCell>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
          {allDevice.map(({ deviceId, device }) => (
            <TableRow key={deviceId} onClick={()=>{setIsOpen(true);setDeviceID(deviceId)}}>
              <TableCell className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {deviceId}
                    </span>
                    {/* <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {device.user.role}
                        </span> */}
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                {device?.phone}
              </TableCell>

              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                {device?.location?.city}
              </TableCell>

              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                {device?.location?.state}
              </TableCell>

              <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                {device?.location?.pincode}
              </TableCell>

              <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                {device?.location?.address}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(pre=>!pre)} title={deviceID}>
        <LiveDeviceData deviceId={deviceID} getLiveDevicesData={getLiveDevicesData} />
      </Modal>
    </>
  )
}
