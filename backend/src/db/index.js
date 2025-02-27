import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        const DBresponse=await mongoose.connect(`${process.env.DB_URI}/QR-Based Restaurants Project`)
        console.log(`\n MongoDB Connected !! DB Host : ${DBresponse.connection.host}`);
        
    } catch (error) {
        console.log(`ERROR:${error}`);
        process.exit(1)
    }
}
export default connectDB;