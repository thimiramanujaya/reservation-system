import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Patient } from "./Patient";
import { Doctor } from "./Doctor";

export enum Status {
    SENT = "sent",
    PENDING = "pending",
    RESERVED = "reserved",
    POSTPONED = "postponed",
    REJECTED = "rejected"
}


@Entity('reservation')
export class Reservation extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    reservation_id: string;

    @Column({
        type: 'date'
    })
    reserved_date: Date;

    @Column({
        type: 'time'
    })
    reserved_time: string;
    
    @Column({
        type: 'enum',
        enum: Status,
        default: null
    })
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(
        () => Patient,
        patient => patient.p_reservations,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }
    )
    @JoinColumn({
        name: 'patient_id'
    })
    patient: Patient;


    @ManyToOne(
        () => Doctor,
        doctor => doctor.d_reservations,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }
    )
    @JoinColumn({
        name: 'doctor_id'
    })
    doctor: Doctor;

}