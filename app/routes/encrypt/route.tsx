import type { SafeParseReturnType } from "zod";
import type { ActionArgs } from "@remix-run/node";
import type { EncryptData } from "./encrypt.validation";
import { json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import type { Ratio } from "~/lib/encrypt.server";
import encrypt from "~/lib/encrypt.server";
import encryptDataSchema from "./encrypt.validation";
import Button from "~/components/button";
import Spinner from "~/components/spinner";

import type { V2_MetaDescriptor } from "@remix-run/react";

export function meta(): V2_MetaDescriptor[] {
  return [
    {
      title: "length.encrypt",
    },
    {
      name: "description",
      content: "encrypt your secrets using dotlength",
    },
  ];
}

function EncryptPage(): JSX.Element {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  return (
    <div className={`px-8 py-6 flex flex-col justify-center items-center`}>
      <Form method={"POST"} className={`w-full container mx-auto`}>
        <fieldset className={`flex flex-col items-center gap-8`}>
          <textarea
            required
            disabled={navigation.state !== "idle"}
            className={`w-full shadow-md shadow-slate-100 dark:shadow-black focus:shadow-slate-500 max-h-[50vh] px-4 py-3 caret-emerald-400 focus:outline outline-slate-800 dark:outline-slate-300 placeholder:text-slate-500 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 pb-8 duration-200`}
            placeholder={`message`}
            name="message"
            cols={30}
            rows={10}
          />
          <div className={`flex w-full justify-end`}>
            <Button
              disabled={navigation.state !== "idle"}
              className={`max-w-fit`}
              type={"submit"}>
              {navigation.state === "idle" ? (
                <span>Encrypt</span>
              ) : (
                <span className={`flex gap-2`}>
                  Wait
                  <Spinner />
                </span>
              )}
            </Button>
          </div>
        </fieldset>
      </Form>
      <div className={`flex flex-col text-3xl`}>
        <span className={`break-all`}>{actionData?.numerator}</span>
        <hr />
        <span className={`break-all`}>{actionData?.denominator}</span>
      </div>
    </div>
  );
}

export async function action({ request }: ActionArgs) {
  const formData: FormData = await request.formData();
  const data: Record<string, FormDataEntryValue> = Object.fromEntries(formData);
  const parsedData: SafeParseReturnType<EncryptData, EncryptData> =
    encryptDataSchema.safeParse(data);
  if (parsedData.success) {
    const { message }: EncryptData = parsedData.data;
    // // response throttling
    // await new Promise((resolve: (value: void) => void) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 5000);
    // });
    const ratio: Ratio = encrypt(message);
    return json({
      numerator: ratio.numerator.toString(),
      denominator: ratio.denominator.toString(),
    });
  } else {
    throw new Response(undefined, {
      status: 400,
    });
  }
}

export default EncryptPage;
