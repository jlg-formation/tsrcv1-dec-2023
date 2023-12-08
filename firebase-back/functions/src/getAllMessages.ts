import { getFirestore } from "firebase-admin/firestore";
import { logger } from "firebase-functions/v1";
import { onRequest } from "firebase-functions/v2/https";

export const getAllMessages = onRequest(async (req, res) => {
  // Push the new message into Firestore using the Firebase Admin SDK.
  const documents = await getFirestore().collection("messages").listDocuments();

  const result: (FirebaseFirestore.DocumentData | undefined)[] = [];
  for (const doc of documents) {
    const d = await doc.get();
    result.push(d.data());
    logger.info("info sur le doc: ", d.data());
  }

  // Send back a message that we've successfully written the message
  res.json({ result: result });
});
