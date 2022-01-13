import SearchedTickets from './SearchedTickets/SearchedTickets';
import CarouselSlick from './CarouselSlick/CarouselSlick';
import CheapFlights from './CheapFlights/CheapFlights';
import RouteSearch from './../../components/RouteSearch/RouteSearch';

const Main = () => {
  return (
    <main className="mainContainer">
      <RouteSearch />
      <SearchedTickets />
      <CarouselSlick />
      <CheapFlights />
    </main>
  );
};

export default Main;
