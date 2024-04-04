import { ClientActionFunctionArgs, redirect } from "@remix-run/react";

export async function clientAction({ request }: ClientActionFunctionArgs) {
  const body = await request.formData();
  console.log(body.get("title"));
  console.log(body.get("body"));
  return redirect(`/blog/posts`);
}
