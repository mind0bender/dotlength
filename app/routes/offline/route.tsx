import type { V2_MetaDescriptor } from "@remix-run/react";

export function meta(): V2_MetaDescriptor[] {
  return [
    {
      title: "length.0ffl!ne",
    },
    {
      name: "description",
      content: "You are currently Offline",
    },
  ];
}

function OfflinePage(): JSX.Element {
  return (
    <main
      className={`text-center grow flex flex-col-reverse md:flex-row gap-8 justify-center items-center`}>
      <div
        className={`flex gap-4 flex-col justify-center items-center text-center`}>
        <div className={`text-3xl`}>You seem to be offline.</div>
        <div>
          You need to be connected to the Internet
          <br /> for dotlength to work
        </div>
      </div>
      <img
        className={`w-40 select-none`}
        draggable={false}
        src="/assets/images/offline.svg"
        alt="offline"
      />
    </main>
  );
}

export default OfflinePage;
