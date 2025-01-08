-- CreateTable
CREATE TABLE "Empleado" (
    "id" SERIAL NOT NULL,
    "nombreCompleto" TEXT NOT NULL,
    "rfc" TEXT NOT NULL,
    "curp" TEXT NOT NULL,
    "numeroSeguridadSocial" TEXT NOT NULL,
    "codigoPostal" TEXT NOT NULL,
    "fechaIngreso" TIMESTAMP(3) NOT NULL,
    "regimenContratacion" TEXT NOT NULL,
    "tipoContrato" TEXT NOT NULL,
    "tipoJornada" TEXT NOT NULL,
    "salarioBaseCotizacion" DECIMAL(65,30) NOT NULL,
    "salarioDiarioIntegrado" DECIMAL(65,30) NOT NULL,
    "periodicidadPago" TEXT NOT NULL,
    "riesgoPuesto" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "puesto" TEXT NOT NULL,
    "banco" TEXT,
    "cuentaBancaria" TEXT,
    "correoElectronico" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_rfc_key" ON "Empleado"("rfc");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_curp_key" ON "Empleado"("curp");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_numeroSeguridadSocial_key" ON "Empleado"("numeroSeguridadSocial");
