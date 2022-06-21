import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()
let client: Pool;
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    TEST_DB,
    ENVI
} = process.env 

if (ENVI === "test"){
    client = new Pool({
        host: POSTGRES_HOST,
        database: TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })}

if (ENVI === "dev"){
    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
        })}

export default client