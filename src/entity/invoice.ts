import {BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Client} from "./client";
import {InvoiceDetail} from "./invoice-detail";

@Entity()
export class Invoice extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: string;
    @Column()
    public base: number;
    @Column()
    public tax: number;
    @Column()
    public total: number;
    @OneToOne(type => Client)
    @JoinColumn()
    public client: Client;
    @OneToMany(type => InvoiceDetail, detail => detail.invoice)
    @JoinColumn()
    public details: InvoiceDetail[];

}
