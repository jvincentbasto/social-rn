import dotenv from "dotenv";

dotenv.config();
const processEnv = process.env;

export const ENV = {
  PORT: processEnv.PORT,
  NODE_ENV: processEnv.NODE_ENV,
  MONGO_URI: processEnv.MONGO_URI,
  CLERK_PUBLISHABLE_KEY: processEnv.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: processEnv.CLERK_SECRET_KEY,
  CLOUDINARY_CLOUD_NAME: processEnv.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: processEnv.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: processEnv.CLOUDINARY_API_SECRET,
  ARCJET_KEY: processEnv.ARCJET_KEY,
};
