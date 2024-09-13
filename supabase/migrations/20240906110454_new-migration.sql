
CREATE TABLE IF NOT EXISTS "public"."stripeCustomer" (
    "id" bigint NOT NULL,
    "customerId" character varying,
    "idCardFront" character varying null,
    "idCardBack" character varying null,
    "isBankSetup" boolean DEFAULT "false"
    "accountHolderType" character varying null,
    "accountType" character varying null,
    "accountId" character varying null,
    "userId" int NOT NULL
    "created_at" timestamp with time zone DEFAULT "now"()
);

ALTER TABLE "public"."stripeCustomer" OWNER TO "postgres";
