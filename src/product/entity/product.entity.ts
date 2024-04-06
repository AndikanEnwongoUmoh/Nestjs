import { Column, Entity } from "typeorm";
import { base } from "./base.entity";

@Entity({name:'products'})
export class productEntity extends base{
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;


}