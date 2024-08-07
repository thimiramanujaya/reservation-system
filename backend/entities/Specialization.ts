import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('specialization')
export class Specialization extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    specialization_id: string;

    @Column()
    name: string;
    
    @Column()
    description: string;
    

}