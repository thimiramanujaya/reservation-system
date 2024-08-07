import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Doctor } from "./Doctor";

@Entity('specialization')
export class Specialization extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    specialization_id: string;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @ManyToMany(
        () => Doctor
    )
    doctors: Doctor[];
    

}