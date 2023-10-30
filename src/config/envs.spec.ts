import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { envs } from './envs';

describe('envs', () => {
  let app: NestExpressApplication;
  let configService: ConfigService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        // Coloque aqui os módulos que você precisa para o seu teste
      ],
      controllers: [
        // Coloque aqui os controladores que você precisa para o seu teste
      ],
      providers: [
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key) => {
              if (key === 'port') return 3000; // Substitua o valor conforme necessário
              if (key === 'nodeEnv') return 'development'; // Substitua o valor conforme necessário
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

    expect(result.port).toEqual(3000); // Substitua o valor conforme necessário
    expect(result.nodeEnv).toEqual('development'); // Substitua o valor conforme necessário
  });
});
