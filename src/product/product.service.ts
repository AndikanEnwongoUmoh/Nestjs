import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { productEntity } from './entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(productEntity) private productReposiyory:Repository<productEntity>){}


    async createProduct(payload){
        return await this.productReposiyory.save(payload);
  
    }

    async findId(id: number){
        const find = await this.productReposiyory.findOne({where:{id: id}});
        if(!find){
            throw new HttpException(`Product not found with id ${id}`, 404);
        }
        return find;
    }
    async findAll() : Promise<productEntity[]> {
        return await this.productReposiyory.find()
    }

    async updateProduct(id: number, payload){
        const find = await this.productReposiyory.findOneBy({id: id});
        if(!find){ 
            throw new HttpException(`Product not found with id ${id}`, 400);
        }
        return this.productReposiyory.update(id, payload)
    }

    async deleteProduct(id: number){
        const find = await this.productReposiyory.findOneBy({id})
        if(!find){
            throw new HttpException(`Product not found with id ${id}`, 400)
        }
        return this.productReposiyory.delete(id)
    }
}

