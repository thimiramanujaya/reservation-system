import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('doctor')
export class Doctor extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    doctor_id: string;

    @Column()
    name: string;
    
    @PrimaryColumn({
        unique: true
    })
    specialization_id: string;

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
    
    @Column({
        type: 'boolean',
        name: 'isAvailable',
        default: false
    })
    is_available: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}