import type { V2_MetaDescriptor } from "@remix-run/react";

export function meta(): V2_MetaDescriptor[] {
  return [
    {
      title: "length.decrypt",
    },
    {
      name: "description",
      content: "decrypt your secrets using dotlength",
    },
  ];
}

function DecryptPage(): JSX.Element {
  return <div>DecryptPage</div>;
}

export default DecryptPage;
