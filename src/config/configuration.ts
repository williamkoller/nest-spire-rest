type ConfigurationType = {
  port: number;
  nodeEnv: string;
};

export const configuration = (): ConfigurationType => ({
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV,
});
