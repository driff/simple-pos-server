import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public fullname: string;

    @Column()
    public address: string;

    @Column()
    public email: string;

    @Column()
    public phone: string;
}
