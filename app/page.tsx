import { Hero, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";
//
export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {!isDataEmpty &&
                allCars.map((car, index) => <CarCard key={index} car={car} />)}
            </div>
          </section>
        ) : (
          <div>
            <h2>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
