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

export type Leg = {
  duration: number;
  segments: Segment[];
};

export interface Flight {
  carrier: Carrier;
  price: Price;
  legs: Leg[];
}

export interface MainProps {
  flight: Flight;
}
