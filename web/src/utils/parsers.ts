export function parseFromAcitivityForm(values: any) {
  return {
    hasCloset: values.hasCloset,
    hasDoorman: values.hasDoorman,
    floor: parseInt(values.floor),
    apartmentNumber: parseInt(values.apartmentNumber),
    buildingRent: parseInt(values.buildingRent),
    bedrooms: parseInt(values.bedrooms),
    size: parseInt(values.size),
    suites: parseInt(values.suites),
    livingRooms: parseInt(values.livingRooms),
    parkingSpots: parseInt(values.parkingSpots),
    rent: parseInt(values.rent),
    description: values.description,
    address: {
      street: values.street,
      postalCode: values.postalCode,
      neighborhoodId: parseInt(values.neighborhoodId),
      number: parseInt(values.number),
    },
  };
}
export function parseFromHouseForm(values: any) {
  return {
    hasCloset: values.hasCloset,
    bedrooms: parseInt(values.bedrooms),
    size: parseInt(values.size),
    suites: parseInt(values.suites),
    livingRooms: parseInt(values.livingRooms),
    parkingSpots: parseInt(values.parkingSpots),
    rent: parseInt(values.rent),
    description: values.description,
    address: {
      street: values.street,
      postalCode: values.postalCode,
      neighborhoodId: parseInt(values.neighborhoodId),
      number: parseInt(values.number),
    },
  };
}
