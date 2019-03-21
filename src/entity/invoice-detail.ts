import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product";
import {Invoice} from "./invoice";

@Entity()
export class InvoiceDetail extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: string;

    @ManyToOne(type => Invoice, invoice => invoice.details)
    public invoice: Invoice;

    @Column({length: 200})
    public detail: string;

    @Column("int")
    public quantity: number;

    @Column("double")
    public unitPrice: number;

    @Column("double")
    public base: number;

    @Column("double")
    public tax: number;

    @Column("double")
    public total: number;

    @OneToOne(type => Product)
    @JoinColumn()
    public product: Product;

}
