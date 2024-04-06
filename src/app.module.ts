import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { productEntity } from './product/entity/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'crud',
      entities: [productEntity],
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}


// create an emv file and pass the import