export interface BaseOwner {
    id: string,
    username: string,
    email: string,
    phoneNumber: string,
    affiliation: string,
    imageUrl: string,
    password: string,
    mailVerified: string,
    organization: {
      id: number,
      name : string,
      Domain: string
    },
    lockzs: [
      {
        id: number,
        serialNumber: string,
        macAddress: string,
        rssi: string,
        type: string
      }
    ]
}
