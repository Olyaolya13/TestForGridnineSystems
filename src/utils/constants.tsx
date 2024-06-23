export const allComponies = [
  { id: 'Air France', label: 'Air France' },
  { id: 'KLM', label: 'KLM' },
  { id: 'Аэрофлот', label: 'Аэрофлот - российские авиалинии' },
  { id: 'TURK', label: 'TURK HAVA YOLLARI A.O.' },
  { id: 'Finnair', label: 'Finnair Oyj' },
  { id: 'Baltic', label: 'Air Baltic Corporation A/S' },
  { id: 'Alitalia', label: 'Alitalia Societa Aerea Italiana' },
  { id: 'Pegasus', label: 'Pegasus Hava Tasimaciligi A.S.' },
  { id: 'Brussels', label: 'Brussels Airlines' },
  { id: 'LOT', label: 'LOT Polish Airlines' }
];

export const sortFiltersData = [
  { value: 'all', label: 'все', sx: { margin: 0, width: '10%' } },
  { value: 'lowPrice', label: 'по возрастанию цены', sx: { margin: 0, width: '80%' } },
  { value: 'highPrice', label: 'по убыванию цены', sx: { margin: 0, width: '80%' } },
  { value: 'time', label: 'по времени в пути', sx: { margin: 0, width: '80%' } }
];

export const transferFiltersData = [
  { name: 'oneStop', label: '1 пересадка', sx: { margin: 0, width: '50%' } },
  { name: 'twoAndMoreStops', label: '2 и более пересадки', sx: { margin: 0, width: '80%' } },
  { name: 'directFlight', label: 'прямой рейс', sx: { margin: 0, width: '60%' } }
];
