/*
  Warnings:

  - You are about to drop the `ClassPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StudentMessage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClassPost" DROP CONSTRAINT "ClassPost_classId_fkey";

-- DropForeignKey
ALTER TABLE "StudentMessage" DROP CONSTRAINT "StudentMessage_senderId_fkey";

-- DropForeignKey
ALTER TABLE "StudentMessage" DROP CONSTRAINT "StudentMessage_studentId_fkey";

-- DropTable
DROP TABLE "ClassPost";

-- DropTable
DROP TABLE "StudentMessage";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "studentId" TEXT,
    "teacherId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
