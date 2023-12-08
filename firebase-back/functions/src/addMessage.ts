import { getFirestore } from 'firebase-admin/firestore';
import { onRequest } from 'firebase-functions/v2/https';

export const addMessage = onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await getFirestore()
    .collection('messages')
    .add({ original: original });
  // Send back a message that we've successfully written the message
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});
