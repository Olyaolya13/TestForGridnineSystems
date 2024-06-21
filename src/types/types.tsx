export type Carrier = {
  uid: string;
  caption: string;
  airlineCode: string;
};

export type Price = {
  total: {
    amount: string;
    currency: string;
  };
  value: string;
};

export type Segment = {
  departureAirport: {
    caption: string;
    uid: string;
  };
  arrivalAirport: {
    caption: string;
    uid: string;
  };
  departureDate: string;
  arrivalDate: string;
  travelDuration: number;
};

export type ServicesStatuses = {
  baggage: {
    caption: string;
  };
  exchange: {
    caption: string;
  };
  refund: {
    caption: string;
  };
  length: string;
};

export type Leg = {
  duration: number;
  segments: Segment[];
};

export interface Flight {
  id: number;
  carrier: Carrier;
  price: Price;
  servicesStatuses: ServicesStatuses;
  legs: Leg[];
}

export interface MainProps {
  flight: Flight;
}

export interface SubmitBtnProps {
  title?: string;
  width?: string;
  disabled?: boolean;
  margin?: string;
  onClick?: () => void;
}

export interface titleSecondaryProps {
  color?: string;
  title?: string;
  margin?: string;
}

export interface FilterProps {
  label: string;
  title: string;
  flightsData: Flight[];
  setFilteredFlights: (flights: Flight[]) => void;
}
