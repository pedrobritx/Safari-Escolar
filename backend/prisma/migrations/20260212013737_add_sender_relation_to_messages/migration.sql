/*
  Warnings:

  - The values [POSITIVE,NEGATIVE] on the enum `FeedbackEventType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FeedbackEventType_new" AS ENUM ('positive', 'negative');
ALTER TABLE "FeedbackEvent" ALTER COLUMN "type" TYPE "FeedbackEventType_new" USING ("type"::text::"FeedbackEventType_new");
ALTER TYPE "FeedbackEventType" RENAME TO "FeedbackEventType_old";
ALTER TYPE "FeedbackEventType_new" RENAME TO "FeedbackEventType";
DROP TYPE "FeedbackEventType_old";
COMMIT;

-- AlterTable
ALTER TABLE "FeedbackEvent" ADD COLUMN     "comment" TEXT;

-- CreateTable
CREATE TABLE "ClassPost" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClassPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentMessage" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StudentMessage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClassPost" ADD CONSTRAINT "ClassPost_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentMessage" ADD CONSTRAINT "StudentMessage_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentMessage" ADD CONSTRAINT "StudentMessage_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
