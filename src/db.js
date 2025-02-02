import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dbhrn:Espadaplasma1@atlascluster.goxqfcv.mongodb.net/happycompany');
        console.log('Database connected!');
    } catch (error) {
        console.log(error);
    }
    
};
