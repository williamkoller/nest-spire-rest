import { ConfigurationType, configuration } from './configuration';

describe('configuration', () => {
  it('should return the correct configuration', () => {
    process.env.PORT = 3000;
    process.env.NODE_ENV = 'test';

    const config: ConfigurationType = configuration();

    expect(config.port).toBe(3000);
    expect(config.nodeEnv).toBe('test');
  });
});
