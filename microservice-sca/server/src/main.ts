import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * @import Recipes
 */
import { SwaggerUtil } from 'src/common/recipes/swagger/swagger.util';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // -- Cors
    app.enableCors();

    // -- Utils
    SwaggerUtil.buildSwagger(app);

    // -- Boot the app
    await app.listen(process.env.PORT ? process.env.PORT : 8080)
}
bootstrap();
