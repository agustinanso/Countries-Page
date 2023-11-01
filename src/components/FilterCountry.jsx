import useCountrys from "../hooks/useCountrys";
import { useState } from "react";
import { Link } from "react-router-dom";

function FilterCountry() {
  const { countries } = useCountrys();
  const [filter, setFilter] = useState("");
  const [filterByText, setFilterByText] = useState("");

  const filteredCountriesByContinent = countries.filter((country) => {
    if (!filter) {
      return true;
    }
    return country.region === filter;
  });

  const filteredCountryByText = filteredCountriesByContinent.filter((country) => {
    if (!filterByText) {
      return true;
    }
    {
      return country.name.common.toLowerCase().includes(filterByText.toLowerCase());
    }
  });

  const CountrysToRender = filteredCountryByText.slice(0, 24);

  return (
    <div>
      <section className="flex flex-col items-center justify-between px-4 py-10 pb-10 sm:flex-row">
        <div className="w-full max-w-[250px]">
          <input
            className="py-4 w-full md:w-[380px] dark:text-white font-bold text-DarkBlue dark:bg-vDarkBlue px-4 rounded-sm border-[1px] shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            value={filterByText}
            onChange={(e) => setFilterByText(e.target.value)}
            type="text"
            placeholder="Argentina, United States, China..."
          />
        </div>

        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <p className="pt-5 text-DarkBlue dark:text-white text-md sm:pt-0 ">Filter by Region:</p>
          <select
            className="py-4  dark:hover:bg-[#415568] items-center font-bold px-2 text-DarkBlue dark:text-white hover:bg-gray-100 [&>option]:py-2 dark:bg-vDarkBlue w-[200px]  rounded-sm shadow-md "
            value={filter}
            onChange={(e) => setFilter(e.target.value)}>
            <option value="" className="font-semibold">
              All
            </option>
            <option value="Europe" className="font-semibold ">
              Europe
            </option>
            <option value="Americas" className="font-semibold">
              Americas
            </option>
            <option value="Oceania" className="font-semibold">
              Oceania
            </option>
            <option value="Asia" className="font-semibold">
              Asia
            </option>
            <option value="Africa" className="font-semibold">
              Africa
            </option>
          </select>
        </div>
      </section>
      <div className="grid w-full grid-cols-1 gap-12 px-4 pb-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CountrysToRender.map((country) => (
          <Link key={country.cca2} to={`/${country.name.common.toLowerCase()}`}>
            <ul className="dark:bg-vDarkBlue h-full bg-white dark:hover:bg-DarkBlue rounded-md shadow-md [&>li]:px-6  [&>li]:pt-3 [&>li>p]:font-semibold [&>li>p]:text-[16px] [&>li>p]:pt-4 dark:[&>li>p]:text-white [&>li>p]:text-DarkBlue flex flex-col">
              <img src={country.flags.svg} className="object-cover w-full h-3/5 rounded-t-md" />
              <li className="text-[24px] font-bold dark:text-white text-DarkBlue">
                {country.name.common}
                <p>
                  Region: <span className="font-normal">{country.region}</span>
                </p>

                <p>
                  Population: <span className="font-normal">{country.population}</span>
                </p>

                <p className="pb-4">
                  Capital: <span className="font-normal">{country.capital}</span>
                </p>
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FilterCountry;
