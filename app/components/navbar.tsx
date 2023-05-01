import { Link, NavLink } from "@remix-run/react";
import Logo from "./logo";

function NavBar(): JSX.Element {
  return (
    <nav
      className={`sticky flex justify-between items-baseline bg-white dark:bg-slate-950 top-0 px-8 py-6 border-b border-b-slate-200 dark:border-b-slate-800`}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={`text-xl flex gap-8`}>
        <li>
          <NavLink
            className={`flex flex-col`}
            prefetch={"render"}
            to="/encrypt">
            {({ isActive }): JSX.Element => {
              return (
                <>
                  <span>encrypt</span>
                  <hr
                    className={`${
                      isActive ? "scale-100" : "scale-x-0 -translate-x-1/2"
                    } border-emerald-400 duration-300`}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`flex flex-col`}
            prefetch={"render"}
            to="/decrypt">
            {({ isActive }): JSX.Element => {
              return (
                <>
                  <span>decrypt</span>
                  <hr
                    className={`${
                      isActive ? "scale-100" : "scale-x-0 -translate-x-1/2"
                    } border-emerald-400 duration-300`}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
