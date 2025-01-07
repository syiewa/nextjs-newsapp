export function GET(request: Request): Response {
    console.log(request);
  return new Response(
    `Hello from the GET method!`,
    {
      headers: {
        "content-type": "text/plain",
      },
    },
  );
}

export function POST(request: Request): Response {
  return new Response(
    `Hello from the POST method!`,
    {
      headers: {
        "content-type": "text/plain",
      },
    },
  );
}