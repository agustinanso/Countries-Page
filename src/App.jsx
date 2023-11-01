import CountryDetail from "./components/CountryDetail";
import CountryGrid from "./components/CountryGrid";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

const CountryRoute = () => <CountryGrid />;
const CountryInfo = () => <CountryDetail />;

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/:country" element={<CountryInfo />} />
        <Route path="/" element={<CountryRoute />} />
      </Routes>
    </>
  );
}
