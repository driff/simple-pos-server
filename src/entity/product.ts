import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public description: string;

    @Column()
    public price: number;

    @Column()
    public tax: number;

}
