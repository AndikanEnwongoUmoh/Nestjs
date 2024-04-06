import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class productDto{
@IsNotEmpty()
@IsString()
name: string;

@IsNotEmpty()
@IsString()
description: string;

@IsNotEmpty({message: 'Please complete this feild'})
@IsNumber()
price: number;

}

