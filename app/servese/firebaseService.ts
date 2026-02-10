import { ref, get } from "firebase/database";
import { rtdb } from "../lib/firebase";

function normalizeUsers(data: any) {
  if (!data) return [];

  return Object.entries(data).map(([userId, user]: any) => ({
    user: userId,
    devices: user.devices
      ? Object.entries(user.devices).map(([deviceId, status]) => ({ deviceId, status }))
      : [],
  }));
}

function normalizeDevices(data: any) {
  if (!data) return [];

  return Object.entries(data).map(([key, value]) => ({
    deviceId: key,
    liveDetails: Object.entries(value).map(([key, value]) => ({
      timeStamp: key,
      phone: value.phone,
      stock: value.stock
    }))
  }))
}

function normalizeDevicesDetails(data: any) {
  if (!data) return [];

  return Object.entries(data).map(([key, device]) => ({
    deviceId: key,
    device
  }))
}


export async function getUsers() {
  const snapshot = await get(ref(rtdb, "users"));

  if (!snapshot.exists()) {
    return [];
  }

  return normalizeUsers(snapshot.val());

}

export async function getLiveDevicesData() {
  const snapshot = await get(ref(rtdb, "devices"));

  if (!snapshot.exists()) {
    return [];
  }

  return normalizeDevices(snapshot.val());
}

export async function getAllDeviceDetails() {
  const snapshot = await get(ref(rtdb, "device_data"));

  if (!snapshot.exists()) {
    return [];
  }

  return normalizeDevicesDetails(snapshot.val());
}
