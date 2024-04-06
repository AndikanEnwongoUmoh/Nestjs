import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { productEntity } from "../entity/product.entity";


export const productEnvironment: TypeOrmModuleOptions = {
    
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'crud',
        entities: [productEntity],
        synchronize: true,
        
      

}