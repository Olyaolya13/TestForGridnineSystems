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
  id: string;
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
  fontSize?: string;
}

export interface FiltersProps {
  label?: string;
  title: string;
  flightsData: Flight[];
  setSortCriteria?: (flights: Flight[]) => void;
  setFilterTransferCriteria?: (flights: Flight[]) => void;
  setFilterPriceCriteria?: (flights: Flight[]) => void;
  setFilterCompanyCriteria?: (flights: Flight[]) => void;
  setFilteredTimeFlights?: (flights: Flight[]) => void;
}

export type PopupProps = {
  open: boolean;
  onClose: () => void;
  onClickCloseIcon?: () => void;
  children?: React.ReactNode;
};

export type PopupHandlerProps = {
  flight: Flight;
  flightId: string;
  trigger: React.ReactNode;
};

export interface PopupCardIdProps {
  open: boolean;
  onClose: () => void;
  flight: Flight;
  flightId: string;
}
