import Logo from "./logo";

function NavBar(): JSX.Element {
  return (
    <nav
      className={`sticky bg-white dark:bg-slate-950 top-0 px-8 py-6 border-b border-b-slate-100 dark:border-b-slate-800`}>
      <Logo />
    </nav>
  );
}

export default NavBar;
