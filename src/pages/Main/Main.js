import SearchedTickets from './SearchedTickets/SearchedTickets';
import CarouselSlick from './CarouselSlick/CarouselSlick';
import RouteSearch from './../../components/RouteSearch/RouteSearch';

const Main = () => {
  return (
    <main className="mainContainer">
      <RouteSearch />
      <SearchedTickets />
      <CarouselSlick />
    </main>
  );
};

export default Main;
