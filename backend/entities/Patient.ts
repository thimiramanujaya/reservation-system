import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Reservation } from "./Reservation";

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
    
    @OneToMany(
        () => Reservation,
        reservation => reservation.patient
    )
    p_reservations: Reservation[]

}