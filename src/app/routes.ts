import { FastifyRequest, FastifyReply, RouteOptions } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import * as userController from '../controllers/user.controller';

const home: RouteOptions = {
  method: 'GET',
  url: '/',
  handler: async (request, reply): Promise<void> => {
    reply.send({ hello: 'World' });
  }
};

const token: RouteOptions = {
  method: 'GET',
  url: '/token',
  handler: async (request, reply): Promise<void> => {
    reply.send({ token: 'token' });
  }
};

const getUsers: RouteOptions = {
  method: 'GET',
  url: '/users',
  handler: userController.getUsers
};

const store: RouteOptions = {
  method: 'POST',
  url: '/users',
  handler: userController.store
};

const routes = [home, token, getUsers, store];

export default routes;
