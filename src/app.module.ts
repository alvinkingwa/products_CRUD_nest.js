import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productsModule } from './products/products.module';
import { ControllerModule } from './test/controller/controller.module';

@Module({
  imports: [productsModule, ControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
