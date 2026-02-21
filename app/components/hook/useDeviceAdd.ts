"use client";

import { useState } from "react";
import { ref, set, get } from "firebase/database";
import { rtdb } from "@/app/lib/firebase";
import { AddDeviceInput, DeviceData } from "@/app/types/devices";

export function useAddDevice() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addDevice = async (data: AddDeviceInput): Promise<boolean> => {
    console.log('deviceData', data)
    try {
      setLoading(true);
      setError(null);

      const deviceRef = ref(rtdb, `device_data/${data.deviceId}`);

      // Check duplicate
      const snapshot = await get(deviceRef);
      if (snapshot.exists()) {
        throw new Error("Device already exists");
      }

      const devicePayload: DeviceData = {
        S: data.stock,
        T: Math.floor(Date.now() / 1000),
        phone: data.phone,
        location: data.location,
      };

      await set(deviceRef, devicePayload);

      return true;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    addDevice,
    loading,
    error,
  };
}