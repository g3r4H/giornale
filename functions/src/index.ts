import * as functions from 'firebase-functions';
import type { HttpsFunction } from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld: HttpsFunction = functions.https.onRequest(
  (request, response) => {
    functions.logger.info('Hello logs!', { structuredData: true });
    response.send('Hello from Firebase!');
  }
);
