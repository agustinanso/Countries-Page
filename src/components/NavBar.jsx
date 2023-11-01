import ToggleTheme from "./ToggleTheme";

function NavBar() {
  return (
    <div>
      <header className="fixed w-full px-4 py-4 transition-colors duration-500 bg-white shadow-md dark:bg-DarkBlue">
        <div className="container flex items-center justify-between w-full px-4 m-auto transition-colors duration-500 bg-white dark:bg-DarkBlue">
          <p className="text-2xl font-bold dark:text-vDarkGray text-DarkBlue">
            Where in the world?
          </p>
          <div>
            <ToggleTheme />
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
