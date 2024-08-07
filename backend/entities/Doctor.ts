import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Reservation } from "./Reservation";
import { Specialization } from "./Specialization";

@Entity('doctor')
export class Doctor extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    doctor_id: string;

    @Column()
    name: string;
    

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

    @OneToMany(
        () => Reservation,
        reservation => reservation.doctor
    )
    d_reservations: Reservation[]


    @ManyToMany(
        () => Specialization,
    )
    @JoinTable({
        name: 'doctors_specializations',
        joinColumn: {
            name: 'doctor',
            referencedColumnName: 'doctor_id',
        },
        inverseJoinColumn: {
            name: 'specialization',
            referencedColumnName: 'specialization_id'
        }

    })
    specializations: Specialization[];

}