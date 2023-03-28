-- CreateTable
CREATE TABLE "tcontas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sexo" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "tcontas_name_key" ON "tcontas"("name");
