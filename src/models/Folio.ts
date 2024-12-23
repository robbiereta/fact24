import mongoose from 'mongoose';

export interface IFolio extends mongoose.Document {
  folio: Number;

}

const FolioSchema = new mongoose.Schema<IFolio>({
  folio: { 
    type: Number, 
    required: true,  
  }
  // Add other schema fields as needed
});

export default mongoose.models.Folio || mongoose.model<IFolio>('Folio', FolioSchema);