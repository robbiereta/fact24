-- CreateTable
CREATE TABLE "DatosNegocio" (
    "id" SERIAL PRIMARY KEY,
    "razonSocial" TEXT NOT NULL,
    "rfc" TEXT NOT NULL,
    "regimenFiscal" TEXT NOT NULL,
    "codigoPostal" TEXT NOT NULL,
    "registroPatronal" TEXT NOT NULL,
    "curp" TEXT NOT NULL,
    "direccion" JSONB,
    "telefono" TEXT,
    "correoElectronico" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);
