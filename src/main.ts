import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()

.setTitle('My API')
.setDescription('API description')
.setVersion('1.0')
.addTag('ap1')
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();




/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  const core_1 = require("@nestjs/core");
  const app_module_1 = require("./app.module");
  const { DocumentBuilder, SwaggerModule } = require("@nestjs/swagger");
  async function bootstrap() {
      const app = await core_1.NestFactory.create(app_module_1.AppModule);
    
      const config = new  DocumentBuilder()
      .setTitle('My API')
      .setDescription ('API Description')
      .setVersion ('1.0')
      .addTag('api')
      .build();
      const document = SwaggerModule.createDocument(app, config);
  
      SwaggerModule.setup('api', app, document);
  
      await app.listen(process.env.PORT ?? 3000)
  }
  bootstrap();
  //# sourceMappingURL=main.js.map
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();*/
