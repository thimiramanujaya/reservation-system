import express from 'express';
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';

import patientRoutes from './routes/patients'
import doctorRoutes from './routes/doctors'
import reservationRoutes from './routes/reservations'


const app = express()
app.use(express.json())

dotenv.config()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.listen(process.env.SERVER_PORT, ( ) => {
    console.log('listening on port', process.env.SERVER_PORT);
});

app.use('/api/patients',patientRoutes)
app.use('/api/doctors',doctorRoutes)
app.use('/api/reservations',reservationRoutes)

const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB,
    entities: ["entities/*.ts"],
    synchronize: true

})

const connectDb = async () => {

    try {
        const connection = await dataSource.initialize()

        if(!connection) {
            return console.log('Database not connected')
        }
        console.log('Database connected')
        
    } catch (error) {
        console.log(error)
        throw new Error('Database connection failed')
    }

}

connectDb()