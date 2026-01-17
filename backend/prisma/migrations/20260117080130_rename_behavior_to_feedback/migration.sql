/*
  Warnings:

  - You are about to drop the `BehaviorEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BehaviorEvent" DROP CONSTRAINT "BehaviorEvent_studentId_fkey";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "birthday" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "whatsapp" TEXT;

-- DropTable
DROP TABLE "BehaviorEvent";

-- CreateTable
CREATE TABLE "FeedbackEvent" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeedbackEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeedbackEvent" ADD CONSTRAINT "FeedbackEvent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
