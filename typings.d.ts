import fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { Logger } from 'pino';
import * as knex from 'knex';

declare module 'fastify' {
    // interface FastifyRequest<HttpRequest> {
    //     user: any;
    // }
    // interface FastifyReply<HttpResponse> {
    //     view: any;
    // }
    // interface Request extends FastifyRequest<IncomingMessage> { }
    // interface Reply extends FastifyReply<ServerResponse> { }
    interface FastifyInstance {
        db: knex;
        ipAddr: string;
        apiVersion: string
    }
}
