import { Carousel } from "./components/Carousel";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";
import { SearchBooksHeader } from "./components/SearchBooksHeader";

export const Home = () => {
  return (
    <>
      <SearchBooksHeader />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
};
