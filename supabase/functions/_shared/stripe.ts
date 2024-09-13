import Stripe from "stripe";
import { createClient } from "supabase";
import { Messages } from "./messages.ts";
import { DEFAULT_STRIPE_VERSION } from "./constants.ts";
import { pick } from "./helpers.ts";

const supabaseClient = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_ANON_KEY") ?? "",
);

const stripeClient = new Stripe(Deno.env.get("STRIPE_SECRET") as string, {
  apiVersion: DEFAULT_STRIPE_VERSION,
});

export const createCustomer = async (
  data: Stripe.CustomerCreateParams,
) => {
  const result: any = { success: true, message: null, data: null };
  const { name, email } = data;
  try {
    const response = await stripeClient.customers.create({
      name: name,
      email: email,
    });
    if (response) {
      result.data = pick(response, ["id", "name", "email", "invoice_settings"]);
      result.message = Messages.CUSTOMER_CREATED;
    }
  } catch (error) {
    result.message = error.message;
    result.success = false;
  }

  return result;
};
