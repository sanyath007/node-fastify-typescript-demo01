/// <reference path="../../typings.d.ts" />

import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes';

/**
 * =========================
 * Load Configuration
 * =========================
 */
require('dotenv').config({ path: path.join(__dirname, '../../config') });

/**
 * =========================
 * Create fastify instance
 * =========================
 */
const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
> = fastify({
  logger: {
    level: 'error',
    prettyPrint: true
  },
});

/**
 * =========================
 * App Configuration
 * =========================
 */
server.ipAddr = '';
server.apiVersion = '';

/**
 * =========================
 * Database Connection
 * =========================
 */
// server.register(require('./db'));
try {
  const url = process.env.MONGO_URI + '/test';
  mongoose.connect(url, { useNewUrlParser: true });

  console.log('Mongodb is connected');
} catch (error) {
  console.log(error);
}

/**
 * =========================
 * Routes registration
 * =========================
 */
routes.forEach((route) => {
  server.route(route);
});

function build() {
  return server;
}

export default build;
