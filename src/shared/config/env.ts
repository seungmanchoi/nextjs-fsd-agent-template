export const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'MyApp',
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  IS_DEV: process.env.NODE_ENV === 'development',
  IS_PROD: process.env.NODE_ENV === 'production',
} as const;
