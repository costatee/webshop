import { INestApplication, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { LoggerErrorInterceptor } from 'nestjs-pino';
import * as helmet from 'helmet';
import { LoggerService } from './infrastructure/service/logger';

const globalPrefix = 'api';
const swaggerPath = 'api-docs';
const port = process.env.PORT || 3333;

process.setMaxListeners(15);

function withPlugins(app: INestApplication): void {
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.setGlobalPrefix(globalPrefix);

  app.use(helmet.default({ contentSecurityPolicy: false }));
  app.useLogger(app.get(LoggerService));

  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  // app.useGlobalInterceptors(new ErrorsInterceptor());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.enableCors();
}

function withSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Webshop ')
    .setDescription('The Webshop API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(swaggerPath, app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });
}

async function bootstrap() {
  const logger = new LoggerService('bootstrap');
  const app = await NestFactory.create(AppModule);

  withPlugins(app);
  withSwagger(app);

  logger.log(`Swagger initialized on {/${swaggerPath}} path`);

  await app.listen(port);

  logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
