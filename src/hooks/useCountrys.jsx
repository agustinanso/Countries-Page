import { useEffect, useState } from "react";

function useCountrys() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchCountries();
  }, []);
  return { countries };
}

export default useCountrys;
