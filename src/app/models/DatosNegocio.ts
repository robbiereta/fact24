import mongoose from 'mongoose'

const datosNegocioSchema = new mongoose.Schema({
  razonSocial: {
    type: String,
    required: [true, 'La razón social es requerida'],
  },
  rfc: {
    type: String,
    required: [true, 'El RFC es requerido'],
    minlength: [12, 'El RFC debe tener al menos 12 caracteres'],
    maxlength: [13, 'El RFC no puede tener más de 13 caracteres'],
  },
  regimenFiscal: {
    type: String,
    required: [true, 'El régimen fiscal es requerido'],
  },
  codigoPostal: {
    type: String,
    required: [true, 'El código postal es requerido'],
  },
  registroPatronal: {
    type: String,
    required: [true, 'El registro patronal es requerido'],
  },
  curp: {
    type: String,
    required: [true, 'El CURP es requerido'],
    length: [18, 'El CURP debe tener 18 caracteres'],
  },
  direccion: {
    calle: String,
    numeroExterior: String,
    numeroInterior: String,
    colonia: String,
    municipio: String,
    estado: String,
  },
  telefono: String,
  correoElectronico: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un correo electrónico válido'],
  },
}, {
  timestamps: true,
})

export default mongoose.models.DatosNegocio || mongoose.model('DatosNegocio', datosNegocioSchema)
