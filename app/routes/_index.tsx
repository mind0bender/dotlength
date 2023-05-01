import type { MetaDescriptor, V2_MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = (): MetaDescriptor[] => {
  return [{ title: ".length" }];
};

export default function Index(): JSX.Element {
  return (
    <div
      className={`py-1 flex flex-col justify-center items-center grow text-2xl`}>
      <div>
        This is the foundation for project{" "}
        <Link
          target={"_blank"}
          to={"https://github.com/mind0bender/dotlength"}
          className={`px-2 py-1 ring-1 hover:ring-2 ring-slate-950 dark:ring-white hover:ring-emerald-400 duration-100`}>
          <span className={`text-emerald-400`}>.</span>
          length
        </Link>
      </div>
      <div>
        started by mad coder{" "}
        <Link
          className={`underline decoration-wavy decoration-emerald-400`}
          target={"_blank"}
          to="https://github.com/mind0bender">
          mind0bender
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
