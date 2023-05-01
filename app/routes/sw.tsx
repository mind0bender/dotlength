export function loader() {
  return new Response(
    `
  console.log("LOL");
  `,
    {
      headers: {
        "Content-Type": "text/javascript",
      },
    }
  );
}
