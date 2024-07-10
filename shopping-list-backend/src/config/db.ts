// src/config/db.ts

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB conectado com sucesso');
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Erro de conexão com MongoDB: ${error.message}`);
    } else {
      console.error('Erro de conexão com MongoDB: Erro desconhecido');
    }
    process.exit(1); // Sair do processo com falha
  }
};

export default connectDB;
