import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div
      className={`py-1 flex flex-col justify-center items-center gap-4 grow text-2xl`}>
      <div>
        This is the foundation for project{" "}
        <Link
          target={"_blank"}
          to={"https://github.com/mind0bender/dotlength"}
          className={`px-2 py-1 ring-1 hover:ring-2 ring-slate-950 dark:ring-white duration-100`}>
          .length
        </Link>
      </div>
      <div>
        started by mad coder{" "}
        <Link
          className={`underline`}
          target={"_blank"}
          to="https://github.com/mind0bender">
          mind0bender
        </Link>
      </div>
    </div>
  );
}
