import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import mongoose from 'mongoose';

async function dbConnector(fastify: FastifyInstance, options) {
  try {
    const url = process.env.MONGO_URI + '/local';
    const db = await mongoose.connect(url, { useNewUrlParser: true });

    console.log('Mongodb is connected');
    fastify.decorate('mongo', db);
  } catch (error) {
    console.log(error);
  }
}

export default fastifyPlugin(dbConnector);
