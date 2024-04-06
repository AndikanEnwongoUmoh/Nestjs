import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productEntity } from './entity/product.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([productEntity])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
