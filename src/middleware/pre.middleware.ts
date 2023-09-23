import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { CORS_ORIGIN } from '../constants';

function PreMiddleware(app: express.Application) {

  // Middleware to enable CORS
  app.use(cors({ origin: "*" }));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // You can restrict this to specific origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));

  //CORS RESTRICTED
  // app.use(
  //   cors({
  //     origin: CORS_ORIGIN,
  //     credentials: true,
  //   }),
  // );

  app.use(helmet());

  return app;
}

export default PreMiddleware;
