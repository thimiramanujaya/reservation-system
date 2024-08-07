import express from 'express'

import { 
    getDoctors,
    getDoctor,
    createDoctor,
    deleteDoctor,
    updateDoctor,
} from '../controllers/doctorController'

const router = express.Router()


router.get('/', getDoctors)

router.get('/:id', getDoctor)

router.post('/', createDoctor)

router.delete('/:id', deleteDoctor)

router.patch('/:id', updateDoctor)

export default router