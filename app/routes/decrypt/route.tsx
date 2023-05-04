import type { SafeParseReturnType } from "zod";
import type { ActionArgs } from "@remix-run/node";
import type { Ratio } from "~/lib/encrypt.server";
import type { V2_MetaDescriptor } from "@remix-run/react";
import type { RatioForm } from "./decrypt.form.validation";
import { json } from "@remix-run/node";
import Button from "~/components/button";
import Spinner from "~/components/spinner";
import decrypt from "~/lib/decrypt.server";
import ratioSchema from "./decrypt.form.validation";
import { Form, useActionData, useNavigation } from "@remix-run/react";

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
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  return (
    <div className={`px-8 py-6 flex flex-col justify-center items-center`}>
      <Form method={"POST"} className={`w-full container mx-auto`}>
        <fieldset className={`flex flex-col items-center gap-8`}>
          <div className={`flex gap-4 sm:gap-8`}>
            <textarea
              required
              disabled={navigation.state !== "idle"}
              className={`w-full shadow-md shadow-slate-100 dark:shadow-black focus:shadow-slate-500 max-h-[50vh] px-4 py-3 caret-emerald-400 focus:outline outline-slate-800 dark:outline-slate-300 placeholder:text-slate-500 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 pb-8 duration-200`}
              placeholder={`numerator`}
              name="numerator"
              cols={30}
              rows={10}
            />
            <textarea
              required
              disabled={navigation.state !== "idle"}
              className={`w-full shadow-md shadow-slate-100 dark:shadow-black focus:shadow-slate-500 max-h-[50vh] px-4 py-3 caret-emerald-400 focus:outline outline-slate-800 dark:outline-slate-300 placeholder:text-slate-500 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 pb-8 duration-200`}
              placeholder={`denominator`}
              name="denominator"
              cols={30}
              rows={10}
            />
          </div>
          <div className={`flex w-full justify-end`}>
            <Button
              disabled={navigation.state !== "idle"}
              className={`max-w-fit`}
              type={"submit"}>
              {navigation.state === "idle" ? (
                <span>Decrypt</span>
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
      <div className={`flex flex-col`}>
        <span className={`break-all text-3xl`}>{actionData?.message}</span>
        <span
          className={`border border-red-500 text-xl px-3 py-2 ${
            actionData?.error || "hidden"
          }`}>
          {actionData?.error}
        </span>
      </div>
    </div>
  );
}

export async function action({ request }: ActionArgs) {
  const formData: FormData = await request.formData();
  const data: Record<string, FormDataEntryValue> = Object.fromEntries(formData);

  const parsedData: SafeParseReturnType<RatioForm, RatioForm> =
    ratioSchema.safeParse(data);
  if (parsedData.success) {
    const numerator: number = parseInt(parsedData.data.numerator);
    const denominator: number = parseInt(parsedData.data.denominator);
    if (Number.isInteger(numerator) && Number.isInteger(denominator)) {
      const ratio: Ratio = {
        numerator: BigInt(parsedData.data.numerator),
        denominator: BigInt(parsedData.data.denominator),
      };
      const message: string = decrypt(ratio);
      return json({
        message,
        error: null,
      });
    } else {
      return json({
        message: null,
        error: "Invalid Input",
      });
    }
  } else {
    return json({
      message: null,
      error: "Invalid Input",
    });
  }
}

export default DecryptPage;
