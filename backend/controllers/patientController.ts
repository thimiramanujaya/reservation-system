import { Patient } from '../entities/Patient';
import { Request, Response } from 'express';

const getPatients = async (req: Request, res: Response): Promise<void> => {
    try {
        const patients = await Patient.find({})
        res.status(200).json(patients)
        
    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
}

const getPatient = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const patient = await Patient.findOne({ where: { patient_id: id } });

        if (!patient) {
            res.status(400).json({ error: 'Patient not found' });
            return
        }

        res.status(200).json(patient)

    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const createPatient = async (req: Request, res: Response): Promise<void> => {
    const { name, dob, gender, email, phone, address } = req.body

    try {
        const patient = await Patient.create({
            name,
            dob,
            gender,
            email,
            phone,
            address,
        }).save()

        res.status(200).json(patient)
        
    } catch (error) {
        res.status(400).json({error: (error as Error).message}) 
    }
}

const deletePatient = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const patient = await Patient.findOne({ where: { patient_id: id } });

        if (!patient) {
            res.status(400).json({ error: 'Patient not found' });
            return
        }

        const deletedPatient = await Patient.delete(id)

        if(!deletedPatient) { 
            res.status(400).json({error: 'Patient not found'})
            return
        }
        res.status(200).json(deletedPatient)
        
    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
}

const updatePatient = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const patient = await Patient.findOne({ where: { patient_id: id } });

        if (!patient) {
            res.status(400).json({ error: 'Patient not found' });
            return
        }

        await Patient.update({ patient_id: id }, req.body)

        const updatedPatient = await Patient.findOne({ where: { patient_id: id } })

        res.status(200).json(updatedPatient)
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

export {
    getPatients,
    getPatient,
    createPatient,
    deletePatient,
    updatePatient,
}