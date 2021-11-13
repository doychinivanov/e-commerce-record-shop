import express from 'express';
import http from 'http';
import { ApolloServer, gql  } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import fs from 'fs';

import config from './config/config.js';
import expressConfig from './config/expressConfig.js';
import databaseConfig from './config/databaseConfig.js';
import resolvers from './graphql/resolvers.js';

const graphqlSchema = fs.readFileSync('./graphql/schema.graphql', { encoding: 'utf-8'});
const typeDefs = gql`${graphqlSchema}`;

const startApp = async () => {
    const app = express();
    await databaseConfig(app)
    expressConfig(app);

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    server.applyMiddleware({
      app,
      path: '/'
    });

    httpServer.listen(config.APP_PORT, () => console.log(`Server listening on port ${config.APP_PORT}`));
}

startApp();