declare module NodeJS {
  interface ProcessEnv {
    PORT: number;
    PATH_ENV: string;
    NODE_ENV: string;
  }
}
