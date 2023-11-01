import FilterCountry from "./FilterCountry";

function CountryGrid() {
  return (
    <div className="transition-colors duration-500 bg-white dark:bg-DarkBlue">
      <div className="container w-full min-h-screen pt-24 m-auto transition-colors duration-500 bg-white dark:bg-DarkBlue">
        <FilterCountry />
      </div>
    </div>
  );
}

export default CountryGrid;
