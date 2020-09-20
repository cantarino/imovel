import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  addresses: Array<Address>;
  address?: Maybe<Address>;
  apartments: Array<Apartment>;
  apartment?: Maybe<Apartment>;
  houses: Array<House>;
  house?: Maybe<House>;
  neighborhoods: Array<Neighborhood>;
  neighborhood?: Maybe<Neighborhood>;
};


export type QueryAddressArgs = {
  id: Scalars['Float'];
};


export type QueryApartmentArgs = {
  id: Scalars['Float'];
};


export type QueryHouseArgs = {
  id: Scalars['Float'];
};


export type QueryNeighborhoodArgs = {
  id: Scalars['Float'];
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['Float'];
  street: Scalars['String'];
  number: Scalars['Float'];
  postalCode: Scalars['String'];
  neighborhoodId: Scalars['Float'];
  homeId?: Maybe<Scalars['Float']>;
};

export type Apartment = {
  __typename?: 'Apartment';
  id: Scalars['Float'];
  bedrooms: Scalars['Float'];
  suites: Scalars['Float'];
  livingRooms: Scalars['Float'];
  parkingSpots: Scalars['Float'];
  size: Scalars['Float'];
  hasCloset: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  rent: Scalars['Float'];
  addressId: Scalars['Float'];
  floor: Scalars['Float'];
  apartmentNumber: Scalars['Float'];
  buildingRent: Scalars['Float'];
  hasDoorman: Scalars['Boolean'];
};

export type House = {
  __typename?: 'House';
  id: Scalars['Float'];
  bedrooms: Scalars['Float'];
  suites: Scalars['Float'];
  livingRooms: Scalars['Float'];
  parkingSpots: Scalars['Float'];
  size: Scalars['Float'];
  hasCloset: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  rent: Scalars['Float'];
  addressId: Scalars['Float'];
};

export type Neighborhood = {
  __typename?: 'Neighborhood';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  insertAddress: AddressResponse;
  updateAddress: AddressResponse;
  deleteAddress: Scalars['Boolean'];
  insertApartment: ApartmentResponse;
  updateApartment: ApartmentResponse;
  deleteApartment: Scalars['Boolean'];
  insertHouse: HouseResponse;
  updateHouse: HouseResponse;
  deleteHouse: Scalars['Boolean'];
  insertNeighborhood: NeighborhoodResponse;
  updateNeighborhood: NeighborhoodResponse;
  deleteNeighborhood: Scalars['Boolean'];
};


export type MutationInsertAddressArgs = {
  data: AddressInput;
};


export type MutationUpdateAddressArgs = {
  data: AddressInput;
  id: Scalars['Float'];
};


export type MutationDeleteAddressArgs = {
  id: Scalars['Float'];
};


export type MutationInsertApartmentArgs = {
  data: ApartmentInput;
};


export type MutationUpdateApartmentArgs = {
  data: ApartmentInput;
  id: Scalars['Float'];
};


export type MutationDeleteApartmentArgs = {
  id: Scalars['Float'];
};


export type MutationInsertHouseArgs = {
  data: HouseInput;
};


export type MutationUpdateHouseArgs = {
  data: HouseInput;
  id: Scalars['Float'];
};


export type MutationDeleteHouseArgs = {
  id: Scalars['Float'];
};


export type MutationInsertNeighborhoodArgs = {
  neighborhood: Scalars['String'];
};


export type MutationUpdateNeighborhoodArgs = {
  neighborhood: Scalars['String'];
  id: Scalars['Float'];
};


export type MutationDeleteNeighborhoodArgs = {
  id: Scalars['Float'];
};

