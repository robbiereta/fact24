import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';

import Credentials from 'next-auth/providers/credentials';
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./db"
import Resend from 'next-auth/providers/resend';
import Nodemailer from 'next-auth/providers/nodemailer';
export const { handlers,auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({}),Nodemailer({
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    },
    from: process.env.EMAIL_FROM,
  }), ],
  adapter: MongoDBAdapter(clientPromise), 
});