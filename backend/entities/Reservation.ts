import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export enum Status {
    SENT = "sent",
    PENDING = "pending",
    RESERVED = "reserved",
    POSTPONDED = "postponded",
    REJECTED = "rejected"
}


@Entity('reservation')
export class Reservation extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    reservation_id: string;

    @PrimaryColumn({
        unique: true
    })
    doctor_id: string;
    
    @PrimaryColumn({
        unique: true
    })
    patient_id: string;

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

}