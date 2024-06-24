/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('ADMIN', 'BUYER', 'SELLER', 'MI_USER');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "phone_number" TEXT,
    "last_login_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "active_company_context_id" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_context" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "phone_number" TEXT,
    "phone_number_prefix" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "roles" "user_role"[],

    CONSTRAINT "company_context_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_company_invites" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valid_until" TIMESTAMP(3) NOT NULL,
    "company_context_id" TEXT NOT NULL,
    "roles" "user_role"[],

    CONSTRAINT "user_company_invites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_company_invites_email_company_context_id_key" ON "user_company_invites"("email", "company_context_id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_active_company_context_id_fkey" FOREIGN KEY ("active_company_context_id") REFERENCES "company_context"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_company_invites" ADD CONSTRAINT "user_company_invites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_company_invites" ADD CONSTRAINT "user_company_invites_company_context_id_fkey" FOREIGN KEY ("company_context_id") REFERENCES "company_context"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
