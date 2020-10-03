export const DBConfig = {
  name: 'LocationDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'location',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'locationName', keypath: 'locationName', options: { unique: false } },
        { name: 'addressLine1', keypath: 'addressLine1', options: { unique: false } },
        { name: 'addressLine2', keypath: 'addressLine2', options: { unique: false } },
        { name: 'suiteNo', keypath: 'suiteNo', options: { unique: false } },
        { name: 'city', keypath: 'city', options: { unique: false } },
        { name: 'state', keypath: 'state', options: { unique: false } },
        { name: 'zipCode', keypath: 'zipCode', options: { unique: false } },
        { name: 'phoneNumber', keypath: 'phoneNumber', options: { unique: false } },
        { name: 'timeZone', keypath: 'timeZone', options: { unique: false } },
        { name: 'facilityTimes', keypath: 'facilityTimes', options: { unique: false } },
        { name: 'appointmentPool', keypath: 'appointmentPool', options: { unique: false } }
      ]
    }
  ]
};