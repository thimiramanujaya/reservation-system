import express from 'express'

import { 
    getPatients,
    getPatient,
    createPatient,
    deletePatient,
    updatePatient,
} from '../controllers/patientController'

const router = express.Router()


router.get('/', getPatients)

router.get('/:id', getPatient)

router.post('/', createPatient)

router.delete('/:id', deletePatient)

router.put('/:id', updatePatient)

export default router