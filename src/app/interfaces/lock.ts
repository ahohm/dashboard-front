import {BaseLock} from "./base-lock";

export class Lock implements BaseLock{
  id: number;
  macAddress: string;
  rssi: string;
  serialNumber: string;
  type: string;


  constructor(lock: BaseLock) {
    this.id = lock.id;
    this.macAddress = lock.macAddress;
    this.rssi = lock.rssi;
    this.serialNumber = lock.serialNumber;
    this.type = lock.type;
  }
}
