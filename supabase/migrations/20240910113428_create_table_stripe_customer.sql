CREATE TABLE IF NOT EXISTS
  "public"."stripeCustomer" (
    "id" BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "customerId" TEXT,
    "idCardFront" TEXT,
    "idCardBack" TEXT,
    "isBankSetup" BOOLEAN DEFAULT false,
    "accountHolderType" TEXT,
    "accountType" TEXT,
    "accountId" TEXT,
    "userId" BIGINT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );

ALTER TABLE "public"."stripeCustomer" OWNER TO "postgres";