/*
  Warnings:

  - Added the required column `src` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Playlist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Playlist" ("author", "createdAt", "description", "id", "name", "updatedAt") SELECT "author", "createdAt", "description", "id", "name", "updatedAt" FROM "Playlist";
DROP TABLE "Playlist";
ALTER TABLE "new_Playlist" RENAME TO "Playlist";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
