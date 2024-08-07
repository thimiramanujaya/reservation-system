import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB,
    entities: ["entites/*.ts"],
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