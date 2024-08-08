import { Patient } from '../entities/Patient';
import { Doctor } from '../entities/Doctor';
import { Reservation } from '../entities/Reservation';
import { Request, Response } from 'express';

const getReservations = async (req: Request, res: Response): Promise<void> => {
    try {
        const reservations = await Reservation.find({})
        res.status(200).json(reservations)
        
    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
}

const getReservation = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const reservation = await Reservation.findOne({ where: { reservation_id: id } });

        if (!reservation) {
            res.status(400).json({ error: 'Reservation not found' });
            return
        }

        res.status(200).json(reservation)

    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const createReservation = async (req: Request, res: Response): Promise<void> => {
    const { reservedDate, reservedTime, status, patientId, doctorId } = req.body

    try {

        //const patient = await Patient.findOne(patientId)
        //const doctor = await Doctor.findOne(doctorId)

        const reservation = await Reservation.create({
            reserved_date: reservedDate,
            reserved_time: reservedTime,
            status,
            patient: patientId,
            doctor: doctorId,
        }).save()

        res.status(200).json(reservation)
        
    } catch (error) {
        res.status(400).json({error: (error as Error).message}) 
    }
    
}

const deleteReservation = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const reservation = await Reservation.findOne({ where: { reservation_id: id } });

        if (!reservation) {
            res.status(400).json({ error: 'Reservation not found' });
            return
        }

        const deletedReservation = await Reservation.delete(id)

        if(!deleteReservation) { 
            res.status(400).json({error: 'Reservation not found'})
            return
        }
        res.status(200).json(deletedReservation)
        
    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
    
}

const updateReservation = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const reservation = await Reservation.findOne({ where: { reservation_id: id } });

        if (!reservation) {
            res.status(400).json({ error: 'Reservation not found' });
            return
        }

        await Reservation.update({ reservation_id: id }, req.body)  // need to fix

        const updatedReservation = await Reservation.findOne({ where: { reservation_id: id } })

        res.status(200).json(updatedReservation)

    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

export {
    getReservations,
    getReservation,
    createReservation,
    deleteReservation,
    updateReservation,
}

