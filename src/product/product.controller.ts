import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { productEntity } from './entity/product.entity';
import { productDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly proService: ProductService){}

    @Post()
    async createPost(@Body()payload: productDto){
        return await this.proService.createProduct(payload);
    }

    @Get(':id')
    async findby( @Param('id') id: number){
        return await this.proService.findId(id);
    }

    @Get()
    async findAll(): Promise<productEntity[]>{
        return await this.proService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() payload){
        return await this.proService.updateProduct(id, payload);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number){
        return await this.proService.deleteProduct(id);
    }

}

