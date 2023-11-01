import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ArrowBack from "./icons/ArrowBack";

function CountryDetail() {
  const name = useParams();
  const [details, setDeitals] = useState([]);

  console.log(details);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name.country}
        `);
        const data = await response.json();
        setDeitals(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchCountries();
  }, []);

  return (
    <div className="w-full min-h-screen pt-24 transition-colors duration-500 bg-white dark:bg-vDarkBlue">
      <section className="container px-2 m-auto xl:px-0 2xl:w-full">
        <div className="py-4 max-w-[200px]">
          <Link to="/">
            <button className="dark:hover:bg-[#43586b]  hover:bg-gray-200 items-center gap-10 flex px-4 py-3 rounded-md dark:bg-DarkBlue bg-white dark:text-white text-black   text-2xl w-[200px] shadow-md ">
              <ArrowBack fill="dark:#ffffff" /> Back
            </button>
          </Link>
        </div>

        {details.map((detail) => (
          <ul
            key={detail.cca2}
            className="flex flex-col justify-between gap-10 py-2 sm:flex-col 2xl:flex-row ">
            <img src={detail.flags.svg} className="object-cover 2xl:w-5/12" />
            <div className="w-full">
              <div className="flex flex-col">
                <p className="text-4xl font-bold text-DarkBlue dark:text-white">
                  {detail.name.common}
                </p>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col  w-full gap-1  [&>p]:text-DarkBlue dark:[&>p]:text-white  [&>p]:font-bold [&>p]:pb-3  [&>p]:flex [&>p]:flex-col xl:[&>p]:text-xl py-8 ">
                  <p>
                    Capital:
                    <span className="px-1 py-1 font-normal max-w-[250px] bg-gray-200 text-md text-DarkBlue dark:text-white dark:bg-DarkBlue ">
                      - {detail.capital}
                    </span>
                  </p>
                  <p>
                    Population:
                    <span className="px-1 py-1 font-normal max-w-[250px] bg-gray-200 text-md text-DarkBlue dark:text-white  dark:bg-DarkBlue ">
                      - {detail.population}
                    </span>
                  </p>
                  <p>
                    Region:
                    <span className="px-1 py-1 font-normal max-w-[250px] bg-gray-200 text-md text-DarkBlue dark:text-white dark:bg-DarkBlue ">
                      - {detail.region}
                    </span>
                  </p>
                  <p>
                    Sub Region:
                    <span className="px-1 py-1 font-normal max-w-[250px] bg-gray-200 text-md text-DarkBlue dark:text-white  dark:bg-DarkBlue ">
                      - {detail.subregion}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col w-full gap-2 py-8 ">
                  <p className="flex flex-col pb-3 font-bold text-left text-DarkBlue dark:text-white xl:text-xl">
                    Top Level Domain:
                    <span className="px-1 py-1 font-normal max-w-[250px] bg-gray-200 xl:text-xl text-DarkBlue dark:text-white dark:bg-DarkBlue">
                      - {detail.tld}
                    </span>
                  </p>
                  <ul className="flex flex-col gap-1 pb-3 text-left">
                    <p className="font-bold text-DarkBlue dark:text-white xl:text-xl">Languages:</p>
                    {Object.keys(detail.languages).map((languageCode, index) => (
                      <li
                        key={index}
                        className="px-1 font-normal bg-gray-200 xl:text-xl text-DarkBlue dark:text-white dark:bg-DarkBlue max-w-[250px]">
                        - {detail.languages[languageCode]}.
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-col w-full gap-1 text-left">
                    <p className="font-bold text-DarkBlue dark:text-white xl:text-xl">
                      Currencies:
                    </p>
                    {Object.values(detail.currencies).map((currency, index) => (
                      <li
                        key={index}
                        className="px-1 py-1 font-normal bg-gray-200 xl:text-xl text-DarkBlue dark:text-white dark:bg-DarkBlue max-w-[250px]">
                        - {currency.name}.
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ul>
        ))}
      </section>
    </div>
  );
}

export default CountryDetail;
