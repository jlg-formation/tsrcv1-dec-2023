import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';

let counter = 0;

export const hello = onRequest((request, response) => {
  logger.info('Hello tout court logs!', { structuredData: true });
  counter++;
  response.json({ toto: 'titi', counter, query: request.query });
});
