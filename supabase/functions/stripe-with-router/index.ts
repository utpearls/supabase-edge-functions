// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { allowPathsList, PATHS } from "../_shared/constants.ts";
import { checkPath, response } from "../_shared/helpers.ts";
import { createCustomer } from "../_shared/stripe.ts";

Deno.serve(async (req) => {
  try {
    const requestedPath = await req.headers.get("path");
    const requestBody: any = await req.json();
    console.log("request", requestedPath);

    if (!checkPath(requestedPath)) {
      return response(allowPathsList, "Only Given paths are allowed");
    }

    switch (requestedPath) {
      case PATHS.CREATE_CARD:
        {
          const result = await createCustomer(requestBody);

          if (result) {
            return response(result);
          }
        }
        break;

      default:
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }

  return new Response(JSON.stringify({ error: "server error" }), {
    headers: { "Content-Type": "application/json" },
    status: 500,
  });
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/stripe-with-router' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
