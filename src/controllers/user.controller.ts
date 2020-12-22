import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import mongoose from 'mongoose';
import boom from 'boom';
import User from '../models/User';

export const getUsers = async (request, reply): Promise<mongoose.Document[]> => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw boom.boomify(error);
  }
};

export const store = async (request, reply) => {
  try {
    const user = new User(request.body);
    return await user.save();
  } catch (error) {
    throw boom.boomify(error);
  }
};
