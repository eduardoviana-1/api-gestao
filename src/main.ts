import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir comunicação com o frontend
  app.enableCors();

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Gestão de Equipamentos')
    .setDescription('Sistema de controle de usuários, estoque e retiradas de equipamentos.')
    .setVersion('1.0')
    .addTag('usuario')
    .addTag('equipamentos')
    .addTag('estoque')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
