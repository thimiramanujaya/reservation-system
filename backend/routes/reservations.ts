import express from 'express'

import { 
    getReservations,
    getReservation,
    createReservation,
    deleteReservation,
    updateReservation,
} from '../controllers/reservationController'

const router = express.Router()


router.get('/', getReservations)

router.get('/:id', getReservation)

router.post('/', createReservation)

router.delete('/:id', deleteReservation)

router.put('/:id', updateReservation)

export default router