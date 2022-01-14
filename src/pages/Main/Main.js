import SearchedTickets from './SearchedTickets/SearchedTickets';
import CarouselSlick from './CarouselSlick/CarouselSlick';
import CheapFlights from './CheapFlights/CheapFlights';
import FlightsSearchBar from './../../components/FlightsSearchBar/FlightsSearchBar';

const Main = () => {
  return (
    <main>
      <FlightsSearchBar />
      <SearchedTickets />
      <CarouselSlick />
      <CheapFlights />
    </main>
  );
};

export default Main;
