import type { V2_MetaDescriptor, V2_MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = (): V2_MetaDescriptor[] => {
  return [
    { title: ".length" },
    {
      name: "description",
      content: "protect your secrets from bad guys.",
    },
  ];
};

export default function Index(): JSX.Element {
  return (
    <main
      className={`py-1 px-8 flex flex-col sm:flex-row-reverse gap-12 justify-center items-center grow text-lg sm:text-xl md:text-2xl text-center`}>
      <div className={`flex flex-col justify-center items-center`}>
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
      </div>
      <Outlet />
    </main>
  );
}
