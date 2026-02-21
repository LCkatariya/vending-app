export interface DeviceLocation {
  address: string;
  city: string;
  pincode: string;
  state: string;
}

export interface DeviceData {
  S: number; // stock
  T: number; // timestamp
  phone: string;
  location: DeviceLocation;
}

export interface AddDeviceInput {
  deviceId: string;
  stock: number;
  phone: string;
  location: DeviceLocation;
}