export type AddressResponse = {
  __typename?: 'AddressResponse';
  errors?: Maybe<Array<FieldError>>;
  address?: Maybe<Address>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type AddressInput = {
  street: Scalars['String'];
  number: Scalars['Float'];
  postalCode: Scalars['String'];
  neighborhoodId: Scalars['Float'];
  houseId?: Maybe<Scalars['Float']>;
};

export type ApartmentResponse = {
  __typename?: 'ApartmentResponse';
  errors?: Maybe<Array<FieldError>>;
  apartment?: Maybe<Apartment>;
};

export type ApartmentInput = {
  bedrooms: Scalars['Float'];
  suites: Scalars['Float'];
  livingRooms: Scalars['Float'];
  parkingSpots: Scalars['Float'];
  size: Scalars['Float'];
  hasCloset: Scalars['Boolean'];
  rent: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  addressId?: Maybe<Scalars['Float']>;
  address?: Maybe<AddressInput>;
  floor: Scalars['Float'];
  apartmentNumber: Scalars['Float'];
  buildingRent: Scalars['Float'];
  hasDoorman: Scalars['Boolean'];
};

export type HouseResponse = {
  __typename?: 'HouseResponse';
  errors?: Maybe<Array<FieldError>>;
  house?: Maybe<House>;
};

export type HouseInput = {
  bedrooms: Scalars['Float'];
  suites: Scalars['Float'];
  livingRooms: Scalars['Float'];
  parkingSpots: Scalars['Float'];
  size: Scalars['Float'];
  hasCloset: Scalars['Boolean'];
  rent: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  addressId?: Maybe<Scalars['Float']>;
  address?: Maybe<AddressInput>;
};

export type NeighborhoodResponse = {
  __typename?: 'NeighborhoodResponse';
  errors?: Maybe<Array<FieldError>>;
  neighborhood?: Maybe<Neighborhood>;
};

export type RegisterNeighborhoodMutationVariables = Exact<{
  neighborhood: Scalars['String'];
}>;


export type RegisterNeighborhoodMutation = (
  { __typename?: 'Mutation' }
  & { insertNeighborhood: (
    { __typename?: 'NeighborhoodResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, neighborhood?: Maybe<(
      { __typename?: 'Neighborhood' }
      & Pick<Neighborhood, 'name' | 'id'>
    )> }
  ) }
);

export type ApartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type ApartmentsQuery = (
  { __typename?: 'Query' }
  & { apartments: Array<(
    { __typename?: 'Apartment' }
    & Pick<Apartment, 'id' | 'bedrooms' | 'suites' | 'livingRooms' | 'parkingSpots' | 'size' | 'hasCloset' | 'description' | 'rent' | 'addressId' | 'floor' | 'apartmentNumber' | 'buildingRent' | 'hasDoorman'>
  )> }
);

export type HousesQueryVariables = Exact<{ [key: string]: never; }>;


export type HousesQuery = (
  { __typename?: 'Query' }
  & { houses: Array<(
    { __typename?: 'House' }
    & Pick<House, 'id' | 'bedrooms' | 'suites' | 'livingRooms' | 'parkingSpots' | 'size' | 'hasCloset' | 'description' | 'rent' | 'addressId'>
  )> }
);

export type NeighborhoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type NeighborhoodsQuery = (
  { __typename?: 'Query' }
  & { neighborhoods: Array<(
    { __typename?: 'Neighborhood' }
    & Pick<Neighborhood, 'name' | 'id'>
  )> }
);


export const RegisterNeighborhoodDocument = gql`
    mutation RegisterNeighborhood($neighborhood: String!) {
  insertNeighborhood(neighborhood: $neighborhood) {
    errors {
      field
      message
    }
    neighborhood {
      name
      id
    }
  }
}
    `;

export function useRegisterNeighborhoodMutation() {
  return Urql.useMutation<RegisterNeighborhoodMutation, RegisterNeighborhoodMutationVariables>(RegisterNeighborhoodDocument);
};
export const ApartmentsDocument = gql`
    query Apartments {
  apartments {
    id
    bedrooms
    suites
    livingRooms
    parkingSpots
    size
    hasCloset
    description
    rent
    addressId
    floor
    apartmentNumber
    buildingRent
    hasDoorman
  }
}
    `;

export function useApartmentsQuery(options: Omit<Urql.UseQueryArgs<ApartmentsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ApartmentsQuery>({ query: ApartmentsDocument, ...options });
};
export const HousesDocument = gql`
    query Houses {
  houses {
    id
    bedrooms
    suites
    livingRooms
    parkingSpots
    size
    hasCloset
    description
    rent
    addressId
  }
}
    `;

export function useHousesQuery(options: Omit<Urql.UseQueryArgs<HousesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<HousesQuery>({ query: HousesDocument, ...options });
};
export const NeighborhoodsDocument = gql`
    query Neighborhoods {
  neighborhoods {
    name
    id
  }
}
    `;

export function useNeighborhoodsQuery(options: Omit<Urql.UseQueryArgs<NeighborhoodsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<NeighborhoodsQuery>({ query: NeighborhoodsDocument, ...options });
};