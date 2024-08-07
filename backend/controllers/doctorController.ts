import { Doctor } from '../entities/Doctor';
import { Specialization } from '../entities/Specialization';
import { Request, Response } from 'express';

const getDoctors = async (req: Request, res: Response): Promise<void>  => {
    try {
        const doctors = await Doctor.find({})
        res.status(200).json(doctors)
        
    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
}

const getDoctor = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const doctor = await Doctor.findOne({ where: { doctor_id: id } });

        if (!doctor) {
            res.status(400).json({ error: 'Doctor not found' });
            return
        }

        res.status(200).json(doctor)

    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }

}

const createDoctor = async (req: Request, res: Response) => {
    const { name, email, phone, address, is_available, speciality, description } = req.body

    try {
        const doctor = await Doctor.create({
            name,
            email,
            phone,
            address,
            is_available,
        }).save()

        const specialization = await Specialization.create({
            speciality,
            description,
        }).save()

        if(!doctor || !specialization) {
            res.status(400).json({error: 'assigning doctor specialization failed'}) 
            return
        }

        doctor.specializations = [specialization]
        const doctorSpecialization = await doctor.save()

        res.status(200).json({doctor, specialization, doctorSpecialization})
        
    } catch (error) {
        res.status(400).json({error: (error as Error).message}) 
    }
}

const deleteDoctor = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const doctor = await Doctor.findOne({ where: { doctor_id: id } });

        if (!doctor) {
            res.status(400).json({ error: 'Doctor not found' });
            return
        }

        const deletedDoctor = await Doctor.delete(id)

        if(!deletedDoctor) { 
            res.status(400).json({error: 'Doctor not found'})
            return
        }
        res.status(200).json(deletedDoctor)
        
    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
}

const updateDoctor = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const doctor = await Doctor.findOne({ where: { doctor_id: id } });

        if (!doctor) {
            res.status(400).json({ error: 'Doctor not found' });
            return
        }

        await Doctor.update({ doctor_id: id }, req.body)  

        const updatedDoctor = await Doctor.findOne({ where: { doctor_id: id } })

        res.status(200).json(updatedDoctor)
        // need to update specialization also, if those properties availble

    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }

}

export {
    getDoctors,
    getDoctor,
    createDoctor,
    deleteDoctor,
    updateDoctor,
}