export const DEFAULT_STRIPE_VERSION = "2023-08-16";
export const allowPathsList = [
  {
    path: "create-card",
    description: "This path create / update customer in stripe",
  },
  {
    path: "delete-card",
    description: "Delete customer card",
  },
  {
    path: "attach-payment-method",
    description: "This attach payment method to respective customer",
  },

  {
    path: "make-card-default",
    description: "This path make respective card default",
  },
];

export const PATHS = Object.freeze({
  CREATE_CARD: "create-card",
  DELETE_CARD: "delete-card",
  ATTACH_PAYMENT_METHOD: "attach-payment-method",
  MAKE_CARD_DEFAULT: "make-card-default",
});
