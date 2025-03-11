import mongoose from 'mongoose';
import { Schema, model, models } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  image?: string;
  emailVerified?: Date;
}

const userSchema = new Schema<IUser>({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String 
  },
  emailVerified: { 
    type: Date 
  }
}, {
  timestamps: true
});

export const User = models.User || model<IUser>('User', userSchema);
