import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const user = process.env.USER_NAME
const pass = process.env.DB_PASSWORD

 const Connection = async () => {
    // const uri = `mongodb+srv://${user}:${pass}@cluster0.zoyauwr.mongodb.net/?retryWrites=true&w=majority`
    const uri = 'mongodb://0.0.0.0:27017/user'
    try {
        await mongoose.connect(uri, { useUnifiedTopology: true })
        console.log('connected successfully');
    } catch (error) {
        console.log(error);
    }
} 

export default Connection