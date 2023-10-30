import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { envs } from './envs';

describe('envs', () => {
  let app: NestExpressApplication;
  let configService: ConfigService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key) => {
              if (key === 'port') return 3000;
              if (key === 'nodeEnv') return 'development';
            }),
          },
        },
      ],
    }).compile();

    app = module.createNestApplication<NestExpressApplication>();
    configService = module.get<ConfigService>(ConfigService);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return the correct port and nodeEnv', () => {
    const result = envs(app);

    expect(configService.get).toHaveBeenCalledTimes(2);

    expect(result.port).toEqual(3000);
    expect(result.nodeEnv).toEqual('development');
  });
});
