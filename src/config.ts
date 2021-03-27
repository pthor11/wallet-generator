import { config } from "dotenv";

config()

if (!process.env.PORT ) throw new Error(`PORT must be provided`)
const PORT = process.env.PORT 

const TRX_FULL_HOST = 'https://api.trongrid.io'
export {
    PORT,
    TRX_FULL_HOST 
}