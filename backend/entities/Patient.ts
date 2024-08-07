import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('patient')
export class Patient extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    patient_id: string;

    @Column()
    name: string;
    
    @Column({
        type: 'date'
    })
    dob: Date;

    @Column()
    gender: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        unique: true,
        length: 10
    })
    phone: string;

    @Column()
    address: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    

}